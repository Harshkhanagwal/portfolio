import { useEffect, useState } from "react";
import "./AIKnowledge.css";

import {
  getAIKnowledge,
  createAIKnowledge,
  updateAIKnowledge,
  deleteAIKnowledge,
} from "../../services/aiKnowledgeService";

function AIKnowledge() {
  const [knowledge, setKnowledge] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingKnowledge, setEditingKnowledge] = useState(null);

  const [formData, setFormData] = useState({
    category: "personal",
    title: "",
    description: "",
  });

  /* =========================================================
     LOAD KNOWLEDGE
  ========================================================= */

  const loadKnowledge = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAIKnowledge();

      setKnowledge(data.knowledge || data.data || []);
    } catch (error) {
      setError(error.message || "Failed to load AI knowledge");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadKnowledge();
  }, []);

  /* =========================================================
     FORM
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingKnowledge(null);

    setFormData({
      category: "personal",
      title: "",
      description: "",
    });

    setError("");
    setShowForm(true);
  };

  const openEditForm = (item) => {
    setEditingKnowledge(item);

    setFormData({
      category: item.category || "personal",
      title: item.title || "",
      description: item.description || "",
    });

    setError("");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingKnowledge(null);

    setFormData({
      category: "personal",
      title: "",
      description: "",
    });
  };

  /* =========================================================
     SAVE
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        category: formData.category,
        title: formData.title.trim(),
        description: formData.description.trim(),
      };

      if (!payload.title) {
        setError("Title is required.");
        return;
      }

      if (!payload.description) {
        setError("Description is required.");
        return;
      }

      if (editingKnowledge) {
        await updateAIKnowledge(
          editingKnowledge._id,
          payload
        );
      } else {
        await createAIKnowledge(payload);
      }

      await loadKnowledge();

      closeForm();
    } catch (error) {
      setError(
        error.message || "Failed to save AI knowledge"
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     DELETE
  ========================================================= */

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this knowledge entry?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      await deleteAIKnowledge(id);

      setKnowledge((previous) =>
        previous.filter((item) => item._id !== id)
      );
    } catch (error) {
      setError(
        error.message || "Failed to delete AI knowledge"
      );
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="admin-page admin-ai-knowledge">

      {/* HEADER */}

      <header className="admin-page__header">

        <div>
          <span className="admin-page__eyebrow">
            AI KNOWLEDGE
          </span>

          <h1>AI Knowledge</h1>

          <p>
            Manage contextual information used by the AI assistant.
          </p>
        </div>

        {!showForm && (
          <button
            type="button"
            className="admin-button admin-button--add"
            onClick={openAddForm}
          >
            <span>+</span>
            ADD KNOWLEDGE
          </button>
        )}

      </header>

      {/* ERROR */}

      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}

      {/* FORM */}

      {showForm && (
        <div className="admin-card admin-ai-knowledge__form-card">

          <div className="admin-card__header">

            <div>
              <span className="admin-ai-knowledge__form-eyebrow">
                {editingKnowledge
                  ? "EDIT KNOWLEDGE"
                  : "NEW KNOWLEDGE"}
              </span>

              <h2>
                {editingKnowledge
                  ? "Edit knowledge"
                  : "Add knowledge"}
              </h2>
            </div>

            <button
              type="button"
              className="admin-button admin-button--close"
              onClick={closeForm}
            >
              ×
            </button>

          </div>

          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            <div className="admin-form__grid">

              {/* CATEGORY */}

              <div className="admin-form__field">

                <label htmlFor="ai-category">
                  Category
                </label>

                <select
                  id="ai-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="personal">
                    Personal
                  </option>

                  <option value="professional">
                    Professional
                  </option>
                </select>

              </div>

              {/* TITLE */}

              <div className="admin-form__field">

                <label htmlFor="ai-title">
                  Title
                </label>

                <input
                  id="ai-title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Career Goal"
                  autoComplete="off"
                  required
                />

              </div>

              {/* DESCRIPTION */}

              <div className="admin-form__field admin-form__field--full">

                <label htmlFor="ai-description">
                  Description
                </label>

                <textarea
                  id="ai-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write the information you want the AI assistant to know..."
                  rows="5"
                  required
                />

                <span className="admin-ai-knowledge__hint">
                  This information will be available to the AI assistant.
                </span>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="admin-form__actions">

              <button
                type="button"
                className="admin-button admin-button--cancel"
                onClick={closeForm}
                disabled={saving}
              >
                CANCEL
              </button>

              <button
                type="submit"
                className="admin-button admin-button--save"
                disabled={saving}
              >
                {saving
                  ? "SAVING..."
                  : editingKnowledge
                    ? "UPDATE KNOWLEDGE"
                    : "SAVE KNOWLEDGE"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* LIST */}

      <div className="admin-ai-knowledge__list">

        <div className="admin-ai-knowledge__list-header">
          <span className="admin-ai-knowledge__count">
            {String(knowledge.length).padStart(2, "0")} ENTRIES
          </span>
        </div>

        {loading ? (

          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              --
            </span>

            <div className="admin-empty__content">
              <h2>Loading knowledge</h2>

              <p>
                Fetching data from the server.
              </p>
            </div>

          </div>

        ) : knowledge.length === 0 ? (

          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              00
            </span>

            <div className="admin-empty__content">

              <h2>No knowledge yet</h2>

              <p>
                Add your first AI knowledge entry to get started.
              </p>

            </div>

          </div>

        ) : (

          <div className="admin-ai-knowledge__grid">

            {knowledge.map((item) => (

              <article
                className="admin-ai-knowledge__card"
                key={item._id}
              >

                <div className="admin-ai-knowledge__card-top">

                  <h2>
                    {item.title}
                  </h2>

                  <span
                    className={`admin-ai-knowledge__category admin-ai-knowledge__category--${item.category}`}
                  >
                    {item.category}
                  </span>

                </div>

                <p className="admin-ai-knowledge__description">
                  {item.description}
                </p>

                <div className="admin-ai-knowledge__card-footer">

                  <span className="admin-ai-knowledge__index">
                    / {String(knowledge.indexOf(item) + 1).padStart(2, "0")}
                  </span>

                  <div className="admin-table__actions">

                    <button
                      type="button"
                      className="admin-button admin-button--edit"
                      onClick={() => openEditForm(item)}
                    >
                      EDIT
                    </button>

                    <button
                      type="button"
                      className="admin-button admin-button--danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      DELETE
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default AIKnowledge;
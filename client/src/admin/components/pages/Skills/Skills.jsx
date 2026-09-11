import { useEffect, useState } from "react";

import "./Skills.css";

import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../../services/skillService";

function Skills() {
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    level: "Intermediate",
    experienceDescription: "",
  });


  /* =========================================================
     LOAD SKILLS
  ========================================================= */

  const loadSkills = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getSkills();

      setSkills(data.skills || data.data || []);
    } catch (error) {
      setError(error.message || "Failed to load skills");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadSkills();
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
    setEditingSkill(null);

    setFormData({
      name: "",
      level: "Intermediate",
      experienceDescription: "",
    });

    setError("");
    setShowForm(true);
  };


  const openEditForm = (skill) => {
    setEditingSkill(skill);

    setFormData({
      name: skill.name || "",
      level: skill.level || "Intermediate",
      experienceDescription:
        skill.experienceDescription || "",
    });

    setError("");
    setShowForm(true);
  };


  const closeForm = () => {
    setShowForm(false);
    setEditingSkill(null);

    setFormData({
      name: "",
      level: "Intermediate",
      experienceDescription: "",
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
        name: formData.name.trim(),
        level: formData.level,
        experienceDescription:
          formData.experienceDescription.trim(),
      };

      if (!payload.name) {
        setError("Skill name is required.");
        return;
      }

      if (editingSkill) {
        await updateSkill(
          editingSkill._id,
          payload
        );
      } else {
        await createSkill(payload);
      }

      await loadSkills();

      closeForm();
    } catch (error) {
      setError(error.message || "Failed to save skill");
    } finally {
      setSaving(false);
    }
  };


  /* =========================================================
     DELETE
  ========================================================= */

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this skill?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      await deleteSkill(id);

      setSkills((previous) =>
        previous.filter(
          (skill) => skill._id !== id
        )
      );
    } catch (error) {
      setError(error.message || "Failed to delete skill");
    }
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="admin-page admin-skills">

      {/* HEADER */}

      <header className="admin-page__header">

        <div>

          <span className="admin-page__eyebrow">
            SKILLS
          </span>

          <h1>Skills</h1>

          <p>
            Manage the technical skills used across your
            portfolio and AI assistant.
          </p>

        </div>


        {!showForm && (
          <button
            type="button"
            className="admin-button admin-button--add"
            onClick={openAddForm}
          >
            <span>+</span>
            ADD SKILL
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
        <div className="admin-card admin-skills__form-card">

          <div className="admin-card__header">

            <div>

              <span className="admin-skills__form-eyebrow">
                {editingSkill
                  ? "EDIT SKILL"
                  : "NEW SKILL"}
              </span>

              <h2>
                {editingSkill
                  ? "Edit skill"
                  : "Add skill"}
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

              {/* NAME */}

              <div className="admin-form__field">

                <label htmlFor="skill-name">
                  Skill name
                </label>

                <input
                  id="skill-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. React"
                  autoComplete="off"
                  required
                />

              </div>


              {/* LEVEL */}

              <div className="admin-form__field">

                <label htmlFor="skill-level">
                  Level
                </label>

                <select
                  id="skill-level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                >
                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                  <option value="Expert">
                    Expert
                  </option>
                </select>

              </div>


              {/* DESCRIPTION */}

              <div className="admin-form__field admin-form__field--full">

                <label htmlFor="skill-description">
                  Experience description
                </label>

                <textarea
                  id="skill-description"
                  name="experienceDescription"
                  value={
                    formData.experienceDescription
                  }
                  onChange={handleChange}
                  placeholder="Briefly describe your experience with this skill..."
                  rows="4"
                />

                <span className="admin-skills__hint">
                  Keep this short. This information is
                  primarily used by the AI assistant.
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
                  : editingSkill
                    ? "UPDATE SKILL"
                    : "SAVE SKILL"}
              </button>

            </div>

          </form>

        </div>
      )}


      {/* SKILLS */}

      <div className="admin-skills__list">

        <div className="admin-skills__list-header">

          <span className="admin-skills__count">
            {String(skills.length).padStart(2, "0")} SKILLS
          </span>

        </div>


        {loading ? (

          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              --
            </span>

            <div className="admin-empty__content">

              <h2>
                Loading skills
              </h2>

              <p>
                Fetching data from the server.
              </p>

            </div>

          </div>

        ) : skills.length === 0 ? (

          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              00
            </span>

            <div className="admin-empty__content">

              <h2>
                No skills yet
              </h2>

              <p>
                Add your first technical skill to
                get started.
              </p>

            </div>

          </div>

        ) : (

          <div className="admin-table admin-skills__table">

            {/* HEADER */}

            <div className="admin-table__header admin-skills__table-header">

              <span>
                SKILL
              </span>

              <span>
                LEVEL
              </span>

              <span>
                EXPERIENCE
              </span>

              <span>
                ACTIONS
              </span>

            </div>


            {/* ROWS */}

            {skills.map((skill) => (

              <div
                className="admin-table__row admin-skills__row"
                key={skill._id}
              >

                <div className="admin-skills__skill">

                  <strong>
                    {skill.name}
                  </strong>

                  <span>
                    Technical skill
                  </span>

                </div>


                <span className="admin-skills__level">
                  {skill.level}
                </span>


                <span className="admin-skills__description">
                  {skill.experienceDescription || "—"}
                </span>


                <div className="admin-table__actions">

                  <button
                    type="button"
                    className="admin-button admin-button--edit"
                    onClick={() =>
                      openEditForm(skill)
                    }
                  >
                    EDIT
                  </button>


                  <button
                    type="button"
                    className="admin-button admin-button--danger"
                    onClick={() =>
                      handleDelete(skill._id)
                    }
                  >
                    DELETE
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Skills;
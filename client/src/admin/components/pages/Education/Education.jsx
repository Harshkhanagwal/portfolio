import { useEffect, useState } from "react";

import "./Education.css";

import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../../services/educationService";

function Education() {
  const [education, setEducation] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null);

  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: "",
    description: "",
    order: 0,
  });

  // =========================================
  // LOAD EDUCATION
  // =========================================

  const loadEducation = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getEducation();

      setEducation(result.data || []);
    } catch (error) {
      setError(
        error.message || "Failed to load education"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEducation();
  }, []);

  // =========================================
  // FORM
  // =========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingEducation(null);

    setFormData({
      institution: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      description: "",
      order: education.length,
    });

    setError("");
    setShowForm(true);
  };

  const openEditForm = (item) => {
    setEditingEducation(item);

    setFormData({
      institution: item.institution || "",
      degree: item.degree || "",
      field: item.field || "",
      startYear: item.startYear || "",
      endYear: item.endYear || "",
      description: item.description || "",
      order: item.order ?? 0,
    });

    setError("");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingEducation(null);

    setFormData({
      institution: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      description: "",
      order: 0,
    });
  };

  // =========================================
  // SAVE
  // =========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        institution: formData.institution.trim(),
        degree: formData.degree.trim(),
        field: formData.field.trim(),
        startYear: Number(formData.startYear),
        endYear: formData.endYear
          ? Number(formData.endYear)
          : undefined,
        description: formData.description.trim(),
        order: Number(formData.order) || 0,
      };

      if (!payload.institution) {
        setError("Institution is required.");
        return;
      }

      if (!payload.degree) {
        setError("Degree is required.");
        return;
      }

      if (!payload.field) {
        setError("Field is required.");
        return;
      }

      if (!payload.startYear) {
        setError("Start year is required.");
        return;
      }

      if (editingEducation) {
        await updateEducation(
          editingEducation._id,
          payload
        );
      } else {
        await createEducation(payload);
      }

      await loadEducation();

      closeForm();
    } catch (error) {
      setError(
        error.message || "Failed to save education"
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================================
  // DELETE
  // =========================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this education entry?"
    );

    if (!confirmed) return;

    try {
      setError("");

      await deleteEducation(id);

      setEducation((previous) =>
        previous.filter((item) => item._id !== id)
      );
    } catch (error) {
      setError(
        error.message || "Failed to delete education"
      );
    }
  };

  // =========================================
  // UI
  // =========================================

  return (
    <section className="admin-page admin-education">

      {/* HEADER */}

      <header className="admin-page__header">

        <div>
          <span className="admin-page__eyebrow">
            EDUCATION
          </span>

          <h1>Education</h1>

          <p>
            Manage your academic background and
            qualifications.
          </p>
        </div>

        {!showForm && (
          <button
            type="button"
            className="admin-button admin-button--add"
            onClick={openAddForm}
          >
            <span>+</span>
            ADD EDUCATION
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
        <div className="admin-card admin-education__form-card">

          <div className="admin-card__header">

            <div>
              <span className="admin-education__form-eyebrow">
                {editingEducation
                  ? "EDIT EDUCATION"
                  : "NEW EDUCATION"}
              </span>

              <h2>
                {editingEducation
                  ? "Edit education"
                  : "Add education"}
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

              {/* INSTITUTION */}

              <div className="admin-form__field">
                <label htmlFor="education-institution">
                  Institution
                </label>

                <input
                  id="education-institution"
                  name="institution"
                  type="text"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g. XYZ University"
                  autoComplete="off"
                  required
                />
              </div>

              {/* DEGREE */}

              <div className="admin-form__field">
                <label htmlFor="education-degree">
                  Degree
                </label>

                <input
                  id="education-degree"
                  name="degree"
                  type="text"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="e.g. Bachelor of Computer Applications"
                  autoComplete="off"
                  required
                />
              </div>

              {/* FIELD */}

              <div className="admin-form__field">
                <label htmlFor="education-field">
                  Field
                </label>

                <input
                  id="education-field"
                  name="field"
                  type="text"
                  value={formData.field}
                  onChange={handleChange}
                  placeholder="e.g. Computer Applications"
                  autoComplete="off"
                  required
                />
              </div>

              {/* START YEAR */}

              <div className="admin-form__field">
                <label htmlFor="education-start">
                  Start Year
                </label>

                <input
                  id="education-start"
                  name="startYear"
                  type="number"
                  value={formData.startYear}
                  onChange={handleChange}
                  placeholder="2021"
                  min="1900"
                  max="2100"
                  required
                />
              </div>

              {/* END YEAR */}

              <div className="admin-form__field">
                <label htmlFor="education-end">
                  End Year
                </label>

                <input
                  id="education-end"
                  name="endYear"
                  type="number"
                  value={formData.endYear}
                  onChange={handleChange}
                  placeholder="2024"
                  min="1900"
                  max="2100"
                />
              </div>

              {/* ORDER */}

              <div className="admin-form__field">
                <label htmlFor="education-order">
                  Display Order
                </label>

                <input
                  id="education-order"
                  name="order"
                  type="number"
                  value={formData.order}
                  onChange={handleChange}
                  min="0"
                />

                <span className="admin-education__hint">
                  Lower numbers appear first.
                </span>
              </div>

              {/* DESCRIPTION */}

              <div className="admin-form__field admin-form__field--full">

                <label htmlFor="education-description">
                  Description
                </label>

                <textarea
                  id="education-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Add a short description about this education..."
                  rows="5"
                />

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
                  : editingEducation
                  ? "UPDATE EDUCATION"
                  : "SAVE EDUCATION"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* LIST */}

      <div className="admin-education__list">

        <div className="admin-education__list-header">

          <span className="admin-education__count">
            {String(education.length).padStart(2, "0")} ENTRIES
          </span>

        </div>

        {loading ? (
          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              --
            </span>

            <div className="admin-empty__content">
              <h2>Loading education</h2>

              <p>
                Fetching data from the server.
              </p>
            </div>

          </div>
        ) : education.length === 0 ? (
          <div className="admin-empty">

            <span>+</span>

            <span className="admin-empty__number">
              00
            </span>

            <div className="admin-empty__content">
              <h2>No education yet</h2>

              <p>
                Add your first education entry
                to get started.
              </p>
            </div>

          </div>
        ) : (
          <div className="admin-education__table">

            <div className="admin-education__table-header">

              <span>INSTITUTION</span>
              <span>DEGREE</span>
              <span>FIELD</span>
              <span>PERIOD</span>
              <span>ACTIONS</span>

            </div>

            {education.map((item, index) => (
              <div
                className="admin-education__row"
                key={item._id}
              >

                <div className="admin-education__institution">

                  <strong>
                    {item.institution}
                  </strong>

                  <span>
                    / {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="admin-education__degree">
                  {item.degree}
                </div>

                <div className="admin-education__field">
                  {item.field}
                </div>

                <div className="admin-education__period">
                  {item.startYear}
                  {" — "}
                  {item.endYear || "Present"}
                </div>

                <div className="admin-table__actions">

                  <button
                    type="button"
                    className="admin-button admin-button--edit"
                    onClick={() =>
                      openEditForm(item)
                    }
                  >
                    EDIT
                  </button>

                  <button
                    type="button"
                    className="admin-button admin-button--danger"
                    onClick={() =>
                      handleDelete(item._id)
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

export default Education;
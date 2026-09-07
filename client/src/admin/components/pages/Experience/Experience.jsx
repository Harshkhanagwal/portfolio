import { useEffect, useState } from "react";

import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../../services/experienceService";

import "./Experience.css";
import "../../common/AdminCommon.css";

const initialForm = {
  role: "",
  company: "",
  type: "",
  duration: "",
  location: "",
  description: "",
  skills: "",
  order: 0,
};

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getExperiences();

      setExperiences(data.data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openCreateForm = () => {
    setEditingId(null);
    setForm(initialForm);
    setError("");
    setShowForm(true);
  };

  const openEditForm = (experience) => {
    setEditingId(experience._id);

    setForm({
      role: experience.role || "",
      company: experience.company || "",
      type: experience.type || "",
      duration: experience.duration || "",
      location: experience.location || "",
      description: experience.description || "",
      skills: (experience.skills || []).join(", "),
      order: experience.order || 0,
    });

    setError("");
    setShowForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const experienceData = {
        ...form,

        order: Number(form.order) || 0,

        skills: form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };

      let data;

      if (editingId) {
        data = await updateExperience(
          editingId,
          experienceData
        );

        setExperiences((previous) =>
          previous.map((experience) =>
            experience._id === editingId
              ? data.data
              : experience
          )
        );
      } else {
        data = await createExperience(experienceData);

        setExperiences((previous) => [
          ...previous,
          data.data,
        ]);
      }

      setForm(initialForm);
      setEditingId(null);
      setShowForm(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      await deleteExperience(id);

      setExperiences((previous) =>
        previous.filter(
          (experience) => experience._id !== id
        )
      );

      if (editingId === id) {
        handleCancel();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
    setError("");
  };

  return (
    <div className="admin-page">

      {/* Header */}

      <div className="admin-page__header">

        <div>

          <span className="admin-page__eyebrow">
            PORTFOLIO CONTENT
          </span>

          <h1>Experience</h1>

          <p>
            Manage your professional experience displayed
            on the portfolio.
          </p>

          <span className="admin-experience__count">
            {experiences.length
              .toString()
              .padStart(2, "0")}{" "}
            ENTRIES
          </span>

        </div>

        <button
          type="button"
          className="admin-button admin-button--add"
          onClick={openCreateForm}
        >
          <span>+</span>
          Add Experience
        </button>

      </div>


      {/* Error */}

      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}


      {/* Add / Edit Form */}

      {showForm && (
        <div className="admin-card">

          <div className="admin-card__header">

            <div>

              <span className="admin-page__eyebrow">
                EXPERIENCE / {editingId ? "EDIT" : "CREATE"}
              </span>

              <h2>
                {editingId
                  ? "Edit Experience"
                  : "Add Experience"}
              </h2>

            </div>

            <button
              type="button"
              className="admin-button admin-button--close"
              onClick={handleCancel}
            >
              ×
            </button>

          </div>


          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            <div className="admin-form__grid">

              {/* Role */}

              <div className="admin-form__field">

                <label htmlFor="role">
                  Role
                </label>

                <input
                  id="role"
                  name="role"
                  type="text"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g. Programmer"
                  required
                />

              </div>


              {/* Company */}

              <div className="admin-form__field">

                <label htmlFor="company">
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Tata Consultancy Services"
                  required
                />

              </div>


              {/* Employment Type */}

              <div className="admin-form__field">

                <label htmlFor="type">
                  Employment Type
                </label>

                <input
                  id="type"
                  name="type"
                  type="text"
                  value={form.type}
                  onChange={handleChange}
                  placeholder="e.g. Full-time"
                  required
                />

              </div>


              {/* Duration */}

              <div className="admin-form__field">

                <label htmlFor="duration">
                  Duration
                </label>

                <input
                  id="duration"
                  name="duration"
                  type="text"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="e.g. May 2025 - Present"
                  required
                />

              </div>


              {/* Location */}

              <div className="admin-form__field">

                <label htmlFor="location">
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. On-site"
                  required
                />

              </div>


              {/* Display Order */}

              <div className="admin-form__field">

                <label htmlFor="order">
                  Display Order
                </label>

                <input
                  id="order"
                  name="order"
                  type="number"
                  min="0"
                  value={form.order}
                  onChange={handleChange}
                />

              </div>


              {/* Description */}

              <div className="admin-form__field admin-form__field--full">

                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your role and responsibilities..."
                  rows="5"
                  required
                />

              </div>


              {/* Skills */}

              <div className="admin-form__field admin-form__field--full">

                <label htmlFor="skills">
                  Skills
                </label>

                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="Software Development, Problem Solving, Engineering"
                />

                <span className="admin-experience__hint">
                  Separate skills using commas.
                </span>

              </div>

            </div>


            {/* Form Actions */}

            <div className="admin-form__actions">

              <button
                type="button"
                className="admin-button admin-button--cancel"
                onClick={handleCancel}
                disabled={saving}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-button admin-button--save"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Experience"
                    : "Create Experience"}
              </button>

            </div>

          </form>

        </div>
      )}


      {/* Experience Table */}

      <div className="admin-table">

        <div className="admin-table__header admin-table__header--experience">

          <span>EXPERIENCE</span>
          <span>TYPE</span>
          <span>DURATION</span>
          <span>LOCATION</span>
          <span>ACTIONS</span>

        </div>


        {loading ? (

          <div className="admin-empty">
            <span>LOADING EXPERIENCE...</span>
          </div>

        ) : experiences.length === 0 ? (

          <div className="admin-empty">

            <span className="admin-empty__number">
              00
            </span>

            <div className="admin-empty__content">

              <h2>No experience entries</h2>

              <p>
                Add your first professional experience
                to start managing your portfolio content.
              </p>

            </div>

          </div>

        ) : (

          <div className="admin-experience__rows">

            {experiences.map((experience) => (

              <div
                className="admin-table__row admin-table__row--experience"
                key={experience._id}
              >

                {/* Experience */}

                <div className="admin-experience__experience">

                  <strong>
                    {experience.role}
                  </strong>

                  <span>
                    {experience.company}
                  </span>

                </div>


                {/* Type */}

                <span className="admin-experience__text">
                  {experience.type}
                </span>


                {/* Duration */}

                <span className="admin-experience__text">
                  {experience.duration}
                </span>


                {/* Location */}

                <span className="admin-experience__text">
                  {experience.location}
                </span>


                {/* Actions */}

                <div className="admin-table__actions">

                  <button
                    type="button"
                    className="admin-button admin-button--edit"
                    onClick={() =>
                      openEditForm(experience)
                    }
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="admin-button admin-button--danger"
                    onClick={() =>
                      handleDelete(experience._id)
                    }
                    disabled={
                      deletingId === experience._id
                    }
                  >
                    {deletingId === experience._id
                      ? "..."
                      : "Delete"}
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Experience;  
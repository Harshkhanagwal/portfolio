import { useEffect, useState } from "react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

import "./Projects.css";

const initialForm = {
  title: "",
  subtitle: "",
  category: "",
  description: "",
  highlights: [""],
  technologies: [""],
  liveUrl: "",
  githubUrl: "",
  image: "",
  featured: false,
  order: 0,
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState(initialForm);

  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProjects();

      setProjects(data.data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: previous[field].map((item, itemIndex) =>
        itemIndex === index ? value : item
      ),
    }));
  };

  const addArrayItem = (field) => {
    setForm((previous) => ({
      ...previous,
      [field]: [...previous[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    setForm((previous) => ({
      ...previous,
      [field]: previous[field].filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  const openCreateForm = () => {
    setEditingId(null);
    setForm(initialForm);
    setError("");
    setShowForm(true);
  };

  const openEditForm = (project) => {
    setEditingId(project._id);

    setForm({
      title: project.title || "",
      subtitle: project.subtitle || "",
      category: project.category || "",
      description: project.description || "",

      highlights:
        project.highlights?.length > 0
          ? project.highlights
          : [""],

      technologies:
        project.technologies?.length > 0
          ? project.technologies
          : [""],

      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      image: project.image || "",
      featured: project.featured || false,
      order: project.order || 0,
    });

    setError("");
    setShowForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");

      const projectData = {
        ...form,

        highlights: form.highlights
          .map((item) => item.trim())
          .filter(Boolean),

        technologies: form.technologies
          .map((item) => item.trim())
          .filter(Boolean),

        order: Number(form.order),
      };

      let data;

      if (editingId) {
        data = await updateProject(
          editingId,
          projectData
        );

        setProjects((previous) =>
          previous.map((project) =>
            project._id === editingId
              ? data.data
              : project
          )
        );
      } else {
        data = await createProject(projectData);

        setProjects((previous) => [
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
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      await deleteProject(id);

      setProjects((previous) =>
        previous.filter(
          (project) => project._id !== id
        )
      );
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
    <div className="admin-projects">

      {/* Header */}

      <div className="admin-projects__header">
        <div>
          <span className="admin-projects__eyebrow">
            CONTENT / 01
          </span>

          <h1>Projects</h1>

          <p>
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <button
          type="button"
          className="admin-projects__add-button"
          onClick={openCreateForm}
        >
          <span>+</span>
          Add Project
        </button>
      </div>

      {/* Error */}

      {error && (
        <div className="admin-projects__error">
          {error}
        </div>
      )}

      {/* Form */}

      {showForm && (
        <div className="admin-projects__form-card">

          <div className="admin-projects__form-header">

            <div>
              <span className="admin-projects__eyebrow">
                PROJECT / {editingId ? "EDIT" : "CREATE"}
              </span>

              <h2>
                {editingId
                  ? "Edit Project"
                  : "Add Project"}
              </h2>
            </div>

            <button
              type="button"
              className="admin-projects__close"
              onClick={handleCancel}
            >
              ×
            </button>

          </div>

          <form
            className="admin-projects__form"
            onSubmit={handleSubmit}
          >

            <div className="admin-projects__form-grid">

              {/* Title */}

              <div className="admin-projects__field">
                <label htmlFor="title">
                  Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Next Move Prep"
                  required
                />
              </div>

              {/* Subtitle */}

              <div className="admin-projects__field">
                <label htmlFor="subtitle">
                  Subtitle
                </label>

                <input
                  id="subtitle"
                  name="subtitle"
                  type="text"
                  value={form.subtitle}
                  onChange={handleChange}
                  placeholder="AI-Powered Interview Preparation Platform"
                  required
                />
              </div>

              {/* Category */}

              <div className="admin-projects__field">
                <label htmlFor="category">
                  Category
                </label>

                <input
                  id="category"
                  name="category"
                  type="text"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="AI / FULL STACK"
                  required
                />
              </div>

              {/* Order */}

              <div className="admin-projects__field">
                <label htmlFor="order">
                  Display Order
                </label>

                <input
                  id="order"
                  name="order"
                  type="number"
                  value={form.order}
                  onChange={handleChange}
                />
              </div>

              {/* Description */}

              <div className="admin-projects__field admin-projects__field--full">
                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the project..."
                  rows="5"
                  required
                />
              </div>

              {/* Highlights */}

              <div className="admin-projects__field admin-projects__field--full">

                <div className="admin-projects__array-header">
                  <label>
                    Highlights
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      addArrayItem("highlights")
                    }
                  >
                    + Add Highlight
                  </button>
                </div>

                <div className="admin-projects__array-list">

                  {form.highlights.map(
                    (highlight, index) => (
                      <div
                        className="admin-projects__array-item"
                        key={index}
                      >

                        <input
                          type="text"
                          value={highlight}
                          onChange={(event) =>
                            handleArrayChange(
                              "highlights",
                              index,
                              event.target.value
                            )
                          }
                          placeholder={`Highlight ${index + 1}`}
                        />

                        {form.highlights.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeArrayItem(
                                "highlights",
                                index
                              )
                            }
                          >
                            ×
                          </button>
                        )}

                      </div>
                    )
                  )}

                </div>
              </div>

              {/* Technologies */}

              <div className="admin-projects__field admin-projects__field--full">

                <div className="admin-projects__array-header">
                  <label>
                    Technologies
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      addArrayItem("technologies")
                    }
                  >
                    + Add Technology
                  </button>
                </div>

                <div className="admin-projects__array-list">

                  {form.technologies.map(
                    (technology, index) => (
                      <div
                        className="admin-projects__array-item"
                        key={index}
                      >

                        <input
                          type="text"
                          value={technology}
                          onChange={(event) =>
                            handleArrayChange(
                              "technologies",
                              index,
                              event.target.value
                            )
                          }
                          placeholder={`Technology ${index + 1}`}
                        />

                        {form.technologies.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeArrayItem(
                                "technologies",
                                index
                              )
                            }
                          >
                            ×
                          </button>
                        )}

                      </div>
                    )
                  )}

                </div>
              </div>

              {/* Live URL */}

              <div className="admin-projects__field">
                <label htmlFor="liveUrl">
                  Live URL
                </label>

                <input
                  id="liveUrl"
                  name="liveUrl"
                  type="url"
                  value={form.liveUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              {/* GitHub URL */}

              <div className="admin-projects__field">
                <label htmlFor="githubUrl">
                  GitHub URL
                </label>

                <input
                  id="githubUrl"
                  name="githubUrl"
                  type="url"
                  value={form.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                />
              </div>

              {/* Image */}

              <div className="admin-projects__field admin-projects__field--full">
                <label htmlFor="image">
                  Image URL
                </label>

                <input
                  id="image"
                  name="image"
                  type="url"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              {/* Featured */}

              <label className="admin-projects__checkbox">

                <input
                  name="featured"
                  type="checkbox"
                  checked={form.featured}
                  onChange={handleChange}
                />

                <span>
                  Featured project
                </span>

              </label>

            </div>

            {/* Form actions */}

            <div className="admin-projects__form-actions">

              <button
                type="button"
                className="admin-projects__cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-projects__save"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Project"
                    : "Create Project"}
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Projects table */}

      <div className="admin-projects__table-wrapper">

        <div className="admin-projects__table-header">
          <span>PROJECT</span>
          <span>CATEGORY</span>
          <span>FEATURED</span>
          <span>ORDER</span>
          <span>ACTIONS</span>
        </div>

        {loading ? (
          <div className="admin-projects__empty">
            <span>LOADING PROJECTS...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="admin-projects__empty">

            <span className="admin-projects__empty-number">
              00
            </span>

            <div>
              <h2>No projects yet</h2>

              <p>
                Add your first project to start
                managing your portfolio content.
              </p>
            </div>

          </div>
        ) : (
          <div className="admin-projects__rows">

            {projects.map((project) => (
              <div
                className="admin-projects__row"
                key={project._id}
              >

                <div className="admin-projects__project">
                  <strong>
                    {project.title}
                  </strong>

                  <span>
                    {project.subtitle}
                  </span>
                </div>

                <span className="admin-projects__status">
                  {project.category}
                </span>

                <span className="admin-projects__featured">
                  {project.featured
                    ? "YES"
                    : "NO"}
                </span>

                <span className="admin-projects__order">
                  {project.order}
                </span>

                <div className="admin-projects__actions">

                  <button
                    type="button"
                    onClick={() =>
                      openEditForm(project)
                    }
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(project._id)
                    }
                    disabled={
                      deletingId === project._id
                    }
                  >
                    {deletingId === project._id
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

export default Projects;
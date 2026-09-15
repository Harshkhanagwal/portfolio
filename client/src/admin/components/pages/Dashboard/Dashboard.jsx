import { useEffect, useState } from "react";

import "./Dashboard.css";

import { getAdminOverview } from "../../services/overviewService";

function Dashboard() {
  const [overview, setOverview] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    aiKnowledge: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadOverview = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getAdminOverview();

      setOverview(result.data);
    } catch (error) {
      setError(
        error.message || "Failed to load admin overview"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOverview();
  }, []);

  const stats = [
    {
      label: "PROJECTS",
      value: overview.projects,
      description: "Portfolio projects",
    },
    {
      label: "SKILLS",
      value: overview.skills,
      description: "Technical skills",
    },
    {
      label: "EXPERIENCE",
      value: overview.experience,
      description: "Experience entries",
    },
    {
      label: "AI KNOWLEDGE",
      value: overview.aiKnowledge,
      description: "Assistant knowledge",
    },
  ];

  return (
    <section className="admin-dashboard">

      <div className="admin-dashboard__header">

        <div>
          <span className="admin-dashboard__eyebrow">
            OVERVIEW
          </span>

          <h1>Dashboard</h1>

          <p>
            Manage your portfolio content and AI assistant
            knowledge from one place.
          </p>
        </div>

        <span className="admin-dashboard__version">
          ADMIN / 01
        </span>

      </div>

      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}

      <div className="admin-dashboard__stats">

        {stats.map((stat) => (
          <div
            className="admin-dashboard__stat"
            key={stat.label}
          >
            <span className="admin-dashboard__stat-label">
              {stat.label}
            </span>

            <strong className="admin-dashboard__stat-value">
              {loading
                ? "—"
                : String(stat.value).padStart(2, "0")}
            </strong>

            <span className="admin-dashboard__stat-description">
              {stat.description}
            </span>
          </div>
        ))}

      </div>

      <div className="admin-dashboard__section">

        <div className="admin-dashboard__section-header">

          <div>
            <span className="admin-dashboard__eyebrow">
              SYSTEM
            </span>

            <h2>Portfolio Management</h2>
          </div>

          <span className="admin-dashboard__status">
            <span className="admin-dashboard__status-dot" />
            READY
          </span>

        </div>

        <div className="admin-dashboard__message">

          <span className="admin-dashboard__message-number">
            01
          </span>

          <div>
            <h3>Content management is ready.</h3>

            <p>
              Use the navigation to manage projects, skills,
              experience, education, profile information, and
              AI assistant knowledge.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
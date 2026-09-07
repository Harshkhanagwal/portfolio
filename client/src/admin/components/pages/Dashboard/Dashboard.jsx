import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      label: "PROJECTS",
      value: "—",
      description: "Portfolio projects",
    },
    {
      label: "SKILLS",
      value: "—",
      description: "Technical skills",
    },
    {
      label: "EXPERIENCE",
      value: "—",
      description: "Experience entries",
    },
    {
      label: "AI KNOWLEDGE",
      value: "—",
      description: "Assistant knowledge",
    },
  ];

  return (
    <div className="admin-dashboard">
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
              {stat.value}
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
    </div>
  );
}

export default Dashboard;
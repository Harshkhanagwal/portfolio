import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/authService";

import "./AdminLayout.css";

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navigation = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "Projects",
      path: "/admin/projects",
    },
    {
      label: "Skills",
      path: "/admin/skills",
    },
    {
      label: "Experience",
      path: "/admin/experience",
    },
    {
      label: "Education",
      path: "/admin/education",
    },
    {
      label: "Achievements",
      path: "/admin/achievements",
    },
    {
      label: "Profile",
      path: "/admin/profile",
    },
    {
      label: "AI Assistant",
      path: "/admin/ai-assistant",
    },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__brand-mark">
            &lt;HK/&gt;
          </span>

          <div className="admin-sidebar__brand-info">
            <span className="admin-sidebar__brand-name">
              HARSH
            </span>

            <span className="admin-sidebar__brand-label">
              ADMIN CONSOLE
            </span>
          </div>
        </div>

        <div className="admin-sidebar__section-label">
          MANAGEMENT
        </div>

        <nav className="admin-sidebar__nav">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `admin-sidebar__link ${
                  isActive ? "admin-sidebar__link--active" : ""
                }`
              }
            >
              <span className="admin-sidebar__link-indicator" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar__bottom">
          <div className="admin-sidebar__section-label">
            SYSTEM
          </div>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `admin-sidebar__link ${
                isActive ? "admin-sidebar__link--active" : ""
              }`
            }
          >
            <span className="admin-sidebar__link-indicator" />
            <span>Settings</span>
          </NavLink>

          <button
            type="button"
            className="admin-sidebar__logout"
            onClick={handleLogout}
          >
            <span>Logout</span>
            <span>↗</span>
          </button>
        </div>
      </aside>

      <main className="admin-layout__main">
        <header className="admin-layout__header">
          <div>
            <span className="admin-layout__header-label">
              ADMIN CONSOLE
            </span>

            <span className="admin-layout__status">
              <span className="admin-layout__status-dot" />
              SYSTEM ONLINE
            </span>
          </div>
        </header>

        <section className="admin-layout__content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;
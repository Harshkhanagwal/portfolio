import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import { loginAdmin } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await loginAdmin(username, password);

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login">

      {/* Background */}
      <div className="admin-login__grid" />

      {/* Header */}
      <header className="admin-login__header">

        <div className="admin-login__brand">

          <span className="admin-login__brand-mark">
            &lt;HK/&gt;
          </span>

          <div>
            <span className="admin-login__brand-name">
              HARSH
            </span>

            <span className="admin-login__brand-label">
              ADMIN CONSOLE
            </span>
          </div>

        </div>

        <span className="admin-login__status">

          <span className="admin-login__status-dot" />

          SYSTEM ONLINE

        </span>

      </header>

      {/* Login */}
      <section className="admin-login__content">

        <div className="admin-login__intro">

          <span className="admin-login__eyebrow">
            Portfolio Management System
          </span>

          <h1>
            Welcome
            <br />
            <span>back.</span>
          </h1>

          <p>
            Manage your portfolio content, projects, experience,
            and AI assistant knowledge from one place.
          </p>

        </div>

        <div className="admin-login__card">

          <div className="admin-login__card-header">

            <div>

              <span className="admin-login__card-label">
                ADMIN ACCESS
              </span>

              <h2>Sign in</h2>

            </div>

            <span className="admin-login__lock">
              01
            </span>

          </div>

          <form
            className="admin-login__form"
            onSubmit={handleSubmit}
          >

            <div className="admin-login__field">

              <label htmlFor="username">
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                disabled={loading}
                required
              />

            </div>

            <div className="admin-login__field">

              <div className="admin-login__label-row">

                <label htmlFor="password">
                  Password
                </label>

                <span>
                  AUTHENTICATED ACCESS
                </span>

              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={loading}
                required
              />

            </div>

            {error && (
              <p className="admin-login__error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="admin-login__submit"
              disabled={loading}
            >

              <span>
                {loading ? "Signing in..." : "Sign in"}
              </span>

              <span className="admin-login__submit-arrow">
                →
              </span>

            </button>

          </form>

          <div className="admin-login__security">

            <span className="admin-login__security-dot" />

            <span>
              SECURE ADMIN ACCESS
            </span>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="admin-login__footer">

        <span>
          PORTFOLIO MANAGEMENT SYSTEM
        </span>

        <span>
          V1.0
        </span>

      </footer>

    </main>
  );
}

export default Login;

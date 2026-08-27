import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar-wrapper">

      <nav className="navbar glass">

        {/* Logo */}
        <a href="#hero-section" className="navbar-logo">
          &lt;HK /&gt;
        </a>


        {/* Navigation */}
        <div className="navbar-links">

          <a href="#about" className="active">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Theme Toggle */}
        <button
          className="navbar-theme"
          type="button"
          aria-label="Toggle theme"
        >
          ☼
        </button>


        {/* Mobile Menu */}
        <button
          className="navbar-menu"
          type="button"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
        </button>

      </nav>

    </header>
  );
}

export default Navbar;
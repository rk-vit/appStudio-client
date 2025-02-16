import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <span className="navbar-logo-icon">&#60;/&#62;</span>
          <span className="navbar-logo-text">appStudio</span>
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar


import "./Navbar.css";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />

      <div className="search">
        <input
          type="text"
          placeholder="Search a album of your choice"
        />
        <button>🔍</button>
      </div>

      <button className="feedback-btn">
        Give Feedback
      </button>
    </nav>
  );
}

export default Navbar;
import "./Logo.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Qtify Logo" />
    </div>
  );
}

export default Logo;
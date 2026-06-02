import "./Hero.css";
import headphones from "../../assets/headphones.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <img
        src={headphones}
        alt="Headphones"
        className="hero-image"
      />
    </div>
  );
}

export default Hero;
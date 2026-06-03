import Chip from "@mui/material/Chip";
import "./Card.css";

function Card() {
  return (
    <div className="card-wrapper">
  <div className="card">
    <img
      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
      alt="album"
      className="card-image"
    />

    <div className="card-bottom">
      <Chip label="100 Follows" />
    </div>
  </div>

  <p className="album-name">New English Songs</p>
</div>
  );
}

export default Card;
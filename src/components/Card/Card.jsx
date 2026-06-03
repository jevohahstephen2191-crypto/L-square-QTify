import Chip from "@mui/material/Chip";
import "./Card.css";

function Card({ album, type }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src={album.image}
          alt={album.title}
          className="card-image"
        />

        <div className="card-bottom">
          <Chip
            label={
                type === "song"
                ? `${album.likes} Likes`
                : `${album.follows} Follows`
            }
            />
        </div>
      </div>

      <p className="album-name">{album.title}</p>
    </div>
  );
}

export default Card;
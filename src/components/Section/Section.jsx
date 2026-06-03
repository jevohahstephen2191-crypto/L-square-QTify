import "./Section.css";
import Card from "../Card/Card";

function Section({ title, data }) {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="collapse-btn">
          Collapse
        </button>
      </div>

      <div className="cards-grid">
        {data.map((album) => (
          <Card
            key={album.id}
            album={album}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
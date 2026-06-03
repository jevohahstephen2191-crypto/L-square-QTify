import "./Section.css";
import Card from "../Card/Card";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";



function Section({ title, data, genres = [], type }) {
    const [collapse, setCollapse] = useState(false);
    const [tabValue, setTabValue] = useState("all");

    const handleChange = (event, newValue) => {
    setTabValue(newValue);
    };

    const filteredSongs =
  tabValue === "all"
    ? data
    : data.filter(
        (song) => song.genre.key === tabValue
      );
      
  return (
    <>
      <div className="section">
        <div className="section-header">
          <h2>{title}</h2>

          {type !== "song" && (
            <button
            className="collapse-btn"
            onClick={() => {
                console.log(title, collapse);
                setCollapse(!collapse);
            }}
            >
            {collapse ? "Collapse" : "Show All"}
            </button>
            )}
        </div>
        {type === "song" && (
        <Tabs
            value={tabValue}
            onChange={handleChange}
        >
            <Tab label="All" value="all" />

            {genres.map((genre) => (
            <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
            />
            ))}
        </Tabs>
        )}

        {type === "song" ? (
  <Carousel
    data={filteredSongs}
    renderComponent={(song) => (
      <Card
        album={song}
        type="song"
      />
    )}
  />
        ) : collapse ? (
        <Carousel
            data={data}
            renderComponent={(album) => (
            <Card album={album} />
            )}
        />
        ) : (
        <div className="cards-grid">
            {data.map((album) => (
            <Card
                key={album.id}
                album={album}
            />
            ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Section;
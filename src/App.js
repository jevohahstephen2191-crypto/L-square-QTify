import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Section from "./components/Section/Section";

function App() {
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums/new"
    );

    setNewAlbums(response.data);
  } catch (error) {
    console.log(error);
  }
};

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );
      // console.log(response.data);
      setAlbums(response.data);
    } catch (error) {
  console.log("ERROR:", error);
  console.log(error.response);
  }
  };

 useEffect(() => {
  fetchTopAlbums();
  fetchNewAlbums();
  fetchSongs();
  fetchGenres();
}, []);

const fetchSongs = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/songs"
    );

    setSongs(response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchGenres = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/genres"
    );
    console.log(response.data);
    setGenres(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        data={albums}
      />
      <Section
      title="New Albums"
      data={newAlbums}
    />
     <Section
  title="Songs"
  data={songs}
  genres={genres}
  type="song"
  />
    </>
  );
}

export default App;



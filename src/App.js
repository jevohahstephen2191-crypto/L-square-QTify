import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Section from "./components/Section/Section";

function App() {
  const [albums, setAlbums] = useState([]);

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
    
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        data={albums}
      />
      
    </>
  );
}

export default App;



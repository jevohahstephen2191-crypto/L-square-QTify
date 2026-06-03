import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div style={{ padding: "40px" }}>
        <Card />
      </div>
    </>
  );
}

export default App;

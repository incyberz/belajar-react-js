import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const judulLat = "Lat 04 Adding Styles";

  return (
    <div className="App">
      <div className="judul-latihan">{judulLat}</div>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

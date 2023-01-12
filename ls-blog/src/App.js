import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const judulLat = "Lat 18 Handling Fetch Error";

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

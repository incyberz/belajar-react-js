import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";

function App() {
  const judulLat = "Lat 08 Using State Hook";

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

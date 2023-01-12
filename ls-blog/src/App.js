import "./App.css";
import Navbar from "./Navbar";
// import Home from "./Home";
import Readme from "./Readme";
import "bootstrap/dist/css/bootstrap.css";
// import swal from "sweetalert";

function App() {
  const judulLat = "Lat 15 Using JSON Server (Fake Backend API)";

  return (
    <div className="App">
      <div className="judul-latihan">{judulLat}</div>
      <Navbar />
      <div className="content">
        <Readme />
      </div>
    </div>
  );
}

export default App;

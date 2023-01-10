import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";

function App() {
  const judulLat = "Lat 06 Adding JS Frameworks";

  swal({
    title: "Good job!",
    text: "SweetAlert telah terinstall dengan baik.",
    icon: "success",
    button: "Ok",
  });

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

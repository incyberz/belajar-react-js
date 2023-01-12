import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const judulLat = "Lat 21 Link Router ";

  return (
    <Router>
      <div className="App">
        <div className="judul-latihan">{judulLat}</div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

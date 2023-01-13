import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const judulLat = "React Tutorial 29 Not Found Page";

  return (
    <Router>
      <div className="App">
        <div className="judul-latihan">{judulLat}</div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

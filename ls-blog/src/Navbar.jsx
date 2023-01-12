import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>Welcome to LS Blog !!</h1>
      <div className="links">
        <Link to="/" className="btn btn-sm custom-link">
          Home
        </Link>
        <Link to="/create" className="btn btn-sm custom-link">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

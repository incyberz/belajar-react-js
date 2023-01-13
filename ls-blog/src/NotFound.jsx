import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Maaf</h2>
      <p>Page yang Anda akses tidak ditemukan.</p>
      <hr />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;

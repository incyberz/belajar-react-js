const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>LS Blog Navbar</h1>
      <div className="links">
        <a href="/" className="btn btn-sm custom-link">
          Home
        </a>
        <a href="/create" className="btn btn-sm custom-link">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

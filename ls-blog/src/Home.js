import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      judul: "Belajar React bagi Pemula",
      isi: "lorem ipsum...",
      author: "budi",
      id: 1,
    },
    {
      judul: "Cara Install React",
      isi: "lorem ipsum...",
      author: "ahmad",
      id: 2,
    },
    {
      judul: "React Router Intro",
      isi: "lorem ipsum...",
      author: "budi",
      id: 3,
    },
  ]);

  return (
    <div className="Home">
      <h2>React Tutorial Homepage</h2>
      <p>Welcome to Luar Sekolah Blog Page... !!</p>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-item">
            <div className="judul-blog">{blog.judul}</div>
            <small className="pembuat-blog">Dibuat oleh {blog.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

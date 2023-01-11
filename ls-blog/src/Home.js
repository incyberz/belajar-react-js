import { useEffect, useState } from "react";
import BlogList from "./BlogList";

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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect berjalan");
    console.log(blogs);
  });

  return (
    <div className="Home">
      <BlogList
        blogs={blogs}
        title="All Blog List"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;

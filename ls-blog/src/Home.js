import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect berjalan");
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="Home">
      <p>Hasil Fetching Data dari JSON Server</p>
      <hr />
      {blogs && <BlogList blogs={blogs} title="All Blog List" />}
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const apiAddress = "http://localhost:8000/blogss";

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(apiAddress)
        .then((res) => {
          if (!res.ok) {
            throw Error(`Tidak bisa mengakses resourcess pada ${apiAddress}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, []);

  return (
    <div className="Home">
      {isPending && <div>Loading blogs data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blog List" />}
    </div>
  );
};

export default Home;

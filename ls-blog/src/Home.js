import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const apiAddress = "http://localhost:8000/blogs";

  // wrong API Address
  const apiAddress = "http://localhost:8000/blogszzz";

  const [connError, setConnError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(apiAddress)
        .then((res) => {
          if (!res.ok) {
            setConnError(`Tidak bisa mengakses resourcess pada ${apiAddress}`);
            throw Error(connError);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="Home">
      {connError && <code>{connError}</code>}
      {isPending && <div>Loading blogs data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blog List" />}
    </div>
  );
};

export default Home;

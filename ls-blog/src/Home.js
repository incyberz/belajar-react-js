import { useState } from "react";
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

  let keyword = "react router";

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blog List" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "budi")}
        title="Blog milik Budi"
      />
      <BlogList
        blogs={blogs.filter(
          (blog) => blog.judul.toLowerCase().search(keyword) >= 0
        )}
        title={`Blog tentang "${keyword}"`}
      />
    </div>
  );
};

export default Home;

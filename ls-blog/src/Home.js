import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const apiAddress = "http://localhost:8000/blogs";
  const { data: blogs, isPending, connError } = useFetch(apiAddress);

  return (
    <div className="Home">
      {connError && <code>{connError}</code>}
      {isPending && <div>Loading blogs data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blog List" />}
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-item" id={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="judul-blog">
            <div>{blog.judul}</div>
          </Link>
          <div className="pembuat-blog">Dibuat oleh {blog.author}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

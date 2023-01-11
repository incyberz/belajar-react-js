const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-item">
          <div className="judul-blog">{blog.judul}</div>
          <small className="pembuat-blog">Dibuat oleh {blog.author}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

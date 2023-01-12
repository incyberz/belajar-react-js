const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-item">
          <div className="judul-blog">{blog.judul}</div>
          <div className="pembuat-blog">Dibuat oleh {blog.author}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

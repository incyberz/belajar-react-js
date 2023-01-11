const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-item">
          <div className="judul-blog">{blog.judul}</div>
          <div className="pembuat-blog">Dibuat oleh {blog.author}</div>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

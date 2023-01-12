import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    connError,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  console.log(blog);
  return (
    <div className="BlogDetail">
      {connError && <code>{connError}</code>}
      {isPending && <div>Loading blogs data...</div>}
      {blog && (
        <article>
          <h3 className="judul-blog">{blog.judul}</h3>
          <div className="pembuat-blog">Dibuat oleh {blog.author}</div>
          <p className="isi-blog">{blog.isi}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;

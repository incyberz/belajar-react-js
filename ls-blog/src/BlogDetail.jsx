import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    connError,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    // alert(blog.id);
    if (!window.confirm("Yakin mau hapus?")) return;
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(
      // window.location.replace("/")
      history.push("/")
    );
  };

  return (
    <div className="BlogDetail">
      {connError && <code>{connError}</code>}
      {isPending && <div>Loading blogs data...</div>}
      {blog && (
        <article>
          <h3 className="judul-blog">{blog.judul}</h3>
          <div className="pembuat-blog">Dibuat oleh {blog.author}</div>
          <p className="isi-blog">
            {blog.isi}
            <div>
              <button
                className="btn btn-danger btn-sm mt-1"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </p>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;

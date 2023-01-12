import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div className="BlogDetail">
      <h3>Blog Detail - {id}</h3>
      <p>blog-contents...</p>
    </div>
  );
};

export default BlogDetail;

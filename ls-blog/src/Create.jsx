import useFetch from "./useFetch";

const Create = () => {
  const apiAddress = "http://localhost:8000/blogs";
  const { data: blogs, isPending, connError } = useFetch(apiAddress);

  return (
    <div className="Create">
      <h3>Create a Blog</h3>
      <p>
        Proident ad fugiat est quis dolor sit sunt occaecat culpa. Sunt cillum
        cupidatat duis et laborum eu anim est aliqua incididunt fugiat
        voluptate. Est voluptate sint velit quis id ex consequat nostrud id in
        mollit magna. Nisi ad elit laboris anim anim excepteur voluptate minim
        dolor. Quis duis sint cupidatat ad est ullamco aliquip dolor labore
        ipsum ipsum do enim. Aute sint duis culpa deserunt eiusmod fugiat amet
        laboris amet officia. Cillum enim cillum culpa mollit ad in.
      </p>
    </div>
  );
};

export default Create;

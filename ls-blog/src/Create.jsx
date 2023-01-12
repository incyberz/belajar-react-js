import { useState } from "react";

const Create = () => {
  const [judul, setJudul] = useState(null);
  const [isi, setIsi] = useState(null);
  const [author, setAuthor] = useState("ahmad");

  return (
    <div className="Create">
      <h3>Create a Blog</h3>
      <form>
        <div className="form-group">
          <label>Judul</label>
          <input
            type="text"
            className="form-control"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
            minLength={10}
            maxLength={100}
          />
        </div>
        <div className="form-group">
          <label>Isi Blog</label>
          <textarea
            className="form-control"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            required
            minLength={10}
            maxLength={1000}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Author</label>
          <select
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="ahmad">Ahmad Firdaus</option>
            <option value="budi">Budi Santoso</option>
            <option value="charlie">Charlie Hidayat</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">Submit</button>
        </div>
        <p>{judul}</p>
        <p>{isi}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;

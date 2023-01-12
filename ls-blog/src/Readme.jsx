import { useEffect, useState } from "react";

const Readme = () => {
  return (
    <div className="Home">
      <p>
        JSON Server adalah REST API tiruan untuk sisi backend system. Database
        yang dipakai adalah sebuah file .json. Syntax untuk install JSON Server
        pada app ini adalah:
      </p>
      <code>npx json-server --watch data/db.json --port 8000</code>
      <hr />
      <div className="mt-2" style={{ textAlign: "left" }}>
        Endpoints backend yang bisa diakses:
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Endpoints</th>
              <th>Methods</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/blogs</code>
              </td>
              <td>GET</td>
              <td>get all blogs</td>
            </tr>
            <tr>
              <td>
                <code>/blogs/:id</code>
              </td>
              <td>GET</td>
              <td>get a single blog</td>
            </tr>
            <tr>
              <td>
                <code>/blogs</code>
              </td>
              <td>POST</td>
              <td>Add a new blog</td>
            </tr>
            <tr>
              <td>
                <code>/blogs/:id</code>
              </td>
              <td>DELETE</td>
              <td>Delete a single blog</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <BlogList
        blogs={blogs}
        title="All Blog List"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Readme;

import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "Marlon",
        email: "marlonveliz.nero19@gmail.com",
        website: "marlon.com",
      },
      {
        id: 2,
        name: "Platzi",
        email: "platzi@platzi.com",
        website: "platzi.com",
      },
    ]);
  }, []);

  const rows = () =>
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  return (
    <div className="margen">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{rows()}</tbody>
      </table>
    </div>
  );
};

export default App;

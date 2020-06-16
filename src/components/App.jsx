import React from "react";

const App = () => {
  const rows = () => [
    <tr>
      <td>Marlon</td>
      <td>marlonveliz.nero19@gmail.com</td>
      <td>platzi.com</td>
    </tr>,

    <tr>
      <td>Platzi</td>
      <td>platzi@platzi.com</td>
      <td>platzi.com</td>
    </tr>,
  ];

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

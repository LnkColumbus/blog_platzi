import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Table = (props) => {
  const { users } = props;
  const rows = () =>
    users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/posts/${key}`}>
            <div className="eye-solid2 icon"></div>
          </Link>
        </td>
      </tr>
    ));
  return (
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
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, null)(Table);

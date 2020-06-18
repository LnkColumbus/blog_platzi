import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import * as usersActions from "../../actions/usersActions";

const Users = (props) => {
  // const [usuarios, setUsarios] = useState([]);
  const { getUsers, users, loading, error } = props;

  const getUsarios = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsarios, getUsers]);

  const showContent = () => {
    if (loading) {
      return <Spinner />;
    }
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

  const rows = () =>
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  return <div>{showContent()}</div>;
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);

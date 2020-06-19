import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Table from "./Table";
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

    if (error) {
      return <Fatal message={error} />;
    }

    return <Table />;
  };

  return (
    <div>
      <h1>Usuarios</h1>
      {showContent()}
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Table from "./Table";
import * as usersActions from "../../actions/usersActions";

const Users = (props) => {
  // const [usuarios, setUsarios] = useState([]);
  const { getUsers, loading, error, users } = props;

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, [users, getUsers]);

  const showContent = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }

    return <Table />;
  };

  console.log(props);
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

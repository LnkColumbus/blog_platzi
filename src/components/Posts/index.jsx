import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

const Posts = ({
  match,
  usersReducer,
  getUsers,
  postsReducer,
  getPostByUserID,
  match: { params },
}) => {
  const { users, loading: loadingUsers, error: errorUsers } = usersReducer;
  const { posts, loading: loadingPosts, error: errorPosts } = postsReducer;

  console.log(usersReducer);
  console.log(postsReducer);

  const getAll = useCallback(async () => {
    if (!users.length) {
      await getUsers();
    }

    if (errorUsers) {
      return;
    }

    if (!users.length) {
      return;
    }

    if (!("postKey" in users[params.key])) {
      await getPostByUserID(params.key);
    }
  }, [users, getUsers, getPostByUserID, params.key, errorUsers]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const showUser = () => {
    if (errorUsers) {
      return <Fatal message={errorUsers} />;
    }
    if (!users.length || loadingUsers) {
      return <Spinner />;
    }

    const name = users[params.key].name;
    return <h1>Publicaciones de {name}</h1>;
  };

  const showPosts = () => {
    if (!users.length || errorUsers) return;

    if (loadingPosts) {
      return <Spinner />;
    }

    if (errorPosts) {
      return <Fatal message={errorPosts} />;
    }

    if (!posts.length) return;
    if (!("postKey" in users[params.key])) return;

    const { postKey } = users[params.key];
    return posts[postKey].map((post) => (
      <div className="post__title" key={post.id} onClick={() => alert(post.id)}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
  };

  return (
    <div>
      {showUser()}
      {showPosts()}
    </div>
  );
};

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer,
  };
};

const mapDispatchToProps = {
  ...usersActions,
  ...postsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

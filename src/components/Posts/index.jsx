import React from "react";

const Posts = (props) => {
  const { params } = props.match;
  return <div>{params.key}</div>;
};

export default Posts;

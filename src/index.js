import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Comment from "./Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Dog",
    avatarUrl: "https://picsum.photos/id/237/150",
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);

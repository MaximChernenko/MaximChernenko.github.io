import React from "react";
import "../css/comment.css";

const Comment = ({ rate, text }) => (
  <div className="comment">
    <p className="comment__rate"><u>Rate</u>: {rate}</p>
    <p className="comment__text">{text}</p>
  </div>
);

export default Comment;

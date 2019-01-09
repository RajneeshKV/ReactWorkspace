import React from "react";
import faker from "faker";

const CommentDetails = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">10:56 PLM</span>
        </div>
        <div className="text">{props.mycomment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;

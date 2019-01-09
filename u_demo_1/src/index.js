import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Rajneesh" mycomment="Keep Learning !" />
      <CommentDetails author="Sakshi" mycomment="Feeling Sleepy !!" />
      <CommentDetails author="Anshika" mycomment="Wanna Play !!!" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

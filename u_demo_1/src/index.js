import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning !</h4>
          Are you sure ?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Rajneesh"
          mycomment="Keep Learning !"
          timeAgo="10:45 AM"
          pic={faker.image.technics()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Sakshi"
          mycomment="Feeling Sleepy !!"
          timeAgo="04:50 PM"
          pic={faker.image.people()}
        />{" "}
      </ApprovalCard>{" "}
      <ApprovalCard>
        <CommentDetails
          author="Anshika"
          mycomment="Wanna Play !!!"
          timeAgo="09:00 AM"
          pic={faker.image.nature()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

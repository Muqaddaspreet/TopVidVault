import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  // Don't use indexes as keys
  return (
    <div className="border-l-2">
      {comments.map((comment, index) => (
        <div key={index} className="">
          <Comment key={index} data={comment} />
          <div className="ml-10">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CommentList;

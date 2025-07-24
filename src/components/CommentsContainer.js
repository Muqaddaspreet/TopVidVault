import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Muqaddas",
    text: "This is the comment.",
    replies: [
      {
        name: "Balli",
        text: "Chumma Ho gyo",
        replies: [
          {
            name: "Bhaloo",
            text: "Khar ja mama!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Muqaddas",
    text: "This is the 2nd comment.",
    replies: [
      {
        name: "Meow",
        text: "Meow! Meow! Meeow!",
        replies: [],
      },
    ],
  },
  {
    name: "Pro",
    text: ["Tera mann aje kachcha hai!"],
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

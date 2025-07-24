import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex my-3 shadow-sm">
      <img
        className="h-10 mr-2"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;

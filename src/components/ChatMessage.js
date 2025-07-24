import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-1">
      <img
        className="h-8 mx-2"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-roboto font-bold text-gray-700 text-md mr-1">
        {name}
      </span>
      <span className="font-roboto text-md">{message}</span>
    </div>
  );
};

export default ChatMessage;

import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    let count = 0;
    const i = setInterval((i) => {
      count++;
      // API Polling:
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(23) + count,
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="pt-1 lg:w-full lg-h-full rounded-xl px-2 border border-black overflow-y-auto flex flex-col-reverse">
        <div>
          {
            // Don't use index as the key
            ChatMessages.map((chMsg, i) => (
              <ChatMessage key={i} name={chMsg.name} message={chMsg.message} />
            ))
          }
        </div>
      </div>
      <form
        className="lg:w-full lg-h-full rounded-xl border border-gray-400 bg-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submitted!", liveMessage);
          dispatch(
            addMessage({
              name: "Muqaddas",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="py-1 px-2  w-[80%] focus:outline-blue-400 rounded-l-xl"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="py-1 px-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

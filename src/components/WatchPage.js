import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full p-2 m-2">
      <div className="aspect-video lg:flex w-full items-stretch lg:max-h-[522px]">
        <div className="w-full h-full lg:w-[70%]">
          <iframe
            className="h-full w-full
             rounded-xl"
            // width="560"
            // height="315"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-full lg:ml-2 mt-3 lg:mt-0 lg:w-[30%] flex flex-col">
          <LiveChat />
        </div>
      </div>

      <div className="mt-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;

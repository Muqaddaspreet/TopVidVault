import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = ({ searchQuery }) => {
  return (
    <div className="min-w-0 flex-1 ml-1 mt-2">
      {/* MainContainer */}
      <ButtonList />
      <VideoContainer searchQuery={searchQuery} />
    </div>
  );
};

export default MainContainer;

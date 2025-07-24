import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null; // ⛑️ protect from undefined

  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const calcViews = (views) => {
    if (views < 1000) return "" + views;
    else if (views >= 1000 && views < 1000000)
      return Math.floor(views / 1000) + "K";
    else if (views >= 1000000 && views < 1000000000)
      return Math.floor(views / 100000) / 10 + "M";
    else return views / 1000000000 + "B";
  };

  return (
    <div className="p-1 m-2">
      <img
        className="rounded-xl sm:w-[600px] md:min-w-[300px] md:max-w-[415px] w-[415px]"
        alt="Thumbnail"
        src={thumbnails.medium.url}
      />
      <ul
        className={
          "font-roboto sm:w-[560px] md:max-w-[375px] min-w-[280px] w-[365px]"
        }
      >
        <li className="font-bold">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-600">
          {calcViews(statistics.viewCount)} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

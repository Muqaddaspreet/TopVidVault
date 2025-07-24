import React, { useEffect, useState, useRef } from "react";
// import { toggleMenu } from "../utils/appSlice";
import LogoContainer from "./LogoContainer";
import { SEARCH_ICON, YOUTUBE_SEARCH_API } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const Head = ({ searchQuery, setSearchQuery }) => {
  // const dispatch = useDispatch();
  // const toggleMenuHandler = () => {
  //   dispatch(toggleMenu());
  // };

  // const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  const inputRef = useRef(null);

  const [tempQuery, setTempQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + tempQuery);
      const json = await data.json();
      // console.log(json[1]);
      setSuggestions(json[1]);

      // Update cache
      dispatch(cacheResults({ [tempQuery]: json[1] }));
    };
    const timer = setTimeout(() => {
      if (searchCache[tempQuery]) setSuggestions(searchCache[tempQuery]);
      else getSearchSuggestions();
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer); // It's called on re-rendering of the component, while one is already in process.
    };
  }, [tempQuery, dispatch, searchCache]);

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer =>  make api call after 200 ms
   *
   * key - ip
   * - destroy the component (useEffect return method)
   * - re-render the component
   * - useEffect()
   * - strat timer => make api call after 200 ms
   *
   *
   * setTimeout(200) - declines
   *
   * if 2000 ms passed after other setTimeout(200) - It automatically makes an API call
   */

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(tempQuery);
      inputRef.current?.blur();
    }
    if (tempQuery === "") {
      setSearchQuery(tempQuery);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setTempQuery(suggestion);
    setSearchQuery(suggestion);
  };

  return (
    <div className=" {/*shadow-lg*/} z-30 bg-white fixed w-full">
      <div className="grid grid-flow-col auto-cols-fr p-2 mx-2 mt-2">
        <LogoContainer />
        <div className="relative">
          <div className="border rounded-full border-gray-400 bg-gray-100 flex">
            <input
              ref={inputRef}
              className="h-8 p-4 w-[calc(100%-5px)] rounded-l-full focus:outline-blue-400"
              placeholder="Search"
              type="text"
              value={tempQuery}
              onChange={(e) => setTempQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button
              className=" w-[75px] flex items-center justify-center"
              onClick={() => {
                setSearchQuery(tempQuery);
                inputRef.current?.blur();
              }}
            >
              <img
                className="h-5"
                alt="search-icon"
                src="https://cdn.pixabay.com/photo/2015/12/14/20/35/magnifier-1093183_1280.png"
              />
            </button>
          </div>

          {showSuggestions && tempQuery && (
            <div className="border border-gray-100 mt-1 shadow-lg w-full p-2 rounded-xl absolute bg-white z-50">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="p-2 flex rounded-lg hover:bg-gray-100"
                    onMouseDown={() => {
                      handleSuggestionClick(suggestion);
                    }}
                  >
                    {SEARCH_ICON}
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="">
          <img
            className="h-8 float-right"
            alt="user-icon"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

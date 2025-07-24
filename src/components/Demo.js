import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const prime = useMemo(() => findNthPrime(Number(text)), [text]);
  const [isDarktheme, setIsDarkTheme] = useState(false);

  return (
    <div
      className={
        "m-2 p-4 border border-black w-96 h-96 " +
        (isDarktheme && "bg-gray-900")
      }
    >
      <div>
        <div>
          <button
            className="my-4 p-2 bg-red-600 font-bold text-white"
            onClick={() => setIsDarkTheme(!isDarktheme)}
          >
            Toggle
          </button>
        </div>
        <input
          className="py-1 px-2 rounded-lg w-full border border-gray-400 focus:outline-blue-400"
          type="number text-black"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button></button>
      </div>
      <div>
        <h1
          className={"mt-4 font-bold text-lg " + (isDarktheme && "text-white")}
        >
          Nth Prime : {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;

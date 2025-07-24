import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(10);
  const z = useRef(10);
  // console.log(z);
  // Ref is not like ref = 0, but ref = { current:0}

  return (
    <div className="mt-20 mx-2 p-4 border border-black w-96 h-96">
      <div>
        <button
          className="my-4 p-2 bg-red-600 font-bold text-white"
          onClick={() => {
            x++;
            console.log("x = ", x);
          }}
        >
          Increase x
        </button>
        <h1 className="mt-4 font-bold text-xl">Let x = {x}</h1>
        <button
          className="my-4 p-2 bg-red-600 font-bold text-white"
          onClick={() => {
            setY(y + 1);
            console.log("y = ", y);
          }}
        >
          Increase y
        </button>
        <h1 className="mt-4 font-bold text-xl">State y = {y}</h1>
        <button
          className="my-4 p-2 bg-red-600 font-bold text-white"
          onClick={() => {
            z.current = z.current + 1;
            console.log("z = ", z);
          }}
        >
          Increase z
        </button>
        <h1 className="mt-4 font-bold text-xl">Ref z = {z.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;

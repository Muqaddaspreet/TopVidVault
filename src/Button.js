/* Button.js */
export default function Button({ name }) {
  return (
    <button className="inline-block whitespace-nowrap rounded-lg px-3 py-1 m-2 bg-gray-100 font-semibold hover:bg-black hover:text-white">
      {name}
    </button>
  );
}

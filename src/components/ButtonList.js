import Button from "../Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "News",
  "Cooking",
  "AI",
  "Comedy",
  "Information",
  "Weight Training",
  "Recently uploaded",
  "New to you",
  "Dramedy",
  "Formula 1",
  "Mixes",
];

function ButtonList() {
  /* OUTER: owns the scrollbar */
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap no-scrollbar">
      {/* inner items */}
      {list.map((label) => (
        <Button name={label} key={label} />
      ))}
    </div>
  );
}

export default ButtonList;

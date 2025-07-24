import { useSelector } from "react-redux";
import {
  HOME_ICON,
  SHORTS_ICON,
  SUBSCRIPTIONS_ICON,
  HISTORY_ICON,
} from "../Constants";
import { Link } from "react-router-dom";

export default function MiniSidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <nav
      className={`hidden md:flex md:flex-col md:w-20 md:h-[91vh] pt-4 md:sticky md:top-0 shadow-{/*[4px_0_6px_-1px_rgba(0,0,0,0.2)]*/} ${
        isMenuOpen ? "md:hidden" : ""
      }`}
    >
      {/* icon + label under it */}
      <div className="mt-2 flex flex-col items-center gap-6 text-xs">
        <button className="w-full hover:bg-gray-100 rounded-lg px-2 py-2">
          <Link className="cursor-pointer flex flex-col items-center" to="/">
            {HOME_ICON}
            <span className="font-roboto mt-1">Home</span>
          </Link>
        </button>

        <button className="w-full px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-100 flex flex-col items-center">
          <Link className="cursor-pointer flex flex-col items-center" to="/">
            {SHORTS_ICON}
            <span className="font-roboto mt-1">Shorts</span>
          </Link>
        </button>

        <button className="w-full px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-100 flex flex-col items-center">
          <Link className="cursor-pointer flex flex-col items-center" to="/">
            {SUBSCRIPTIONS_ICON}
            <span className="font-roboto mt-1">Subscriptions</span>
          </Link>
        </button>

        <button className="w-full px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-100 flex flex-col items-center">
          <Link className="cursor-pointer flex flex-col items-center" to="/">
            {HISTORY_ICON}
            <span className="font-roboto mt-1">History</span>
          </Link>
        </button>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-pink-300 w-1/2 rounded-tr-2xl rounded-bl-2xl p-2 absolute right-0 top-0 outline outline-offset-0 outline-gray-700">
      <ol className="w-full flex justify-around">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
      </ol>
    </nav>
  );
};

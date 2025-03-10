import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-zinc-600 w-full lg:w-1/2 rounded-tr-2xl lg:rounded-bl-2xl p-2 absolute right-0 top-0 outline outline-offset outline-gray-400   ">
      {/* desktop menu */}
      <ol className="w-full flex justify-around   ">
        <li className="hover:text-green-500">
          <NavLink to="/myPortfolio/" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          About</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/myPortfolio/resume" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          Resume</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/myPortfolio/projects" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          My projects</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/myPortfolio/contact-me" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          Contact me</NavLink>
        </li>
        
      </ol>
      {/* mobile menu */}
          {/* <ol className="">
          <li className="hover:text-green-500">
          <NavLink to="/" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          About</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/resume" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          Resume</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/projects" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          My projects</NavLink>
        </li>
        <li className="hover:text-green-500">
          <NavLink to="/contact-me" 
          className={({ isActive }) =>
              isActive ? "active" : ""
          }>
          Contact me</NavLink>
        </li>
          </ol> */}
    
    </nav>
  );
};

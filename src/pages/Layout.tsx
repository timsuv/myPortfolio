import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">

      <header className="w-full">
        <div className="container"> <Navbar  /></div>
       
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

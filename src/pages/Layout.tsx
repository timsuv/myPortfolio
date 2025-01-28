import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ContactCard } from "../components/ContactCard";

export const Layout = () => {
  return (
    <div className="container grid grid-cols-12 gap-4 my-10 p-2">
      <ContactCard />
      <div className="col-span-12 lg:col-span-9 bg-zinc-800 rounded-2xl border-gray-400 border relative overflow-hidden">
        <Navbar />
        <main className="p-5 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ContactCard } from "../components/ContactCard";

export const Layout = () => {
  return (
    <div className="container grid grid-cols-6 gap-4 my-10">
      <ContactCard />
      <div className="col-span-5 bg-zinc-800 rounded-2xl border-gray-700 border-2 relative overflow-hidden">
        <Navbar />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

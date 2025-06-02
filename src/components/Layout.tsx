import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

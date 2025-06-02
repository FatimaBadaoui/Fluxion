import { Link } from "react-router";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 px-10 py-6 flex items-center justify-between bg-emerald-900 p-4 text-white">
      {/* LOGO */}
      <div className="text-2xl font-bold z-50">
        <Link to="/">FLUXION</Link>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="hidden md:flex gap-4 space-x-5 text-2xl">
        <Link to="/about" className="navLink">
          About Us
        </Link>
        <Link to="/community" className="navLink">
          Our Community
        </Link>
        <Link to="/projects" className="navLink">
          Projects
        </Link>
        <Link to="/events" className="navLink">
          Events
        </Link>
        <Link to="/contact" className="navLink">
          Get Involved
        </Link>
      </nav>
      {/* MOBILE MENU */}
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        {isOpen ? (
          <ImCross className="text-2xl cursor-pointer hover:text-gray-400" />
        ) : (
          <MdMenu className="text-3xl cursor-pointer hover:text-gray-400" />
        )}
      </div>
      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-emerald-900 px-10 py-6 md:hidden text-white flex flex-col items-start justify-center gap-6 text-5xl z-20"
          >
            <Link to="/about" className="block mb-2 hover:text-gray-400">
              About Us
            </Link>
            <Link to="/community" className="block mb-2 hover:text-gray-400">
              Our Community
            </Link>
            <Link to="/projects" className="block mb-2 hover:text-gray-400">
              Projects
            </Link>
            <Link to="/events" className="block mb-2 hover:text-gray-400">
              Events
            </Link>
            <Link to="/contact" className="block hover:text-gray-400">
              Get Involved
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

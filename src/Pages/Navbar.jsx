import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Search from "../Components/Search";

const Navbar = () => {
  const navbars = (
    <>
      <div>
      <Search/>
      </div>
        <NavLink to='/favorites'>Favourite</NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#112950] h-20 text-white md:px-10">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <h2 className="font-bold text-3xl text-[#F56D04] font-play_write">
          News Flash React
        </h2>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex gap-8 items-center">
            {navbars}
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <GiHamburgerMenu className="text-2xl text-[#F56D04]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#112950] rounded-box w-52"
          >
           {navbars}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

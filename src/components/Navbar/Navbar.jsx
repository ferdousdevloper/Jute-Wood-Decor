import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  console.log(user);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 font-bold border border-lime-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCraftItems"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 font-bold border border-lime-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraftItems"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 font-bold border border-lime-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          Add Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCraftList"
          className={({ isActive }) =>
            isActive
              ? "text-lime-500 font-bold border border-lime-500 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-[99]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img className="md:w-[280px] w-[150px]" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLink}
          </ul>
        </div>
        
        <div className="navbar-end z-[99] flex md:flex-row flex-col gap-4">
        <span className="md:mr-6 hidden md:block">{user?.email}</span>
          {/*user singed in information */}
          {user ? (
            <div
              className="dropdown dropdown-end tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] px-2 py-10 shadow-4xl shadow  rounded-box md:w-64 border  bg-blue-gray-200 bg-opacity-45 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md "
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                  }
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square mb-6"
                />
                <li>
                  <p className=" btn mb-3">
                    <span>{user?.displayName || "user name not found"}</span>
                  </p>
                </li>
                <li>
                  <span className="btn mb-3">
                    {user?.email || "email not found"}
                  </span>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-sm btn-error text-white">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-lime-500  rounded-xl text-white px-8">
                Login
              </button>
            </Link>
          )}
          {/* <a className="btn">Register</a>
          <Link to="/login">
              <button className="btn bg-lime-500  rounded-xl text-white px-8">
                Login
              </button>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

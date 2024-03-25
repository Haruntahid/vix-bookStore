import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Vix-BookStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-[18px]">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/listedbooks"}
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pagesread"}
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/bestsell"}
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""
                }
              >
                Best Sell Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/community"}
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-4 py-3 bg-[#23BE0A] rounded-xl text-white">
            Sign In
          </a>
          <a className="btn px-4 py-3 bg-[#59C6D2] rounded-xl ml-3 text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

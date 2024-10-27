import Link from "../Link/Link";
import PrimaryButton from "../Buttons/PrimaryButton";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="max-w-screen-xl mx-auto px-5 py-4 bg-white flex items-center justify-between border-b">
      <span className="inline-block text-4xl font-bold text-gray-500">
        Logo
      </span>
      <div onClick={() => setActive(!active)} className="z-10 lg:hidden">
        {active ? (
          <RxCross1 className="w-6 h-6" />
        ) : (
          <CiMenuFries className="w-6 h-6" />
        )}
      </div>
      <ul
        className={`${
          active ? "" : "hidden"
        } absolute right-6 top-14 bg-gray-50 rounded-lg p-4 flex flex-col items-start gap-1 shadow-md lg:shadow-none lg:flex lg:bg-white lg:static lg:flex-row lg:items-center lg:gap-8`}
      >
        {routes.map((route) => (
          <li key={route.id}>
            <Link name={route.name} path={route.path}></Link>
          </li>
        ))}
        <li className="mt-2 lg:mt-0">
          <PrimaryButton text="Sign Up"></PrimaryButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

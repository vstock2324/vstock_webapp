import { memo } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const NavBar2 = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <nav className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-full">
        <ul className="list-none text-[20px] text-white flex flex-row justify-between items-center w-full ">
          <li className="flex flex-col items-start justify-start pb-2">
           <Link href={"/home"}> <Image alt="logo" src={"/logo/vstocks2.png"} width={125} height={75} /></Link>
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="flex flex-row justify-between items-center space-x-2">
            <span>Templates</span> <FaChevronDown className="cursor-pointer" size={20} />
          </li>
          <li>
            <Link href={"/"}>My Projects</Link>
          </li>
          <li>
            <Link href={"/"}>Premium</Link>
          </li>
          <li>
            <Link
              className="border border-white dark:border-white rounded-[25px] px-6 py-1"
              href={"/"}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(NavBar2);

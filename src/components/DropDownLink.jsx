import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const DropDownLink = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className=" inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm text-gray-900 ring-inset outline-none">
          <span className="text-[16px]">Shop</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute lg:left-0 left-0 lg:top-3 top-5 z-10 mt-2 lg:mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to={"/manCloth"}
              className="block px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Men's Cloth
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/womanCloth"}
              className="block px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Woman's Cloth
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/kidCloth"}
              className="block px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Kid's Cloth
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDownLink;
{
  /* <div className="flex items-center">
  Shop
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</div>; */
}

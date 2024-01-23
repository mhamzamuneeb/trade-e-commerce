import Link from "next/link";
import { removeToken, setToken } from "@/pages/api/auth/[...nextauth]";
export const DropdownLoggedOut = (setDropdown: any) => {
  const handleLogout = () => {
    // Remove the token from both sessionStorage and localStorage
    removeToken();
    setDropdown(false);
    setToken(null);
  };
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 left-{-143} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            href="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Manage My Account
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            href="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Order
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            href="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLogout()}
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

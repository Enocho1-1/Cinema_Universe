
import { Link } from "react-router-dom"

export const LoginDropDown = () => {
  return (
    <div id="dropdownAvatar" className="loginMenu select-none	absolute top-[100%] right-5 z-10 w-44 divide-y divide-gray-100 shadow">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div className="font-sans font-medium truncate">shubham@example.com</div>
      </div>
      <ul className="py-1 font-sans text-sm dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li>
              <Link to="" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">WatchList</Link>
          </li>
          {/* <li>
              <Link to="" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
          </li> */}
      </ul>
      <div className="py-1">
          <span className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
      </div>
  </div>
  )
}

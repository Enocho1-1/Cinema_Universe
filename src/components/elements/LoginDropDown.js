
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Bookmark from "../../assets/bookmark-white.png"
import Logout from "../../assets/logout.png"

export const LoginDropDown = () => {

    const [username] = useState(JSON.parse(sessionStorage.getItem("username")))
    const navigate=useNavigate()
    
    const handleLogout = (event) => {
        event.preventDefault()

        sessionStorage.clear()
        navigate("/")
    }
  
  return (
    <div id="dropdownAvatar" className="loginMenu select-none	absolute top-[100%] right-5 z-10 w-44 divide-y divide-gray-100 shadow">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div className="font-sans font-medium truncate">{username}</div>
      </div>
      <ul className="py-1 font-sans text-sm dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
          <li className="flex">
              <Link to="" className="block py-2 px-4">WatchList</Link>

              <img src={Bookmark} className="h-4 self-center" alt="" />
          </li>
          {/* <li>
              <Link to="" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
          </li> */}
      </ul>
      <div className="py-1 flex">
          <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white">Log out</span>
          <img src={Logout} className="ml-4 h-4 self-center" alt="" />
      </div>
  </div>
  )
}

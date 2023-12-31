
import { useNavigate } from "react-router-dom"
import { useWatch } from "../../context/WatchContext"
import { Link } from "react-router-dom"
import Bookmark from "../../assets/bookmark1.png"
import Logout from "../../assets/logout.png"

export const LoginDropDown = () => {
    const { retrieveUserData } = useWatch()
    const { userEmail } = retrieveUserData()
    const navigate = useNavigate()
    
    const handleLogout = (event) => {
        event.preventDefault()
        sessionStorage.clear()
        navigate("/")
    }
  
  return (
    <div id="dropdownAvatar" className="loginMenu select-none	absolute top-[100%] right-5 z-10 w-44 divide-y divide-gray-100 shadow">
      <div className="py-3 px-4 text-sm text-gray-200">
          <div className="font-sans font-medium truncate">{userEmail}</div>
      </div>
      <ul className="py-1 font-sans text-sm text-gray-200 hover:text-secondary-blue" aria-labelledby="dropdownUserAvatarButton">
          <li className="flex">
              <Link to={`/watchlist`} className="block py-2 px-4">WatchList</Link>

              <img src={Bookmark} className="h-4 self-center" alt="" />
          </li>
      </ul>
      <div className="py-1 flex">
          <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-200 hover:text-secondary-blue">Log out</span>
          <img src={Logout} className="ml-4 h-4 self-center" alt="" />
      </div>
  </div>
  )
}

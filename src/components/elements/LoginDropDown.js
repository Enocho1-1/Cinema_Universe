
import { useNavigate } from "react-router-dom"
import { useWatch } from "../../context/WatchContext"
import { Link } from "react-router-dom"
import Bookmark from "../../assets/bookmark-white.png"
import Logout from "../../assets/logout.png"

export const LoginDropDown = () => {
    const { state, dispatch } = useWatch()
    const userName = state.email
    const navigate=useNavigate()

    const clearState = () => {
        dispatch({type:"ADD_NAME",payload:{value:""}})
        dispatch({type:"ADD_EMAIL",payload:{value:""}})
        dispatch({type:"ADD_ID",payload:{value:""}})
        dispatch({type:"ADD_ACCESS_TOKEN",payload:{value:""}})
        dispatch({type:"ADD_PASSWORD",payload:{value:""}})
    }

    const handleLogout = (event) => {
        event.preventDefault()
        clearState()
        sessionStorage.clear()
        navigate("/")
    }
  
  return (
    <div id="dropdownAvatar" className="loginMenu select-none	absolute top-[100%] right-5 z-10 w-44 divide-y divide-gray-100 shadow">
      <div className="py-3 px-4 text-sm text-gray-200">
          <div className="font-sans font-medium truncate">{userName}</div>
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

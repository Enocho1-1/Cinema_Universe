import { NavLink } from "react-router-dom"

export const DropMenu = () => {
  return (
    <div id="dropdownAvatar" className="loginMenu select-none	absolute top-[100%] left-5 z-10 w-44 divide-y divide-gray-100 shadow">
        <div className="py-3 px-4 text-sm text-gray-200">
            <div className="font-sans font-medium ">Movies</div>
        </div>
        <ul className="py-1 font-sans text-sm text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li className="flex">
                <NavLink to="" className="block py-2 px-4 hover:text-secondary-blue">Popular</NavLink>
            </li>
            <li className="flex">
                <NavLink to="" className="block py-2 px-4 hover:text-secondary-blue">Upcoming</NavLink>
            </li>
            <li className="flex">
                <NavLink to="" className="block py-2 px-4 hover:text-secondary-blue">Top Rated</NavLink>
            </li>
        </ul>
        <div className="py-3 px-4 text-sm text-gray-200">
            <div className="font-sans font-medium ">TV</div>
        </div>
           <ul className="py-1 font-sans text-sm text-gray-200 hover:text-secondary-blue" aria-labelledby="dropdownUserAvatarButton">
            <li className="flex">
                <NavLink to="" className="block py-2 px-4">Top Rated</NavLink>
            </li>
        </ul>
    </div>
  )
}

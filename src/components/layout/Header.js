import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginDropDown } from "../../components/index"
import menu from "../../assets/menu.png"
import arrow from "../../assets/right-arrow.png"
import user from "../../assets/account.png"

export const Header = () => {

    const [isHidden, setIsHidden] = useState(false)
  return (
    <header className="relative mainHead z-10 w-full px-2">
        <div className=" flex justify-between px-8 py-4">
            <span className="flex">
                <aside className="hover:cursor-pointer mr-2">
                    <img src={menu} className="h-12 w-12" alt="" />
                </aside>
                <Link to="/home">
                    <h1 className="font-teko  text-5xl max-md:text-4xl text-primary-blue hover:cursor-pointer">Cinema-U</h1>
                </Link>
            </span>

            {/* Search Movies */}
            <form>   
                <div className="relative">
                    <input type="search" id="search" className="block w-[600px] p-3 pl-10 text-sm border border-gray-900 rounded-xl bg-black text-white" placeholder="Search Movies" require />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary-blue hover:bg-secondary-blue font-medium rounded-lg text-sm px-4 py-2">
                        <img src={arrow} className="h-4 w-4" alt="" />
                    </button>
                </div>
            </form>

            <button onClick={() => setIsHidden(!isHidden)} className="self-center">
                <img src={user} className="hover:cursor-pointer" alt="" />
            </button>
            { isHidden &&  <LoginDropDown /> }
        </div>
      

        

    </header>
  )
}

import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginDropDown } from "../../components/index"
import menu from "../../assets/menu.png"
import arrow from "../../assets/right-arrow.png"
import search from "../../assets/search.png"
import user from "../../assets/account.png"


export const MobileHeader = () => {
    const [isHidden, setIsHidden] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
  return (
    <header className="relative">
        <div className="absolute top-0 mainHead z-10 w-full flex justify-evenly  py-4">
            <span className="flex">
                <aside className="self-center hover:cursor-pointer mr-2">
                    <img src={menu} className="h-8 w-8" alt="" />
                </aside>
                <Link to="/home">
                    <h1 className="font-teko  text-3xl mt-2 mx-4 max-md:text-4xl text-primary-blue hover:cursor-pointer">Cinema-U</h1>
                </Link>
            </span>

            {/* Search Movies */}

            <button onClick={() => setShowSearch(!showSearch)}>
                <img src={search}  className="h-6 w-6 hover:cursor-pointer" alt="" />
            </button>

            <button onClick={() => setIsHidden(!isHidden)} className="self-center">
                <img src={user} className="hover:cursor-pointer" alt="" />
            </button>
            { isHidden &&  <LoginDropDown /> }
          
        </div>
            {showSearch && 
                <form className="absolute top-20 z-10">   
                    <div className="relative">
                        <input type="search" id="search" className="headerInput block min-w-[90vw] max-mobile:mx-4 mobile:max-tablet:mx-8 p-3 pl-10 text-sm border rounded-[50px] text-white" placeholder="Search Movies" require />
                        <button type="submit" className="text-white absolute right-[8%] bottom-2.5 bg-primary-blue hover:bg-secondary-blue font-medium rounded-lg text-sm px-4 py-2">
                            <img src={arrow} className="h-3 w-3" alt="" />
                        </button>
                    </div>
                </form>
            }
          
    </header>
  )
}

import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginDropDown,DropMenu } from "../../components/index"
import menu from "../../assets/menu.png"
import arrow from "../../assets/right-arrow.png"
import user from "../../assets/account.png"

export const Header = () => {

    const [isHidden, setIsHidden] = useState(false)
    const [dropHidden, setDropHidden] = useState(false)
  return (
    <header className="absolute top-0 mainHead z-10 w-full px-2">
        <div className=" flex justify-between px-12 py-4">
            <span className="flex">
                <button onClick={() => setDropHidden(!dropHidden)} className="hover:cursor-pointer mr-4">
                    <img src={menu} className="h-10 w-8" alt="" />
                </button>
                { dropHidden &&  <DropMenu /> }
                <Link to="/home">
                    <h1 className="font-teko  text-5xl max-tablet:text-4xl text-primary-blue hover:cursor-pointer">Cinema-U</h1>
                </Link>
            </span>

            {/* Search Movies */}
            <form>   
                <div className="relative">
                    <input type="search" id="search" className="headerInput block min-w-[29.688rem] p-3 pl-10 text-sm rounded-[75px]  text-white" placeholder="Search Movies" require />
                    <button type="submit" className="text-white absolute right-3.5 bottom-2.5 bg-primary-blue hover:bg-secondary-blue font-medium rounded-lg text-sm px-4 py-2">
                        <img src={arrow} className="h-3 w-3" alt="" />
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

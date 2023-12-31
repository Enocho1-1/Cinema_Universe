import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginDropDown,DropMenu } from "../../components/index"
import { toast } from 'react-toastify';
import menu from "../../assets/menu.png"
import arrow from "../../assets/right-arrow.png"
import search from "../../assets/search.png"
import user from "../../assets/account.png"


export const MobileHeader = () => {
    const [isHidden, setIsHidden] = useState(false)
    const [dropHidden, setDropHidden] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()

    const handleSearch = (event) =>{
        event.preventDefault()
        
        switch(event.target.search.value){
            case "":
                toast.error("Please Enter Movie or Show")
                break;
            default:
                const userSearch = event.target.search.value
                event.target.reset()
                navigate(`/search?query=${userSearch}`)
        }
        
    }

  return (
    <header className="relative">
        <div className="absolute top-0 mainHead z-10 w-full flex justify-evenly  py-4">
            <span className="flex">
                <button onClick={() => setDropHidden(!dropHidden)} className="self-center hover:cursor-pointer mr-2">
                    <img src={menu} className="h-8 w-8" alt="" />
                </button>
                { dropHidden &&  <DropMenu /> }
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
                <form onSubmit={handleSearch} className="absolute top-20 z-10">   
                    <div className="relative">
                        <input type="search" id="search" className="headerInput block min-w-[90vw] max-mobile:mx-4 mobile:max-tablet:mx-8 p-3 pl-10 text-sm border rounded-[50px] text-white" placeholder="Search Movies" require="true" />
                        <button type="submit" className="text-white absolute right-[8%] bottom-2.5 bg-primary-blue hover:bg-secondary-blue font-medium rounded-lg text-sm px-4 py-2">
                            <img src={arrow} className="h-3 w-3" alt="" />
                        </button>
                    </div>
                </form>
            }
          
    </header>
  )
}

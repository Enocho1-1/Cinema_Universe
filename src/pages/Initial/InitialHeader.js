import { useState } from "react"
import { Link } from "react-router-dom"

export const InitialHeader = () => {

    const [isHidden, setIsHidden] = useState(false)
    const [language, setLanguage] = useState("English")
  return (
    <header className="relative z-10 max-[480px]:flex max-[480px]:justify-center m-auto max-w-7xl px-2">
        <div className="my-8 flex justify-between tablet:px-24">
            <span>
                <h1 className="font-teko  text-5xl max-md:text-4xl max-[480px]:mr-10 text-primary">Cinema-U</h1>
            </span>
            <span className="flex">
                {/* Language Dropdown */}
                <div className="relative">
                    <button onClick={() => setIsHidden(!isHidden)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white font-teko border border-white font-medium rounded-lg text-md mr-3 px-8 max-md:px-4 py-1.5 text-center inline-flex items-center" type="button">{language} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>

                    <div id="dropdown" className={ isHidden ? ("z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"): ("z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700")}>
                        <ul className="py-2 text-md  dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="# " onClick={() => {setLanguage("English"); setIsHidden(false)}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                            </li>
                            <li>
                                <a href="# " onClick={() => {setLanguage("Espanol"); setIsHidden(false)}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Espanol</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Sign In Button */}
                <div className="mt-1">
                    <Link to={"/login"} type="button" className="text-white bg-primary hover:bg-red-800  font-teko rounded-lg text-md px-5 py-1.5">Sign In</Link>
                </div>
              
            </span>
        </div>
       
    </header>
  )
}

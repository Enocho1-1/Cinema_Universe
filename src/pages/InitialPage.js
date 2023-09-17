import { useNavigate } from "react-router"
import { InitialHeader } from "./Initial/InitialHeader"
import arrow from "../assets/right-arrow.png"

export const InitialPage = () => {

  const navigate = useNavigate()

  const initialSubmit = (event) => {
    event.preventDefault()
    const userEmail = event.target.email.value
    sessionStorage.setItem("user", JSON.stringify(userEmail))
    event.target.reset()
    navigate("/register")
  }

  return (
    <main className="initial h-screen w-screen">
        < InitialHeader/>

        <section className="relative z-10 mt-[175px] max-md:mt-[100px] flex flex-col items-center justify-center max-md:text-center">
          <h1 className=" font-teko text-white text-6xl max-[812px]:text-4xl">Unlimited movies, TV shows, and more</h1>
          <p className="text-white mt-4 font-semibold font-sans text-xl max-[812px]:text-lg">Watch Anywhere. Cancel anytime.</p>
          <p className="text-white mt-4 font-semibold font-sans text-xl max-[812px]:text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
          <>

            <form onSubmit={initialSubmit} className="mt-4 flex items-center max-[600px]:flex-col">   
                <div className="relative w-full">
                    <input type="email" name="email" id="voice-search" className="initialInput border border-gray-300 text-white text-sm rounded-lg block pl-10 py-3 px-48" placeholder="Email Address" required/>
                </div>
                <div className="w-full max-md:w-[50%] max-md:mt-4">
                  <button  className="flex items-center px-6 py-2 ml-2 font-medium text-white bg-primary hover:bg-red-800 font-teko rounded-lg"type="submit">
                    <h1 className="inline text-xl">Get Started</h1>
                    <img src={arrow} className="h-6 ml-4" alt="" />
                  </button>
                </div>
             
            </form>

          </>
        </section>

        <div id="overlay"></div>
      
    </main>

    
  )
}
 
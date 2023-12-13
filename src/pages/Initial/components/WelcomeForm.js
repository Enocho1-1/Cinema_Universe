import { useRef } from "react"
import { useNavigate } from "react-router"
import { initialSubmit } from "../../../utility/AuthDetail"
import arrow from "../../../assets/right-arrow.png"

export const WelcomeForm = () => {
  const navigate = useNavigate()
  const user = useRef()

  return (
    <section className="relative z-10 mt-[125px] min-xl:mt-[175px] flex flex-col items-center justify-center max-md:text-center">
       <h1 className=" font-teko text-white text-6xl max-[812px]:text-4xl">Unlimited movies, TV shows, and more</h1>
          <p className="text-white mt-4 font-semibold font-sans text-xl max-[812px]:text-lg">Watch Anywhere. Cancel anytime.</p>
          <p className="text-white mt-4 font-semibold font-sans text-xl max-[812px]:text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
          <>

            <form onSubmit={() => {initialSubmit(user.current.value,navigate)}} className="mt-4 flex items-center max-[600px]:flex-col">   
                <div className="relative w-full">
                    <input type="email" ref={user} data-testid="newuser-input"  className="initialInput border border-gray-300 text-white text-sm rounded-sm block pl-10 py-3 px-24 w-[450px] max-[450px]:w-[350px]" placeholder="Email Address" required/>
                </div>
                <div className="w-full max-md:w-[50%] max-md:mt-4">
                  <button data-testid="get-started"  className="flex items-center px-6 py-2 ml-2 font-medium text-white bg-primary-blue hover:bg-secondary-blue font-teko rounded-lg"type="submit">
                    <h1 className="inline text-xl">Get Started</h1>
                    <img src={arrow} className="h-6 ml-4" alt="" />
                  </button>
                </div>
             
            </form>

          </>
    </section>
  )
}

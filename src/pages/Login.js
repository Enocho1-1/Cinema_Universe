import { useTitle } from "../hooks/index"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { InitialSecondHead } from "./Initial/components/InitialSecondHead"
import { toast } from 'react-toastify';

export const Login = () => {

  useTitle("Cinema Universe | Login")
  const navigate = useNavigate()

  const handleSignIn  = async (event) => {
    event.preventDefault()

    const authDetail = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    const options = {
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(authDetail)
    }

 
      const response = await fetch("http://localhost:28000/signin", options)
      const data = await response.json()
   
    if(data.accessToken){
      sessionStorage.setItem("username", JSON.stringify(data.user.email))
      sessionStorage.setItem("userID", JSON.stringify(data.user.id))
      navigate("/home")
    } else{
      toast.error("Check Email or Password")
    }

 


  }


  return (
    <main className="relative initial h-screen w-screen">
      <InitialSecondHead />
      <div className="inputFieldContain max-h-[500px] w-[500px] max-md:w-[350px] min-xl:mt-[120px]">
        <span className="text-white font-sans mt-6 px-4">
          <h1 className="font-semibold text-3xl">Sign In</h1>
        </span>
        
        <form  onSubmit={handleSignIn} className="mt-6 px-3">
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-teko font-medium text-white">Email address</label>
          <input type="email" id="email" name="email" className=" bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" required/>
          </div> 
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-lg font-teko font-medium text-white">Password</label>
              <input type="password" id="password" className="bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" name="password" placeholder="•••••••••" required/>
          </div> 

          <button  className="flex justify-center px-6 py-2 ml-2 font-medium text-white bg-primary-blue hover:bg-secondary-blue font-teko rounded-lg w-full"type="submit">
            <h1 className="inline text-xl">Sign In</h1>
          </button>

           <span className="flex justify-between mt-2 px-4">
            <div className="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" readOnly className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium font-sans text-gray-400">Remember me</label>
            </div>
            <div>
              <h1 className="font-sans text-sm text-gray-400 hover:cursor-pointer">Need Help?</h1>
            </div>
           </span>
        </form>

        <div className="mt-10 px-4">
          <h1 className="text-md font-sans text-gray-400">
            New to Cinema-U? 
            <Link to={"/register"} className="ml-2 text-white">Sign Up Now</Link>
          </h1>
        </div>
      </div>
    <div id="overlay"></div>
  
    </main>
  )
}

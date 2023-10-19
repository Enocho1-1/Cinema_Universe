/* eslint-disable */
import { useTitle } from "../hooks/index"
import { useNavigate } from "react-router"
import { postUserObj } from "../utility";
import { InitialSecondHead } from "./Initial/components/InitialSecondHead"
import { toast } from 'react-toastify';


export const Register = () => {

  useTitle("Cinema Universe | Sign-Up")
  const navigate = useNavigate()

  const user = JSON.parse(sessionStorage.getItem("username"))

  // User Watch List Function
  const createWLObj = async (id,token,email) => {

     const userList = {
      id :id,
      userToken: token,
      userEmail: email,
      list: []
    }

    const options = {
      method: "POST",
      headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`},
      body:JSON.stringify(userList),
    }

    postUserObj(options)
    
  }

  const handleRegister = async (event) => {
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

 
      const response = await fetch("http://localhost:34000/register", options)
      if (!response.ok){
        toast.error("User Already Exists")
      } else{
        const data = await response.json()
        // initialize user watch list function call
        createWLObj(data.user.id, data.accessToken, data.user.email )
        
        sessionStorage.setItem("userID", JSON.stringify(data.user.id))
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        navigate("/home")
 
      }
     

  }


  return (
    <main className="relative initial h-screen w-screen">
      <InitialSecondHead/>

      <div className="inputFieldContain max-h-[500px] w-[500px] max-md:w-[350px] min-xl:mt-[120px]">
        <span className="text-white font-sans mt-6 px-4">
          <h1 className="font-semibold text-2xl">Create a password to start your membership</h1>
          <p className="text-lg mt-4">One step closer to entering the Cinema Universe 🚀</p>
        </span>
        
        <form onSubmit={handleRegister} className="mt-6 px-3">
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-teko font-medium text-white">Email address</label>
          <input type="email" id="email" name="email" className=" bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" defaultValue={user || ""} required/>
          </div> 
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-lg font-teko font-medium text-white">Password</label>
              <input type="password" id="password" name="password" className="bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required/>
          </div> 

          <button  className="flex justify-center px-6 py-2 ml-2 font-medium text-white  bg-primary-blue hover:bg-secondary-blue font-teko rounded-lg w-full"type="submit">
            <h1 className="inline text-xl">Register</h1>
          </button>
        </form>
      </div>

    <div id="overlay"></div>
  
    </main>
  )
}

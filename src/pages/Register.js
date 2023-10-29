/* eslint-disable */
import { useState } from "react";
import { useTitle } from "../hooks/index"
import { useNavigate } from "react-router"
import { useWatch } from "../context/WatchContext";
import { postUserObj ,registerUser} from "../utility";
import { InitialSecondHead } from "./Initial/components/InitialSecondHead"
import { toast } from 'react-toastify';


export const Register = () => {
  useTitle("Cinema Universe | Sign-Up")
  
  // useContext Destructure
  // const { state} = useWatch()
  const [email, setUEmail] = useState("")
  const navigate = useNavigate()
  const userEmail = sessionStorage.getItem("userEmail")
 

  // Create Watch List Obj Literal Notation/POST Method
  const createWLObj = async (id,name,token,email) => {

     const userList = {
      id :id,
      name: name,
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

// Handle Registration Func
  const handleRegister = async (event) => {
    event.preventDefault()

    const authDetail = {
      name: event.target.name.value,
      email:  userName  ? userName  : email,
      password: event.target.password.value
    }

    const options = {
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(authDetail)
    }

     // Register User
    registerUser(options, createWLObj, navigate,toast)
     
  }

 


  return (
    <main className="relative initial h-screen w-screen">
      <InitialSecondHead/>

      <div className="inputFieldContain max-h-[600px] w-[500px] max-md:w-[350px] min-2xl:mt-[120px]">
        <span className="text-white font-sans min-xl:mt-6 px-4">
          <h1 className="font-semibold text-2xl">Create a password to start your membership</h1>
          <p className="text-lg mt-4">One step closer to entering the Cinema Universe 🚀</p>
        </span>
        
        <form onSubmit={handleRegister} className="min-xl:mt-6px-3 py-2">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg font-teko font-medium text-white">Name</label>
            <input type="name" id="name" name="name" className=" bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" placeholder="Enter Name" required/>
            </div> 
            <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg font-teko font-medium text-white">Email address</label>
            <input onChange={e => setUEmail(e.target.value)} type="email" id="email" name="email" className=" bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" value={ userEmail ?  userEmail  : email} required/>
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

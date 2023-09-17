
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const Register = () => {

  const [username, setUsername] = useState("")

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUsername(user)
    
  },[])

  const handleRegister = async (event) => {
    event.preventDefault()

    const authDetail = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    sessionStorage.clear()
    console.log(authDetail)
  }


  return (
    <main className="relative initial h-screen w-screen">
      <header className="relative z-10 m-auto max-w-7xl px-2 my-6">
        <span>
          <Link to="/">
            <h1 className="font-teko  text-5xl max-md:text-4xl text-primary hover:cursor-pointer">Cinema-U</h1>
          </Link>
        </span>
      </header>

      <div className="inputFieldContain max-h-[500px] w-[500px] max-md:w-[350px]">
        <span className="text-white font-sans mt-6">
          <h1 className="font-semibold text-2xl">Create a password to start your membership</h1>
          <p className="text-lg mt-4">One step closer to entering the Cinema Universe 🚀</p>
        </span>
        
        <form onSubmit={handleRegister} className="mt-6 px-3">
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-teko font-medium text-white">Email address</label>
          <input type="email" id="email" name="email" className=" bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" defaultValue={username || ""} required/>
          </div> 
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-lg font-teko font-medium text-white">Password</label>
              <input type="password" id="password" name="password" className="bg-slate-700 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required/>
          </div> 

          <button  className="flex justify-center px-6 py-2 ml-2 font-medium text-white bg-primary hover:bg-red-800 font-teko rounded-lg w-full"type="submit">
            <h1 className="inline text-xl">Register</h1>
          </button>
        </form>
      </div>

    <div id="overlay"></div>
  
    </main>
  )
}

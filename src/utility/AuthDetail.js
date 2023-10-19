// Post Unique User Obj
export const postUserObj = async (options) => {
    try{
        const response = await fetch("http://localhost:34000/660/orders",options)
        if(!response){
          throw new Error(`${response.status}`)
        }
      } catch(error){
        throw new Error(error.message)
      }
}

// Register User
export const registerUser = async (options, createWLObj, navigate,toast) => {
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

// Login User
export const loginUser = async (options, navigate,toast) => {
    const response = await fetch("http://localhost:34000/signin", options)
    if (!response.ok){
      toast.error("Check Email or Password")
    } else{
      const data = await response.json()
      sessionStorage.setItem("username", JSON.stringify(data.user.email))
      sessionStorage.setItem("userID", JSON.stringify(data.user.id))
      sessionStorage.setItem("token", JSON.stringify(data.accessToken))
      navigate("/home")
    }
}

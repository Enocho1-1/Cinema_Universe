// User Data Session Storage 
const storeUserData = (name,email,id,accessToken) => {
  sessionStorage.setItem("userName", name);
  sessionStorage.setItem("userId", id);
  sessionStorage.setItem("userEmail", email);
  sessionStorage.setItem("accessToken", accessToken);
}

// New User Initial Form Submit
export const initialSubmit = (email,navigate) => {
    sessionStorage.setItem("userEmail", email);
    email = ""
    navigate("/register")
}

// Post Unique User Obj
export const postUserObj = async (options) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,options)
        if(!response){
          throw new Error(`${response.status}`)
        }
      } catch(error){
        throw new Error(error.message)
      }
}

// Register User
export const registerUser = async (options, createWLObj, navigate,toast) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, options)
    if (!response.ok){
      toast.error("User Already Exists")
    } else{
      const data = await response.json()
      // initialize user watch list function call
      createWLObj(data.user.id, data.user.name,data.accessToken, data.user.email )
      // Store User Data in session storage
      storeUserData(data.user.name,data.user.email,data.user.id,data.accessToken)

      setTimeout(() => {toast.success(`Welcome ${data.user.name}`)}, 2000)
      navigate("/home")

    }
}

// Login User
export const loginUser = async (options, navigate,toast) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/signin`, options)
    if (!response.ok){
      toast.error("Check Email or Password")
    } else{
      const data = await response.json()
      // Store User Data in session storage
      storeUserData(data.user.name,data.user.email,data.user.id,data.accessToken)

      setTimeout(() => {toast.success(`Welcome Back ${data.user.name}`)}, 2000)
      navigate("/home")
    }
}

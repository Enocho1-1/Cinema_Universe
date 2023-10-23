
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
export const registerUser = async (options, createWLObj,dispatch, navigate,toast) => {
    const response = await fetch("http://localhost:34000/register", options)
    if (!response.ok){
      toast.error("User Already Exists")
    } else{
      const data = await response.json()
      // initialize user watch list function call
      createWLObj(data.user.id, data.user.name,data.accessToken, data.user.email )

      dispatch({type:"ADD_EMAIL", payload:{value:data.user.email}})
      dispatch({type:"ADD_NAME",payload:{value:data.user.name}})
      dispatch({type:"ADD_ID",payload:{value:data.user.id}})
      dispatch({type:"ADD_ACCESS_TOKEN",payload:{value:data.accessToken}})
      
      setTimeout(() => {toast.success(`Welcome ${data.user.name}`)}, 2000)
      navigate("/home")

    }
}

// Login User
export const loginUser = async (options, navigate,dispatch,toast) => {
    const response = await fetch("http://localhost:34000/signin", options)
    if (!response.ok){
      toast.error("Check Email or Password")
    } else{
      const data = await response.json()

      dispatch({type:"ADD_NAME",payload:{value:data.user.name}})
      dispatch({type:"ADD_EMAIL",payload:{value:data.user.email}})
      dispatch({type:"ADD_ID",payload:{value:data.user.id}})
      dispatch({type:"ADD_ACCESS_TOKEN",payload:{value:data.accessToken}})

      setTimeout(() => {toast.success(`Welcome Back ${data.user.name}`)}, 2000)
      navigate("/home")
    }
}

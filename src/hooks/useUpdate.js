import { useEffect } from "react"
import { useWatch } from "../context/WatchContext"

export const useUpdate = () => {

    const { list } = useWatch()
    const token = JSON.parse(sessionStorage.getItem("token"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))
    const email = JSON.parse(sessionStorage.getItem("username"))

    useEffect(() => {
        // user watch list object
      const userList = {
        id:userID,
        userToken: token,
        userEmail: email ,
        list: list
      }


      const options = {
        method: "PUT",
        headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body:JSON.stringify(userList)
    }

    const updateList = async () => {
      try{
          const response = await fetch(`http://localhost:34000/660/orders/${userID}`, options)
          if(!response.ok){
              throw new Error(`${response.status}`)
          } 

      }catch(error){
          throw new Error(error.message)
      }
      }
      updateList()
    },[list])
    
  return null
}

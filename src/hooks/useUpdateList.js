/* eslint-disable */
import { useEffect,useState } from "react"

export const useUpdateList = ({list}) => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const UserID = JSON.parse(sessionStorage.getItem("userID"))
    const email = JSON.parse(sessionStorage.getItem("username"))

     // user watch list object
     const userList = {
        id :UserID,
        userToken: token,
        userEmail: email,
        list: list
      }

    const options = {
        method: "POST",
        headers:{"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body:JSON.stringify(userList)
    }

    useEffect(()=>{
        const updateList = async () => {
          try{
              const response = await fetch(`http://localhost:34000/660/orders`, options)
              if(!response.ok){
                  throw new Error(`${response.status}`)
              } else {
                  const result = await response.json()
              }
  
          }catch(error){
              throw new Error(error.message)
          }
      }
      updateList()
      },[list])

  return null
}

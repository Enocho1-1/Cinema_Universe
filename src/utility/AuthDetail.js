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
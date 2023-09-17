import { Routes, Route } from "react-router-dom"
import { InitialPage, Login, Register , HomePage} from "../pages/index"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      
      </Routes>
    </>
  )
}

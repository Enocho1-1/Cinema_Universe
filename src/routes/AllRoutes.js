import { Routes, Route } from "react-router-dom"
import { InitialPage, Login, Register , HomePage , MovieList, MovieDetail} from "../pages/index"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/NowPlaying' element={<MovieList apiPath="now_playing" title=" Now Playing"/>}/>
        <Route path="/:id" element={<MovieDetail/>}/>
      
      </Routes>
    </>
  )
}

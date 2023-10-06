import { Routes, Route } from "react-router-dom"
import { InitialPage, Login, Register , HomePage , MovieList, MovieDetail,Search, WatchList} from "../pages/index"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/Popular' element={<MovieList apiPath="movie/popular" title="Popular" type="movie"/>}/>
        <Route path='/NowPlaying' element={<MovieList apiPath="movie/now_playing" title="Now Playing" type="movie"/>}/>
        <Route path='/TopRated' element={<MovieList apiPath="movie/top_rated" title="Top Rated" type="movie"/>}/>
        <Route path='/TV/TopRated' element={<MovieList apiPath="tv/top_rated" title="Top Rated" type="tv"/>}/>
        <Route path="/:id" element={<MovieDetail/>}/>
        <Route path="search" element={<Search />}/>
        <Route path="/watchlist" element={<WatchList title="Watch List" />}/>
      
      
      </Routes>
    </>
  )
}

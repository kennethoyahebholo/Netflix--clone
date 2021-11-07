import React, {useState,useEffect} from 'react';
import axios from './axios';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import "./Row.css"

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
 const [movies, setMovies] = useState([]);

 const [trailerUrl, setTrailerUrl] = useState("")

 //A snippet of code which runs basd on a specific condition/variable

 useEffect(() => {
  // if[], run once when the row load , and dont run again
  async function fetchData() {
   const request = await axios.get(fetchUrl);
   console.log(request.data.results);
   setMovies(request.data.results)
   return request;
  }
  fetchData();
 },[fetchUrl]);

 console.table(movies);

 const opts = {
   height: "390",
   width: "99%",
   playerVars:{
     autoplay: 0
   }
 }

 const handleClick = (movie) => {
   if (trailerUrl) {
     setTrailerUrl('')
   } else {
     movieTrailer(movie?.title || "")
     .then(url => {
       const urlParams = new URLSearchParams(new URL(url).search);setTrailerUrl(urlParams.get('v'));
     }).catch((error) => console.log(error));
     }
 }


 return (
  <div className="row">
   <h2>{title}</h2>

   <div className="row__posters">
    {/* {several row posters} */}

    {movies.map(movie => (
     <img 
     key={movie.id} 
     onClick={() => handleClick(movie)}
     className={`row__poster ${isLargeRow && "row__posterLarge"}`}     
     src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
    ))};
   </div>
   <div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
   </div>
     {/*title*/}
     {/* container -> posters */}
  </div>
 )
}

export default Row

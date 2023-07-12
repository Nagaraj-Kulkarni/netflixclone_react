import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const trendingNowurl = "https://api.themoviedb.org/3/trending/all/week?api_key=c13d7a54c58a1d04cfa3938a830859c3&language=en-US"
const myImageurl = "https://image.tmdb.org/t/p/original"


function Main() {
  const[allMovies, setAllMovies] = React.useState([])

  React.useEffect(function()
  {
      async function fetchData()
      {
          // write the logic to fetch all the movies inforamtion
          const output = await Axios.get(trendingNowurl)
          const result = output.data.results
          console.log(result)
          // console.log(result) ({},{},{})
          setAllMovies(result[Math.floor(Math.random() * 20)])
      }

      fetchData()
  }, [])
  return (
    <div>
     {/* here we need to display a very large image, which changes randomly
      Random Larger image --> Tranding Now Movies
      Movie Name
      Description
      Play Button
      More Info Buttton */}

      <img src={myImageurl + allMovies.backdrop_path} className="myLargeimage"/>
      <h2>{allMovies.title}</h2>
      <p>{allMovies.overview}</p>
      
    </div>
  )
}

export default Main
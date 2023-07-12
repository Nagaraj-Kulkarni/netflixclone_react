import React from 'react'
import Axios from 'axios'
import "./Movies.css"

const trendingNowurl = "https://api.themoviedb.org/3/trending/all/week?api_key=c13d7a54c58a1d04cfa3938a830859c3&language=en-US"
const myImageurl = "https://image.tmdb.org/t/p/original"

function TrandingNow() {

  const[allMovies, setAllMovies] = React.useState([])

  React.useEffect(function()
  {
      async function fetchData()
      {
          // write the logic to fetch all the movies inforamtion
          const output = await Axios.get(trendingNowurl)
          const result = output.data.results
          setAllMovies(result)
          
      }

      fetchData()
  }, [])

  return (
    <div>
        <h1>TRENDING NOW</h1>
        <div className='alldiv'>
        {allMovies.map(function(i)
        {
            const imageName = i.backdrop_path
            return(<div className='trendingnowdiv'>
                <img src ={myImageurl + imageName} className="trendingnowimage"/>
                </div>)
        })}
        </div>
    </div>
  
  )
}

export default TrandingNow

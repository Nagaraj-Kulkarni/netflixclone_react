import React from 'react'
import Axios from 'axios'

const actionMovies = "https://api.themoviedb.org/3/discover/movie?api_key=c13d7a54c58a1d04cfa3938a830859c3&with_genres=28"
const myImageurl = "https://image.tmdb.org/t/p/original"

function ActionMovies() {
    
    const [myactionMovies, setActionMovies] = React.useState([])

    React.useEffect(function()
    {
        async function fetchData()
        {
            //inside this function we will write the logic to get all the action Movies
            const output = await Axios.get(actionMovies)
            setActionMovies(output.data.results)
        }
        fetchData()
    }, [])
  return (
    <div>
      <h1>ACTION MOVIES</h1>
      <div className='alldiv'>
      {myactionMovies.map(function(i)
      {
       return(
        <div className='actionMoviesDiv'>
            <img src={myImageurl + i.backdrop_path} className="actionMovies"/>
        </div>
       ) 
      }
      )}

      </div>
    </div>
  )
}

export default ActionMovies

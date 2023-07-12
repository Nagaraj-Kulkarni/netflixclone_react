import React from 'react'
//rfce
import Axios from "axios"
import "./Movies.css"

const horrorMovies = "https://api.themoviedb.org/3/discover/movie/?api_key=c13d7a54c58a1d04cfa3938a830859c3&with_network=123"

const myImageurl = "https://image.tmdb.org/t/p/original"
// axios module --> useEffect() --> react

function HorrorMovies() {
    const[allMovies, setAllMovies] = React.useState([])

    React.useEffect(function()
    {
        async function fetchData()
        {
            // write the logic to fetch all the movies inforamtion
            const output = await Axios.get(horrorMovies)
            const result = output.data.results
            setAllMovies(result)
            
        }

        fetchData()
    }, [])
  return (
    <div>
        <h1>HORROR MOVIES</h1>
        <div className='alldiv'>
        {allMovies.map(function(i)
        {
            const imageName = i.backdrop_path
            return(<div className='horrorMoviesDiv'>
            <img src = {myImageurl + imageName} className="horrorMoviesimage"/>
                </div>)
        })}
        </div>
    </div>
  )
}

export default HorrorMovies

//axios module --> that will basically send a request from React appn to TMDB application
//npm install axios

//https://image.tmdb.org/t/p/original
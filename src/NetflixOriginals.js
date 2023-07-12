import React from 'react'
//rfce
import Axios from "axios"
import "./Movies.css"
import Youtube from "react-youtube"
import MovieTrailer from "movie-trailer" // will also help to get the video ID of a particular movie that has been clicked
import movieTrailer from 'movie-trailer'

const netflixOriginals = "https://api.themoviedb.org/3/discover/tv/?api_key=c13d7a54c58a1d04cfa3938a830859c3&with_network=123"

const myImageurl = "https://image.tmdb.org/t/p/original"
// axios module --> useEffect() --> react

function NetflixOriginals() {
    const[allMovies, setAllMovies] = React.useState([])

    const[id, setId] = React.useState("")

    React.useEffect(function()
    {
        async function fetchData()
        {
            // write the logic to fetch all the movies inforamtion
            const output = await Axios.get(netflixOriginals)
            const result = output.data.results
            setAllMovies(result)
            
        }

        fetchData()
    }, [])

    function playTheTrailer(data)
    {
        //console.log("Here is the Trailer")
        // we need to get the video ID of the movie we clicked
        // movieTrailer("Conjuring") --> Youtube --> and will try to the video id
        movieTrailer(data.name || "")

        .then( function(output) // output= "url of Trailer"
        {
            // new URL(output).search
            const search = new URLSearchParams(new URL(output).search)
            setId(search.get("v"))
        })
        .catch()

    }

    const myOptions = {
        height:"600px",
        width: "100%"
    }

  return (
    <div>
        <h1>NETFLIX ORIGINALS</h1>
        <div className='alldiv'>
        {allMovies.map(function(i)
        {
            const imageName = i.backdrop_path
            return(<div className='netflixoriginaldiv'>
            <img src = {myImageurl + imageName} className="netflixoriginalimage" onClick={function()
            {
                playTheTrailer(i)
            }}/>
                </div>)
        })}
        </div>
      

        {id && <Youtube videoId={id} opts={myOptions}/>}
    </div>
  )
}

export default NetflixOriginals

//axios module --> that will basically send a request from React appn to TMDB application
//npm install axios

//https://image.tmdb.org/t/p/original

// youtube application --> trailers of all the movies
// click on a particular image (movie Image) --> Movie Info --> Send it to youtube Application --> Responce / output as a Trailer
// react-youtube (Connect your react application with the youtube) module and 
//movie-trailer module (basically get the trailer of a particlular movie)

// npm install react-youtube
// nom install movie-trailer

// Every video in the youtube will have video ID
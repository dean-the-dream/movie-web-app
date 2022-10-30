import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { DetailsContainer, PicContainer, OverviewContainer, InfoContainer } from "./StyledMovieDetails";


const MovieDetailsPage = () => {
  const location = useLocation();


  
    const movie =location.state.movieData
    
  return (
    <DetailsContainer>
      <PicContainer>
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}` }alt="" />
        </PicContainer>
      <OverviewContainer>
        <h2> Overview </h2>
        <p>{movie.overview}</p>
      </OverviewContainer>
      <InfoContainer>
        <h2>Info</h2>
        {/* <p>Release Date:{date}</p> */}
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Total Views: {Math.round(movie.popularity)} </p>
      </InfoContainer>
    </DetailsContainer>
  )
}

export default MovieDetailsPage
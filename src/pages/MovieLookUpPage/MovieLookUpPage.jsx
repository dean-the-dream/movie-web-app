import {useState, useEffect} from 'react'
import { MovieContainer, SearchBar } from './StyledMovieLookup'
import MovieLink from '../../components/MovieLink/MovieLink'

const apiKey = process.env.REACT_KEY

const MovieLookUpPage = () => {
const [movieData, setMovieData] = useState([{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" }])

 const getData = async () => {
  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7fdf910f09b3519c67c56352ae592ab9`)
  .then(res => res.json())
  .then(data =>  setMovieData(data.results))
}

// useEffect(() => {
// getData()
// }, [])


  return (
    <>
    <SearchBar>
      <input type="text" />
      <button>Search</button>
    </SearchBar>
    <MovieContainer>
      {movieData.map(movie => <MovieLink movieData={movieData[0]}/>)
      }
    </MovieContainer>
    </>



)}

export default MovieLookUpPage
import {useState, useEffect, useContext} from 'react'
import { MovieContainer, SearchBar, PageContainer } from './StyledMovieLookup'
import MovieLink from '../../components/MovieLink/MovieLink'
import { AuthenticationContext } from '../../context/AuthenticationContext';

const API_KEY = process.env.REACT_APP_KEY;

const MovieLookUpPage = () => {
const [movieData, setMovieData] = useState([{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" },{backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg", title: "terrifier 2", overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum voluptates impedit illum minus natus sed cum iusto, unde vitae?" }])
const context = useContext(AuthenticationContext)
const [movieSearch, setMovieSearch] = useState("");

 const getData = async (keyword) => {
  if(!keyword){
  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data =>  setMovieData(data.results))
  } else {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`)
  .then(res => res.json())
  .then(data =>  setMovieData(data.results))
}}

const searchHandler = (e) => {
  e.preventDefault();
  console.log(movieSearch)
  getData(movieSearch)
  setMovieSearch("")
  console.log(context.currentUser)
}

// useEffect(() => {
// getData()
// }, [])


  return (
    <>
    <SearchBar>
      <input type="text" 
      value={movieSearch}
      onChange={(e) => setMovieSearch(e.target.value)}
      />
      <button
      onClick={(e) => searchHandler(e)}>Search</button>
    </SearchBar>
    <PageContainer>
    <MovieContainer>
      {movieData.map((movie, i) => <MovieLink movieData={movie} key={i}/>)
      }
    </MovieContainer>
    </PageContainer>
</>


)}

export default MovieLookUpPage
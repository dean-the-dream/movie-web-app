import './style.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthenticationContext } from '../../context/AuthenticationContext'

const MovieLink = ({movieData}) => {
const pic = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieData.backdrop_path}`
const title = movieData.title
const overview = movieData.overview
const navigate= useNavigate();
const location= useLocation();
const context = useContext(AuthenticationContext)
const [warning, setWarning] = useState(false);


const warnUser = () => {
  setWarning(true)
  setTimeout(() => setWarning(false), 3000)

}


  return (
    context.currentUser?
    <div className="movieLinkContainer" 
    datainfo={`Overview: ${overview}`}
    onClick={()=>navigate("/details",{ state: {movieData}})}
    >
      <img src={pic} alt="" />
      <div>{title}</div>
    </div>
    :
    <div className="movieLinkContainer" 
    datainfo={`Overview: ${overview}`}
    onClick={()=>warnUser()}
    >
      <img src={pic} alt="" />
     {!warning?<div>{title}</div>
     :<div style={{backgroundColor: "red", color: "white"}}>Login to see this content.</div>}
    </div>
   )
}

export default MovieLink
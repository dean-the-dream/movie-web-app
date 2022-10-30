import './style.scss'
import { useNavigate, useLocation } from 'react-router-dom'

const MovieLink = ({movieData}) => {
const pic = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieData.backdrop_path}`
const title = movieData.title
const overview = movieData.overview
const navigate= useNavigate();
const location= useLocation();

  return (
    <div className="movieLinkContainer" 
    datainfo={overview}
    onClick={()=>navigate("/details",{ state: {movieData}})}
    >
      <img src={pic} alt="" />
      <div>{title}</div>
    </div>
  //   <div dataInfo={overview}>
  //      <img src={pic} alt="" />
  //      <div>{title}</div>
  //   </div>
   )
}

export default MovieLink
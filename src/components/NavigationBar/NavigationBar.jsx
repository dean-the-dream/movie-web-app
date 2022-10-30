import {useContext} from 'react'
import { NavDiv } from './StyledNav'
import {signOut} from 'firebase/auth'
import { auth } from "../../firebase-config"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { useNavigate } from 'react-router-dom'
const NavigationBar = () => {
const context = useContext(AuthenticationContext)
const navigate = useNavigate()
const logout = async () => {
  await signOut(auth)
  navigate()
}

  return (
    
    <NavDiv>
      <div 
      onClick={() => navigate("/")}
      className="logo"
      >React Movie App</div>
      {context.currentUser&&<div className='userName'> Welcome, {context.currentUser.displayName}! Let Find something to watch. </div>}
      <div>{!context.currentUser?
        <><button
        onClick={() => navigate("/login")}>Login</button>
        <button
        onClick={()=> navigate("/signup")}
        >Register</button></>:
        <button
        onClick={logout}>Logout</button>}
      </div>
    </NavDiv>
    
    
  )
}

export default NavigationBar
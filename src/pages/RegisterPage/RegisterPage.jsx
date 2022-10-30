import { LoginPageContainer,PictureWrapper,FormWrapper } from "./StyledRegisterPage"
import { useState, useContext} from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase-config"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { useNavigate } from "react-router-dom"


const RegisterPage = () => {
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const context = useContext(AuthenticationContext);
const navigate = useNavigate()




const register = async (e) => {
  e.preventDefault();
  const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  context.updateCurrentUser(user)
  setRegisterPassword("");
  setRegisterEmail("");
  navigate("/")
}



  return (
    <LoginPageContainer>
      <PictureWrapper>
        <img src="https://images.unsplash.com/photo-1666942590959-bb49a90d3dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      </PictureWrapper>
      <FormWrapper>
        <form action="">
          <h1>Register</h1>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email address..." 
          value={registerEmail}
          onChange={(e)=> setRegisterEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password..." 
          value={registerPassword}
          onChange={(e)=> setRegisterPassword(e.target.value)}
          />
          <span>Forgot password?</span>
          <button 
          onClick={register}     
          >Create Account</button>
          <button>Continue with Google</button>
        </form>
      </FormWrapper>
    </LoginPageContainer>
  )
}

export default RegisterPage
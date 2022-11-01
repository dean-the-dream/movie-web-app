import { LoginPageContainer,PictureWrapper,FormWrapper, WarningSection } from "./StyledLoginPage"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase-config"
import { useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { useContext, useState } from "react"


const LoginPage = () => {
const context = useContext(AuthenticationContext);
const navigate = useNavigate();
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [warning, setWarning] = useState(false);


const warnUser = () => {
  setWarning(true)
  setTimeout(() => setWarning(false), 3000)

}


const login = async (e) => {
  e.preventDefault();
  try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    navigate("/")
  } catch (error) {
    if(String(error).includes("user-not-found") || String(error).includes("wrong-password")){
      warnUser()
      console.log(error)
    } else {
      console.log(error)
      console.log(error)
    }
  } finally{
  }
}







  return (
    <LoginPageContainer>
      <PictureWrapper>
        <img src="https://images.unsplash.com/photo-1666942590959-bb49a90d3dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      </PictureWrapper>
      <FormWrapper>
        <form action="">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email address..." 
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password" 
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          />
          <span>Forgot password?</span>
          <button
          onClick={login}>Login</button>
          <button>Continue with Google</button>
        </form>
        {warning&&<WarningSection>We couldn't find your account with the information provided.</WarningSection>}
      </FormWrapper>
    </LoginPageContainer>
  )
}

export default LoginPage
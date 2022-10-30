import { createContext,  useState } from "react"
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase-config";

export const AuthenticationContext = createContext();


const AuthenticationContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user)
        console.log(currentUser)
    })

 

    const updateCurrentUser = (user) => {
      // if(!isLoggedIn){
      //   setUser({})
      // } else {
      //   setUser(user)
      // }
      setCurrentUser(user)
    }

  return (
    <AuthenticationContext.Provider value={{updateCurrentUser, currentUser}}>
        {props.children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
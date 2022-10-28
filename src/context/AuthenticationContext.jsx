import { createContext,  useState } from "react"

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInOrOut = () => {
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <AuthenticationContext.Provider value={{isLoggedIn, logInOrOut}}>
        {props.children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
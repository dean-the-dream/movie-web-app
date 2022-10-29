import { LoginPageContainer,PictureWrapper,FormWrapper } from "./StyledLoginPage"

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <PictureWrapper>
        <img src="https://images.unsplash.com/photo-1666942590959-bb49a90d3dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      </PictureWrapper>
      <FormWrapper>
        <form action="">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email address..." />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password" />
          <span>Forgot password?</span>
          <button>Login</button>
          <button>Continue with Google</button>
        </form>
      </FormWrapper>
    </LoginPageContainer>
  )
}

export default LoginPage
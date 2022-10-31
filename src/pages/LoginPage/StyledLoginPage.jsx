import styled from "styled-components";

const LoginPageContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 100vh;
`
const PictureWrapper = styled.div`
img{
    height:100%;
    width: 100%;
}
`
const FormWrapper = styled.div`
background-color: lightgrey;
display: flex;
flex-direction: column;
align-items: center;


h1{
    font-size: 4rem;
    font-weight: lighter;
}

form{
display: flex;
flex-direction: column;
gap: 10px;
width: 70%;
font-size: 1.5rem;
}

button, input{
    font-size: 1rem;
    height: 2.5rem;
    b

}
`

const WarningSection =styled.div`
background-color: red;
color: white;
margin: 15px;
padding: 10px;
border-radius: 10px;
font-weight: bold;
`

export {LoginPageContainer, PictureWrapper, FormWrapper, WarningSection}
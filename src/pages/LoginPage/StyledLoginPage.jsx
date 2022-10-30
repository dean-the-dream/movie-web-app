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
}

button{
    
}
`

const WarningSection =styled.div`

`

export {LoginPageContainer, PictureWrapper, FormWrapper, WarningSection}
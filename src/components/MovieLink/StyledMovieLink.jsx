import styled from "styled-components";


const MovieCard = styled.div`
display: flex;
flex-direction: column;
img{
    height: 525px;
    margin: 0;
}

div{
height: 75px;
width: 100%;
background-color: skyblue;
margin: 0;
padding: 0;
}

&::after{
    content: attr(dataInfo);
}
`

export {MovieCard}
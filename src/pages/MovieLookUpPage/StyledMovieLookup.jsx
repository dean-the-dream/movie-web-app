import styled from "styled-components";

const MovieContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 10px
`
const SearchBar =styled.form`
display: flex;
background-color: lightgrey;
justify-content: center;
gap: 5px;
height: 1.5rem;
padding: 5px;
`

export {MovieContainer, SearchBar}
import styled from "styled-components";

const SearchBar =styled.form`
display: flex;
background-color: lightgrey;
justify-content: center;
gap: 5px;
height: 1.5rem;
padding: 5px;

`

const PageContainer =styled.div`
display: flex;
width: 100%;
dipslay: flex;
justify-content: center;
`
const MovieContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 20;
width: 1600px;
`



export {MovieContainer, SearchBar, PageContainer}
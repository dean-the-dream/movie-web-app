import styled from "styled-components";

const SearchBar =styled.form`
display: flex;
background-color: #8EC8E6;
justify-content: center;
gap: 5px;
height: 2rem;
padding: 5px;

`

const PageContainer =styled.div`
display: flex;
width: 100%;
dipslay: flex;
justify-content: center;
background-color: #023047;
`
const MovieContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 20;
width: 1600px;
`



export {MovieContainer, SearchBar, PageContainer}
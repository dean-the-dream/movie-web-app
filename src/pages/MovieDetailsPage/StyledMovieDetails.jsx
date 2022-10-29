import styled from "styled-components";

const DetailsContainer=styled.div`
display:grid;
grid-template-areas:
"picture overview"
"picture overview"
"picture info"

`

const PicContainer = styled.div`
grid-area: picture;
width: fit-content;
img{
    width: 400px;
}

`

const OverviewContainer = styled.div`
grid-area: overview;

`

const InfoContainer = styled.div`
grid-area: info;
`
export {DetailsContainer, PicContainer, OverviewContainer, InfoContainer}
import styled, {css} from "styled-components";

const NavDiv = styled.div`
    margin:0;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    button{
        height: 2rem;
        margin: 10px 20px;
    }
    .userName:hover{
        cursor: default
    }

    .logo:hover, button{
        cursor: pointer
    }
`

export {NavDiv}
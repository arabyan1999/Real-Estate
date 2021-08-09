import React from 'react'
import styled from "styled-components"
import DownloadCenter from '../../components/DownloadCenter'
import Nav from '../../components/Nav'
import background from "./images/background.png"
import {ReactComponent as Scrolling} from "./images/scrolling.svg"

function Header() {
    return (
        <StyledContainer className="App">
            <Nav />
            <DownloadCenter />
            <StyledMsg><Scrolling /><p>SCROLL DOWN TO EXLORE DOWNLOAD CENTER</p></StyledMsg>
        </StyledContainer>
    )
}

export default Header

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: 100% 100%;
  background-position: center;
  font-family: Nunito Sans;
  position: relative;
  background-attachment: fixed;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
`

const StyledMsg = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    left: 260px;
    bottom: 105px;
    p {
        margin: 0;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
        letter-spacing: 0.4;
    }
`
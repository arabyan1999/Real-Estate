/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { NavFixed } from '../../components/Nav'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import PropertyWebsitePage from './components/PropertyWebsitePage'
import GaleryPage from './components/GaleryPage'
import Videos from './components/Videos'
import InstagramVideo from './components/InstagramVideo'
import FAQ from './components/FAQ'

function Home() {
    let nav = document.querySelector(".nav")
    var rect = nav?.getBoundingClientRect()
    var handleScroll = () => {
        if (rect?.y <= 0) {
            nav?.classList.add("fixed")
        } else {
            nav?.classList.remove("fixed")
        }
        console.log("🚀 ~ file: Nav.jsx ~ line 51 ~ NavFixed ~ currentScroll", rect?.y);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [rect])
    return (
        <Container>
            <NavFixed withbackground />
            <StyledContainer>
                <Sidebar />
                <div>
                    <div>
                        <PropertyWebsitePage />
                        <GaleryPage />
                        <Videos />
                        <InstagramVideo />
                    </div>
                    <FAQ />
                </div>
            </StyledContainer>
        </Container>
    )
}

export default Home

const StyledContainer = styled.div`
    display: flex;
    scroll-behavior: smooth;
    @media (max-width: 920px) {
        flex-direction: column;
    }
`


const Container = styled.div`
    position: relative;
    scroll-behavior: smooth;
    .fixed {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
`

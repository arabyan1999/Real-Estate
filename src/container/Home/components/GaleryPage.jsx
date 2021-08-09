import React from 'react'
import { BlackButton, BorderedButton, Flex, Heading, HomeContainer, StyledFlex, StyledSubtitle, StyledUpdatedHeir, YellowButton } from './styled'
import styled from "styled-components"
import { images } from "./state"
import { Text } from "rebass"

function GaleryPage() {
    return (
        <HomeContainer id="gallery">
            <div style={{marginBottom:"40px"}}>
                <Flex margin="0 0 11px 0">
                    <Heading>gallery</Heading>
                    <StyledUpdatedHeir>UDPATED: 8/06/2021</StyledUpdatedHeir>
                </Flex>
            <StyledSubtitle>Quantity: 163 • Size: 1.39 GB</StyledSubtitle>
            </div>
            <StyledImgContainer>
                {
                    images.map((a,i)=>(
                        <StyledImg key={i} src={a.image} />
                    ))
                }
            </StyledImgContainer>
            <StyledFlex>
                <BorderedButton margin="0 20px 0 0"><Text margin="0 auto">CANCEL SELECTION</Text></BorderedButton>
                <BlackButton margin="0 20px 0 0"><Text margin="0 auto">SELECT ALL</Text></BlackButton>
                <YellowButton><Text>DOWNLOAD</Text></YellowButton>
            </StyledFlex>
            <Text display="flex" justifyContent="flex-end" marginBottom="15px"><StyledSubtitle>Selected 2 items • Size: 809 MB</StyledSubtitle></Text>
        </HomeContainer>
    )
}

export default GaleryPage

const StyledImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-height: 574px;
    overflow-y: auto;
    cursor: pointer;
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: #C6C6C6;
        opacity: 0.3;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #585252;
        opacity: 0.3;
        border-radius: 3px;
    }
    @media (max-width: 920px) {
        justify-content: center;
    }
`

const StyledImg = styled.img`
    width: 265px;
    height: 175px;
    margin: 0 13px 24px 0;
`

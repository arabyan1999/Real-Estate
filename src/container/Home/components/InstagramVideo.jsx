import React from 'react'
import { Flex, Heading2, HomeContainer, StyledButton, StyledFlex, StyledSubtitle, YellowButton } from './styled'
import { ReactComponent as Iphone } from "../images/Iphone.svg"
import styled from "styled-components"

function InstagramVideo() {
    return (
        <HomeContainer id="instagramvideo">
            <div style={{marginBottom:"51px"}}>
            <Flex justify="space-around">
                <StyledIphoneIcon />
                <div>
                    <StyledSubtitle>Size: 1.3 GB</StyledSubtitle>
                    <Heading2>Instagram Video</Heading2>
                    <StyledSubtitle>We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic Interiors Design that compliments your space We can work with both Empty and Furnished spaces</StyledSubtitle>
                    <StyledButton>Learn more</StyledButton>
                    <StyledFlex>
                        <YellowButton>DOWNLOAD VIDEO</YellowButton>
                    </StyledFlex>
                </div>
            </Flex>
            </div>
        </HomeContainer>
    )
}

export default InstagramVideo

const StyledIphoneIcon = styled(Iphone)`

`

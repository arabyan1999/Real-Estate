import React from 'react'
import { Flex, Heading, Heading2, HomeContainer, StyledButton, StyledFlex, StyledSubtitle, StyledUpdatedHeir, YellowButton } from './styled'
import styled from "styled-components"
import { Text } from "rebass"

function Videos() {
    return (
        <HomeContainer id="videos" padding="0 0 40px 0">
            <div style={{marginBottom:"40px"}}>
                <Flex margin="0 0 11px 0">
                    <Heading>VIDEO / 3D Matterport</Heading>
                    <StyledUpdatedHeir>UDPATED: 8/06/2021</StyledUpdatedHeir>
                </Flex>
                <StyledSubtitle>Quantity: 163 • Size: 1.39 GB</StyledSubtitle>
            </div>
            <StyledFlexDiv>
                <div>
                    <video width="430" height="230" controls style={{marginBottom:"25px"}}>
                        <source src="https://www.youtube.com/watch?v=naZAknwNgkY" type="video/mp4" />
                    </video>
                    <VideoSize>Size: 1.3 GB</VideoSize>
                    <Heading2>Branded Video</Heading2>
                    <StyledSubtitle>We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....</StyledSubtitle>
                    <StyledButton>Learn more</StyledButton>
                    <div style={{width:"100%"}}>
                        <YellowButton>DOWNLOAD VIDEO</YellowButton>
                    </div>
                </div>
                <div>
                    <video width="430" height="230" controls style={{marginBottom:"25px"}}>
                        <source src="https://www.youtube.com/watch?v=naZAknwNgkY" type="video/mp4" />
                    </video>
                    <VideoSize>Size: 1.3 GB</VideoSize>
                    <Heading2>Unbranded Video</Heading2>
                    <StyledSubtitle>We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....</StyledSubtitle>
                    <StyledButton>Learn more</StyledButton>
                    <div style={{width:"100%"}}>
                        <YellowButton>DOWNLOAD VIDEO</YellowButton>
                    </div>
                </div>
                <div>
                    <video width="430" height="230" controls style={{marginBottom:"25px"}}>
                        <source src="https://www.youtube.com/watch?v=naZAknwNgkY" type="video/mp4" />
                    </video>
                    <VideoSize>Size: 1.3 GB</VideoSize>
                    <Heading2>Explore 3D Area</Heading2>
                    <StyledSubtitle>We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....</StyledSubtitle>
                    <StyledButton>Learn more</StyledButton>
                    <StyledFlex>
                        <YellowButton margin="0 20px 0 0">
                            <Text>COPY LINK</Text>
                        </YellowButton>
                        <YellowButton><Text>EMBED CODE</Text></YellowButton>
                    </StyledFlex>
                </div>
            </StyledFlexDiv>
        </HomeContainer>
    )
}

export default Videos

const StyledFlexDiv = styled(Flex)`
    justify-content: space-between;
    @media (max-width: 920px) {
        flex-direction: column;
    }
`

const VideoSize = styled(StyledSubtitle)`
    color:rgba(0, 0, 0, 0.4);
    margin-bottom: 9px;
`

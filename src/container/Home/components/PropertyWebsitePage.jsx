import React from 'react'
import styled from "styled-components"
import { BorderedButton, Flex, Heading, Heading2, HomeContainer, StyledFlex, StyledSubtitle, YellowButton } from './styled'
import { Text } from "rebass"
import {ReactComponent as Devices} from "../images/Devices.svg"

function PropertyWebsitePage() {
    const Parts = (props) => {
        const { title, subtitle, text1, text2 } = props
        return (
            <div id="propertywebsite">
                <Heading2>{title}</Heading2>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
                <StyledFlex>
                    {text1 && <BorderedButton margin="0 20px 0 0"><Text margin="0 auto">{text1}</Text></BorderedButton>}
                    {text2 && <YellowButton><Text margin="0 auto">{text2}</Text></YellowButton>}
                </StyledFlex>
            </div>
        )
    }
    return (
        <HomeContainer>
            <Heading>property website</Heading>
            <Flex>
                <StyledImgDiv />
                <StyledRight>
                    <Parts title="Branded Website" subtitle="We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value." text1="COPY LINK" text2="GO TO WEBSITE" />
                    <Parts title="Unbranded Website" subtitle="We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value" text1="COPY LINK" text2="GO TO WEBSITE" />
                    <Parts title="Custom URL" subtitle="We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible.." text2="COPY LINK" />
                    <Parts title="Customize Website" subtitle="We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible.." text1="WATCH TUTORIAL" text2="GO TO EDITOR" />
                </StyledRight>
            </Flex>
        </HomeContainer>
    )
}

export default PropertyWebsitePage

const StyledImgDiv = styled(Devices)`
    width: 515px;
    height: 282px;
`

const StyledRight = styled.div`
    width: 100%;
    margin-left: 50px;
`

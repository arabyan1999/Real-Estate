import React from 'react'
import { ReactComponent as Layer } from "./images/Layer.svg"
import styled from "styled-components"
import Images from './Images'

function DownloadCenter() {
    return (
        <StyledHeader>
            <Layer />
            <StyledHeading>
                DOWNLOAD CENTER
            </StyledHeading>
            <StyledHeading2>8 TARLTON RD, TORONTO</StyledHeading2>
            <StyledP>AGENT: NAME SURNAME</StyledP>
            <StyledP>DATE OF SHOOT: 12/02/2021</StyledP>
            <Images />
        </StyledHeader>
    )
}

export default DownloadCenter

const StyledHeader = styled.div`
    line-height: 28px;
    position: absolute;
    left: 260px;
    top: 130px;
`

const StyledHeading = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
`

const StyledHeading2 = styled(StyledHeading)`
    font-size: 21px;
    margin: 0;
`

const StyledP = styled.p`
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
    color: #fff;
    margin: 0;
`

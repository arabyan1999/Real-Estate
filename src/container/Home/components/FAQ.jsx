import React from 'react'
import styled from "styled-components"
import { Heading, StyledSubtitle } from './styled'

function FAQ() {
    return (
        <StyledContainer>
            <Heading>Frequently Asked Questions</Heading>
            <FAQSubtitle>Need answers? Find them here</FAQSubtitle>
        </StyledContainer>
    )
}

export default FAQ

const StyledContainer = styled.div`
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 45px 59px 80px;
    box-sizing: border-box;
`

const FAQSubtitle = styled(StyledSubtitle)`
    max-width: fit-content;
    margin: 10px auto 86px;
`

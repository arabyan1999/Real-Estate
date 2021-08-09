import React from 'react'
import {ReactComponent as Group1} from "./images/Group1.svg"
import {ReactComponent as Group2} from "./images/Group2.svg"
import { ReactComponent as Group3 } from "./images/Group3.svg"
import styled from "styled-components"

function Images() {
    return (
        <StyledImageContainer>
        <Group1/>
        <Group2/>
        <Group3/>
    </StyledImageContainer>
    )
}

export default Images

const StyledImageContainer = styled.div`
    display: flex;
    margin-top: 10px;
    svg {
        margin-right: 12px;
    }
`

import React from 'react'
import styled from "styled-components"
import Images from '../../../components/Images'
import Category from './Category'
import { state } from "./state"
import { StyledUpdated } from './styled'

function Sidebar() {
    return (
        <StyledSidebar>
            <StyledUpdated>UDPATED: 9/06/2021</StyledUpdated>
            <StyledHeader>
                <Title>315 St Germain Ave</Title>
                <Subtitle>TORONTO, ON M5M 1W4</Subtitle>
                <StyledP>AGENT: <span>NAME SURNAME</span></StyledP>
                <StyledP>DATE OF SHOOT: <span> 12/02/2021</span></StyledP>
                <StyledP>Delivery date: <span>18/02/2021</span></StyledP>
                <Images />
            </StyledHeader>
            {
                state.map((a, i) => (
                    <Category key={i} href={"#"+a.id} icon={a.icon} title={a.title} />
                ))
            }
        </StyledSidebar>
    )
}

export default Sidebar

const StyledSidebar = styled.div`
    width: 303px;
    height: initital;
    box-shadow: 0px 0px 25px rgba(130, 130, 130, 0.2);
    border-radius: 0px 5px 5px 0px;
    margin-top: 55px;
    cursor: pointer;
    position: relative;
    background: #fff;
    @media (max-width: 920px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: o;
    }
`

const StyledHeader = styled.div`
    padding: 20px 15px 30px;
    border-bottom: 1px solid #E7E7E7;
    @media (max-width: 920px) {
        display: none;
    }
`

const Title = styled.h2`
    color: #1A1A1A;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 0;
`

const Subtitle = styled(Title)`
    color: rgba(26, 26, 26, 0.4);
    font-weight: 600;
    font-size: 14px;
`

const StyledP = styled(Title)`
    font-size: 14px;
    span {
        font-weight: 400;
    }
`

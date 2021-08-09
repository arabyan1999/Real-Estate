import React from 'react'
import styled from "styled-components"

function Category(props) {
    const { icon, title, href } = props;

    return (
        <StyledAnchor href={href}>
        <StyledContainer>
            <StyledIcon>
                {icon}
            </StyledIcon>
            <StyledTitle>{title}</StyledTitle>
        </StyledContainer>
        </StyledAnchor>
    )
}

export default Category

const StyledAnchor = styled.a`
    scroll-behavior: smooth;
    text-decoration: none;
`

const StyledContainer = styled.div`
    scroll-behavior: smooth;
    text-align: center;
    padding: 29px;
    position: relative;
    :hover {
        background: #F4F4F4;
        ::after {
            background: transparent;
        }
    }
    :active {
        @media (min-width: 921px) {
            border-left: 5px solid #FFDB11;
        }
    }
    ::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 162px;
        background: #D2D2D2;
        left: calc((303px - 162px)/2);
        bottom: 0;
        @media (max-width: 920px) {
            display: none;
        }
    }
    @media (max-width: 920px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const StyledTitle = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #1A1A1A;
    margin: 15px 0 0 0;
`

const StyledIcon = styled.div`
    @media (max-width: 920px) {
        width: 68px;
        height: 68px;
        border:1px solid #E7E7E7;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 10px;
    }
`

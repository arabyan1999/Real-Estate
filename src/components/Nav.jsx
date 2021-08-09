import React, {useState} from 'react'
import styled, {css} from "styled-components"
import { ReactComponent as Frame } from "./images/Frame.svg"
import { ReactComponent as FrameDark } from "./images/FrameDark.svg"
import { ReactComponent as ArrowDown } from "./images/arrowDown.svg"
import phone from "./images/phone.svg"
import cart from "./images/cart.svg"
import useScrollingElement from './hooks/useScrollingElement'

function Nav({withbackground}) {
  const [trigger, setTrigger] = useState(false);
  const openNav = () => {
    setTrigger(prev => !prev);
  };
  useScrollingElement(trigger)
    return (
        <StyledNav withbackground={withbackground}>
            {withbackground ? <FrameDark /> : <Frame />}
            <StyledDiv className={`${trigger ? 'active' : ''}`}>
            <Container>
                <StyledLink to="#" withbackground={withbackground} onClick={() => setTrigger(false)}>
                    PRICING
                </StyledLink>
                <StyledLink to="#" withbackground={withbackground} onClick={() => setTrigger(false)}>
                    ORDER A TOUR <ArrowDown style={{marginLeft:"2px"}} />
                </StyledLink>
                <StyledLink to="#" withbackground={withbackground} onClick={() => setTrigger(false)}>
                    SERVICES
                </StyledLink>
            </Container>
            <Container>
                <StyledP>
                    <StyledImage src={phone} />
                    (905) 766 9009
                </StyledP>
                <CartButton withbackground={withbackground} onClick={() => setTrigger(false)}>
                    <StyledImage src={cart} />
                    Cart (0)
                </CartButton>
                <SignUpButton onClick={() => setTrigger(false)}>
                Sign In / Sign Up
                </SignUpButton>
            </Container>
            </StyledDiv>
            <StyledBurgerMenuWrapper trigger={trigger}  onClick={() => openNav()}>
                <span/>
                <span/>
                <span/>
            </StyledBurgerMenuWrapper>
        </StyledNav>
    )
}

export default Nav

export function NavFixed({withbackground}) {
    return (
        <StyledNavSecond className="nav" withbackground={withbackground}>
            {withbackground ? <FrameDark /> : <Frame />}
            <Container>
                <StyledLink href="#" withbackground={withbackground}>
                    PRICING
                </StyledLink>
                <StyledLink href="#" withbackground={withbackground}>
                    ORDER A TOUR <ArrowDown style={{marginLeft:"2px"}} />
                </StyledLink>
                <StyledLink to="#" withbackground={withbackground}>
                    SERVICES
                </StyledLink>
            </Container>
            <Container>
                <StyledP>
                    <StyledImage src={phone} />
                    (905) 766 9009
                </StyledP>
                <CartButton withbackground={withbackground}>
                    <StyledImage src={cart} />
                    Cart (0)
                </CartButton>
                <SignUpButton>
                Sign In / Sign Up
                </SignUpButton>
            </Container>
        </StyledNavSecond>
    )
}

const StyledDiv = styled.div`
    @media (max-width: 920px) {
        position: fixed;
        top: 60px;
        left: 150%;
        right: 0;
        flex-direction: column;
        bottom: 0;
        transition: all 0.5s ease;
        z-index: 100;
        opacity: 0.98;
        &.active {
            left: 0; 
        }
        @media (max-width: 920px) {
            background: #fff;
            color: #000;
        }
    }
`

const StyledNav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: ${({ withbackground }) => withbackground && "#FFFFFF"};
    color: ${({ withbackground }) => !withbackground ? "#fff" : "#000"};
    box-shadow: ${({ withbackground }) => withbackground && "0px 2px 9px rgba(0, 0, 0, 0.25)"};
    padding: 20px 40px 11px;
    box-sizing: border-box;
    z-index: 999;
    position: fixed;
    @media (max-width: 920px) {
        background: #fff;
        color: ${({ withbackground }) => withbackground ? "#fff" : "#000"};
        position: fixed;
    }
`

const StyledNavSecond = styled(StyledNav)`
    position: static;
    z-index: 99;
    @media (max-width: 920px) {
        display: none;
    }
    /* .fixed {
        position: fixed;
    } */
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 920px) {
        flex-direction: column;
        color: #000;
    }
`

const StyledLink = styled.a`
    font-size: 13px;
    text-decoration: none;
    :not(:last-of-type) {
        margin-right: 49px;
        @media (max-width: 920px) {
            margin-right: 0;
        }
    }
    @media (max-width: 920px) {
        margin-bottom: 20px;
        color: #000;
    }
`

const StyledImage = styled.img`
    margin-right: 10px;
`

const StyledP = styled.p`
    font-size: 11px;
    margin-right: 20px;
    @media (max-width: 920px) {
        margin-right: 0;
        margin-bottom: 20px;
        color: #000;
    }
`

const CartButton = styled.button`
 background: transparent;
 border: none;
 cursor: pointer;
 margin-right: 20px;
 color: ${({ withbackground }) => !withbackground ? "#fff" : "#000"};
 @media (max-width: 920px) {
     color: #000;
     margin-right: 0;
     margin-bottom: 20px;
 }
`

const SignUpButton = styled(CartButton)`
    background: #FFDB11;
    font-size: 13px;
    color: #1A1A1A;
    padding: 8px 15px;
    margin: 0;
`
const StyledBurgerMenuWrapper = styled.div`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 921px) {
    display: none;
  }
  position: relative;
  float: right;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 40;
  span{
    display: block;
    position: absolute;
    height: 2px;
    width: 16px;
    background: #000;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    }
    ${({trigger}) => trigger ?
        css`
            span:nth-child(1) {
            top: 7px;
            transform: rotate(135deg);
            }
            span:nth-child(2) {
            opacity: 0;
            }
            span:nth-child(3) {
            top: 7px;
            transform: rotate(-135deg);
        }
    ` 
    : 
        css`
            span:nth-child(1) {
            top: 0px;
            }
            span:nth-child(2) {
            top: 6px;
            }
            span:nth-child(3) {
            top: 12px;
        }
  `};
`
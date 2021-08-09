import styled from "styled-components";

const Heading = styled.h1`
    font-size: 25px;
    letter-spacing: 0.05em;
    line-height: 34px;
    text-transform: uppercase;
    margin: 0;
    font-weight: 800;
`

const Heading2 = styled(Heading)`
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 9px;
    text-transform: none;
    color: #393535;
`

const StyledUpdated = styled.div`
    background: #F33C3C;
    padding: 8px 20px;
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    color: #fff;
    border-radius: 4px;
    position: absolute;
    top: -20px;
    left: calc((303px - 175px)/2);
    @media (max-width: 920px) {
        display: none;
    }
`

const StyledUpdatedHeir = styled(StyledUpdated)`
    position: static;
    margin-left: 36px;
`

const StyledSubtitle = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: #393535;
    margin: 0;
    max-width: 490px;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ margin }) => margin};
    justify-content: ${({ justify }) => justify};
    @media (max-width: 920px) {
        flex-direction: column;
    }
`

const BorderedButton = styled.button`
    border: 1.5px solid #000;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    margin: ${({ margin }) => margin && margin};
`

const YellowButton = styled(BorderedButton)`
    background: #FFDB11;
    border: none;
`

const BlackButton = styled(YellowButton)`
    background: #000;
    color: #fff;
`

const HomeContainer = styled.div`
    width: 100%;
    max-width: 1394px;
    border-bottom: 2px solid #E7E7E7;
    height: fit-content;
    margin: 30px 40px 0;
    padding: ${({ padding }) => padding};
    @media (max-width: 920px) {
        margin: 30px auto 0;
    }
`

const StyledFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
    @media (max-width: 920px) {
        justify-content: flex-start;
    }
`

const StyledButton = styled.button`
    border: none;
    background: none;
    text-decoration: underline;
    margin-bottom: 15px;
    padding: 0;
`

export {
    Heading,
    StyledUpdated,
    StyledSubtitle,
    StyledUpdatedHeir,
    Flex,
    Heading2,
    BorderedButton,
    YellowButton,
    HomeContainer,
    StyledFlex,
    BlackButton,
    StyledButton,
}
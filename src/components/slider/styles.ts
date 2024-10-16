import styled from "styled-components";
import { Swiper } from "swiper/react";
import { device } from '../../const';

export const StyledMain = styled.div`
    min-height: 100%;
    display: flex;
    overflow: hidden;
`
export const StyledGlobalWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`

export const StyledPageContent = styled.div`
    padding-top: 59px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 37px;
    align-items: center;
    min-height: 100%;

    @media ${device.tablet} { 
        display: block;
        border-left: 1px solid rgba(66, 86, 122, 0.1);
        border-right: 1px solid rgba(66, 86, 122, 0.1);
        position: relative;
        padding-top: 215px;

        &::before,
        &::after {
            content: '';
            display: block;
            position: absolute;      
            background-color: rgba(66, 86, 122, 0.1);  
        }

        &::before {
            top: 0;
            height: 100%;
            width: 1px;
            left: 50%;
            transform: translateX(-50%);
        }
        &::after {
            top: 480px;
            width: 100%;
            height: 1px;
            left: 0%;            
        }
    }
`

export const StyledPageTitle = styled.h1`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #42567A;
    max-width: 167px;
    margin-bottom: 53px;
    grid-column: 2 span;
    order: 1;    
    
    @media ${device.tablet} { 
        position: absolute;
        font-size: 56px;
        line-height: 120%;
        left: 0;
        top: 100px;
        max-width: 350px;
        padding-left: 78px;
        margin-bottom: 0;
        order: unset;

        &::before {
            content: '';
            display: block;
            position: absolute;
            height: 90%;
            width: 5px;
            background-image: linear-gradient(#3877EE, #EF5DA8);
            top: 52%;
            left: 0;
            transform: translateY(-50%);        
        }
    }
`

export const StyledPageYear = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #42567A;
    display: flex;
    column-gap: 30px;
    order: 2;
    grid-column: 2 span;
    margin-bottom: 62px;

    @media ${device.tablet} { 
        position: absolute;
        left: 50%;
        top: 400px;
        transform: translate(-50%, 0%);
        font-size: 140px;
        line-height: 60px;
        column-gap: 100px;
        order: unset;
        margin-bottom: 0px;
    }

     @media ${device.laptop} { 
        font-size: 200px;
        line-height: 160px;
        column-gap: 100px;
     }
`

export const StyledPageYearStart = styled.div`
    color: #3877EE;

    @media ${device.tablet} { 
        color: #5D5FEF;
    }
`
export const StyledPageYearEnd = styled.div`
    color: #F178B6;

    @media ${device.tablet} { 
        color: #EF5DA8;
    }
`
export const StyledPageControls = styled.div`
    order: 4;
    grid-column: 1 span;

    
    @media ${device.tablet} { 
        padding: 0 80px;
        margin-top: -49px;
        order: unset;
    }
`

export const StyledPageControlsFraction = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #42567A;
    margin-bottom: 7px;    
    
    @media ${device.tablet} { 
        margin-bottom: 20px;
    }
`

export const StyledPageControlsButtons = styled.div`
    display: flex;
    column-gap: 8px;    
    
    @media ${device.tablet} { 
        column-gap: 20px;
        margin-bottom: 58px;
    }
`
export const StyledPageControlsButton = styled.button`
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    border: 1px solid rgba(66, 86, 122, 0.5);
    border-radius: 50%;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    opacity: 1;
    transition: 0.3s;

    @media ${device.tablet} { 
        width: 50px;
        height: 50px;
    }

    &::before {
        content: '';
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 6px;
        height: 10px;    
        
        @media ${device.tablet} { 
            width: 10px;
            height: 14px;
        }
    }
`;

export const StyledPageControlsButtonPrev = styled(StyledPageControlsButton)`
    &::before {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.49988 0.750001L2.24988 7L8.49988 13.25' stroke='%2342567A' stroke-width='2'/%3E%3C/svg%3E%0A");
    }
`
export const StyledPageControlsButtonNext = styled(StyledPageControlsButton)`
    &::before {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.50012 0.750001L7.75012 7L1.50012 13.25' stroke='%2342567A' stroke-width='2'/%3E%3C/svg%3E%0A");
    }
`

export const StyledPagePaginationBlock = styled.div`
    grid-column: 1 span;
    order: 5;
    margin-top: 6px;    
    
    @media ${device.tablet} { 
        height: 530px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 530px;
        margin: 0 auto;     
        order: unset;        
    }
`
export const StyledPagePagination = styled.div`
    display: flex;
    column-gap: 10px;
    counter-reset: num;

    .swiper-pagination-bullet {
        display: flex;
        align-items: center;
        justify-content: center; 

        &:hover,
        &.swiper-pagination-bullet-active{
            span {
                background: #42567A;

                @media ${device.tablet} { 
                    width: 56px;
                    height: 56px;
                    border: 1px solid rgba(48, 62, 88, 0.5);
                    background: #F4F5F9;
                }

                &::before,
                &::after {
                    opacity: 1;
                }
            }            
        }

        @media ${device.tablet} { 
            width: 56px;
            height: 56px;
        }

        span {
            flex-shrink: 0;
            width: 6px;
            height: 6px;
            display: block;
            background-color: rgba(66, 86, 122, 0.4);
            border-radius: 50%;
            color: #42567A;
            transition: width 0.3s, height 0.3s, background-color 0.3s;  

            @media ${device.tablet} { 
                background-color: #42567A;

                &::after {
                    position: absolute;
                    top: 50%;
                    left: 100%;
                    margin-left: 26px;
                    transform: translate(0%, -50%);
                    opacity: 0;
                    font-family: 'PT Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;
                    color: #42567A;
                    content: attr(data-title);
                    transition: 0.3s;
                } 

                &::before {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    content: counter(num);
                    counter-increment: num;
                    transition: 0.3s;
                }           
  
            }
        }
    }

    .swiper-pagination-bullet-active span {
        background: #42567A;
    }
`

export const StyledPagePaginationLayer = styled.div`
    position: relative;
    width: 100%;
`
export const StyledPagePaginationSvg = styled.svg`
    display: none;

    @media ${device.tablet} { 
        display: block;
        height: 530px;
        overflow: visible;
        width: 530px;
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`
export const StyledPagePaginationCircle = styled.circle`
    fill: none;
    stroke:rgba(66, 86, 122, 0.2);
    stroke-width: 1;
    stroke-miterlimit:1;
`

export const StyledSwiper = styled(Swiper)`
    grid-column: 2 span;
    order: 3;
    max-width: 100%;
    border-top: 1px solid #C7CDD9;
    padding-top: 19px !important;
    margin-bottom: 95px;

    @media ${device.tablet} { 
        order: unset;
        padding: 0 !important;
        margin-bottom: 0;
        border-top: 0;
    }

    & > .swiper-wrapper > .swiper-slide:not(.swiper-slide-visible.swiper-slide-fully-visible) {
        opacity: 0 !important;
    }

    & > .swiper-wrapper > .swiper-slide.swiper-slide-visible.swiper-slide-fully-visible {
        opacity: 1 !important;
    }

`

export const StyledSlideSwiper = styled(Swiper)`    
    .swiper-button-next,
    .swiper-button-prev{
        display: none;
    }
    @media ${device.tablet} { 
        padding: 0 100px 0 80px;
        
        .swiper-button-next,
        .swiper-button-prev{
            width: 40px;
            height: 40px;
            background: #FFFFFF;
            border-radius: 50%;
            box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 40px;
            z-index: 1;

            &::before{
                content: '';
                flex-shrink: 0;
                display: block; 
                background-image: url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L1 11' stroke='%233877EE' stroke-width='2'/%3E%3C/svg%3E%0A");               
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 8px;
                height: 12px;  
            }
        }

        .swiper-button-next{
            right: 20px;
        }
        .swiper-button-prev{
            left: 20px;
            
            &::before{
                transform: rotate(180deg);
            }
        }
        .swiper-button-disabled{
            opacity: 0;
        }
    }
`

export const StyledSlideYear = styled.div`    
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-transform: uppercase;
    color: #3877EE;
    margin-bottom: 15px;
    
    @media ${device.tablet} { 
        font-size: 25px;
        margin-bottom: 15px;
    }
`

export const StyledSlideText = styled.div`    
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #42567A;
    @media ${device.tablet} { 
        font-size: 20px;
        line-height: 30px;
    }
`

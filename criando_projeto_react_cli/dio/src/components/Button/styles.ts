import styled, { css } from "styled-components";
import { IbuttonStyled } from "./types";

export const ButtonContainer = styled.button<IbuttonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;

    &:hover {

        opacity: 0.5;
        cursor: pointer;
    }

    
    ${({variant}) => variant !== "primary" && css`
        height: 30px;
        max-width: 275px;
        width: 100%;

        background: #E4105D;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::affter {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100%  + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;

        }
    `}
` 
import styled from "styled-components";
import breakpoints from "../../config/breakpoint";

const { md } = breakpoints;

export const Title = styled.h2`
    font-size: 6rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.color};

    @media only screen and (${md.down}) {
        font-size: 3rem;
    }
`;

export * from "./Button";

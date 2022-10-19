import { forwardRef } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
    position: relative;
    border: ${(props) => `1px solid ${props.theme.color}`};
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    display: inline-block;
    text-align: center;
    text-transform: uppercase;

    i {
        position: absolute;
        margin-left: 1rem;
        color: ${(props) => props.theme.color};
    }
`;

const Button = forwardRef(({ onClick, href, children }, ref) => {
    return (
        <StyledButton href={href} onClick={onClick} ref={ref}>
            {children} <i className="fa-solid fa-arrow-right"></i>
        </StyledButton>
    );
});

Button.displayName = "Button";

export { Button };

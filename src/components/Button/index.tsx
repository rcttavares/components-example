import React from 'react';
import styled from 'styled-components';

const Button: React.FC = () => {
    return (
        <Container>
            Acessar
        </Container>
    )
}

const Container = styled.button`
    background: #ff9000;
    border-radius: 10px;
    border: none;
    padding: 0 16px;
    height: 56px;
    width: 100%;
    color: #312e38;
    font-weight: bold;
    font-size: 18px;
    margin-top: 16px;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
        background: #ff9045;
    }
`;

export default Button;

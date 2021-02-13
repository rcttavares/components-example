import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
            color: #fff;
        }

        a {
            color: #f4ede8;
            text-decoration: none;
            margin-top: 24px;
            display: block;
            transition: color 0.2s;
        }
    }
`;

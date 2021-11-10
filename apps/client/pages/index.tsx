import styled from '@emotion/styled';
import { configureStore } from '@reduxjs/toolkit';

const StyledPage = styled.div`
    text-align: center;
    background-color: #eff9ed;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 15px 0;

    h2 {
        font-size: 30px;
    }

    p {
        font-size: 22px;
    }

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

type Props = {
    title: string;
    description: string;
};

const configComponent: Props = {
    title: 'The Nx',
    description: 'Thank you for using and showing some ♥ for Nx.',
};

export function IndexPage() {
    const { title, description } = configComponent;
    return (
        <StyledPage>
            <h2>{title}</h2>
            <p>{description}</p>
        </StyledPage>
    );
}

export default IndexPage;

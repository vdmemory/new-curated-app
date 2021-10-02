import styled from '@emotion/styled';
import { configureStore } from '@reduxjs/toolkit';

const StyledPage = styled.div`
    .page {
        background-color: wheat;
    }
    .title-page {
        color: blueviolet;
    }
    background-color: #9bc595;
`;

type Props = {
    title: string;
    description: string;
    currStep?: number;
};

const configComponent: Props = {
    title: 'The Nx',
    description: 'Thank you for using and showing some ♥ for Nx.',
};

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.@emotion/styled file.
     */

    const { title, description } = configComponent;
    return (
        <StyledPage className="page">
            <h2 className="title-page">{title}</h2>
            <p className="page">{description}</p>
        </StyledPage>
    );
}

export default Index;

import styled from '@emotion/styled';
import { configureStore } from '@reduxjs/toolkit';

import { SharedUiComponents } from '@new-curated-app/shared/ui-components';

// const StyledPage = styled.div`
//     .page {
//         background-color: wheat;
//     }
//     .title-page {
//         color: blueviolet;
//     }
//     background-color: #9bc595;
// `;

type Props = {
    title: string;
    description: string;
    currStep?: number;
};

type List = {
    name: string;
    id: number;
}[];

const configComponent: Props = {
    title: 'The Nx',
    description: 'Thank you for using and showing some ♥ for Nx.',
};

const lists: List = [
    {
        name: 'react',
        id: 1,
    },
    { name: 'redux', id: 2 },
    {
        name: 'typescript',
        id: 3,
    },
    { name: 'next', id: 4 },
];

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.@emotion/styled file.
     */

    const { title, description } = configComponent;
    return (
        // <StyledPage>
        <>
            <SharedUiComponents />
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {lists.map(({ name, id }): JSX.Element => {
                    return <li key={id}>{name}</li>;
                })}
            </ul>
        </>
        // </StyledPage>
    );
}

export default Index;

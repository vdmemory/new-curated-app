import styled from '@emotion/styled';
import Head from 'next/head';

import Nav from './nav';

const StyledLayout = styled.div`
    color: #33191e;
    padding: 0 15px;
`;

export function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Welcome to client!</title>
                <meta
                    key="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <StyledLayout>
                <Nav />
                <main>{children}</main>
            </StyledLayout>
        </>
    );
}

export default Layout;

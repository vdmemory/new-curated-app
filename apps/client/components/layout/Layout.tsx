import styled from '@emotion/styled';
import Head from 'next/head';

import Nav from './Nav';

const StyledLayout = styled.div`
    color: #33191e;
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

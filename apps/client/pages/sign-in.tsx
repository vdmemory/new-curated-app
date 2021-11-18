import styled from '@emotion/styled';
import Head from 'next/head';

import SingIn from '../components/auth/SingIn';

/* eslint-disable-next-line */
export interface SingInProps {}

const StyledSingIn = styled.div`
    color: #33191e;
    text-align: center;

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

export default function SignUpPage(props: SingInProps) {
    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <StyledSingIn>
                <SingIn />
            </StyledSingIn>
        </>
    );
}

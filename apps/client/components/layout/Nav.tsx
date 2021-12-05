import styled from '@emotion/styled';
import Link from 'next/link';

import { HOME, SINGIN } from '../../routes';

/* eslint-disable-next-line */
export interface NavProps {}

const StyledNav = styled.div`
    color: #999999;
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-transform: uppercase;
    border-bottom: 1px solid lightgrey;

    a {
        padding: 5px;
        margin: 0 5px;
        text-decoration: none;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size 0.3s;

        :hover {
            color: brown;
            background-size: 100% 2px;
        }
    }
`;

export default function Nav(props: NavProps) {
    return (
        <StyledNav>
            <Link passHref href={HOME}>
                home
            </Link>
            <Link passHref href={SINGIN}>
                sign-in
            </Link>
        </StyledNav>
    );
}

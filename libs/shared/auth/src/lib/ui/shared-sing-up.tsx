import styled from '@emotion/styled';
import { useCallback } from 'react';
import { Auth } from '../..';

/* eslint-disable-next-line */
export interface SharedSingUpProps {}

const StyledSingUp = styled.div`
    color: #075237;
    display: flex;
    justify-content: center;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: #eff9ed;
        padding: 20px;

        label,
        input {
            margin-bottom: 10px;
        }

        input,
        button {
            height: auto;
            line-height: 2;
            padding: 0 10px;
        }

        button {
            width: 100%;
        }
    }
`;

export function SharedSingUp(props: SharedSingUpProps) {
    const onSubmit = useCallback(
        async e => {
            e.preventDefault();
            try {
                console.log('hello');
                // setIsLoading(true);
                // const response = await fetcher('/api/users', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({
                //         email: emailRef.current.value,
                //         name: nameRef.current.value,
                //         password: passwordRef.current.value,
                //         username: usernameRef.current.value,
                //     }),
                // });
                // mutate({ user: response.user }, false);
                // toast.success('Your account has been created');
                // router.replace('/');
            } catch (e) {
                // toast.error(e.message);
            } finally {
                // setIsLoading(false);
            }
        },
        [],
        // [mutate, router],
    );

    return (
        <StyledSingUp>
            <form onSubmit={onSubmit}>
                <Auth/>
                <label>Your Registration Details</label>
                <input
                    type="email"
                    id="email"
                    title="Contact's email (format: xxx@xxx.xxx)"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    id="psw"
                    name="psw"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                    placeholder="Password"
                />
                <button>Sing Up</button>
            </form>
        </StyledSingUp>
    );
}

export default SharedSingUp;

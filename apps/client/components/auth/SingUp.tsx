import styled from '@emotion/styled';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { getUser } from './store/slice';

/* eslint-disable-next-line */
export interface SingUpProps {}

type FormData = {
    email: string;
    password: string;
};

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
        span {
            color: red;
            font-size: 12px;
            margin-top: -7px;
            margin-bottom: 10px;
            width: 100%;
            max-width: 190px;
            text-align: left;
        }
    }
`;

function SingUp(props: SingUpProps) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    console.log(state);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password);
    });

    return (
        <StyledSingUp>
            <form onSubmit={onSubmit}>
                <label>Your Registration Details</label>

                <input
                    {...register('email', {
                        required: true,
                        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    })}
                    type="email"
                    placeholder="Email Address"
                />
                {errors.email?.type === 'pattern' && (
                    <span>{`Contact's email (format: xxx@xxx.xxx)`}</span>
                )}

                <input
                    {...register('password', {
                        required: true,
                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    })}
                    type="password"
                    placeholder="Password"
                />
                {errors.password?.type === 'pattern' && (
                    <span>
                        Must contain at least one number and one uppercase and
                        lowercase letter, and at least 8 or more characters
                    </span>
                )}

                <button>Sing Up</button>
            </form>
        </StyledSingUp>
    );
}

export default SingUp;

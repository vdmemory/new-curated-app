import styled from '@emotion/styled';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createSessionRequest } from './store/slice';
import { FormData } from '../../api/auth';

const pass = 'E4YE!mxFaFAADDY';
const name = 'vdmemory';

/* eslint-disable-next-line */
export interface SignInProps {}

const StyledSignIn = styled.div`
    color: #075237;
    display: flex;
    justify-content: center;
    margin-top: 20px;

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

function SignIn(props: SignInProps) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    console.log(state);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit(values => {
        dispatch(createSessionRequest(values));
    });

    return (
        <StyledSignIn>
            <form onSubmit={onSubmit}>
                <label>Your Registration Details</label>

                <input
                    {...register('userName', {
                        required: true,
                    })}
                    type="text"
                    placeholder="User Name"
                />
                {errors.userName?.type === 'pattern' && (
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

                <button>Sign In</button>
            </form>
        </StyledSignIn>
    );
}

export default SignIn;

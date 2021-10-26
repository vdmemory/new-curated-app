import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedUiComponentsProps {}

const StyledSharedUiComponents = styled.div`
    color: pink;
    background-color: blue;
`;

export function SharedUiComponents(props: SharedUiComponentsProps) {
    return (
        <StyledSharedUiComponents>
            <h1>Welcome to SharedUiComponents!</h1>
            <button onClick={() => console.log('hello world')}>Click!</button>
        </StyledSharedUiComponents>
    );
}

export default SharedUiComponents;

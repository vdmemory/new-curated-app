import styled from '@emotion/styled';
import { TestingGreeter } from '@new-curated-app/testing/greeter';

const StyledPage = styled.div`
    .page {
        background-color: wheat;
    }
    background-color: #2d5327;
`;

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.@emotion/styled file.
     */
    return (
        <StyledPage className="page">
            <TestingGreeter title="Welcome to TestingGreeter!" />
            <p className="page">
                Thank you for using and showing some ♥ for Nx.
            </p>
        </StyledPage>
    );
}

export default Index;

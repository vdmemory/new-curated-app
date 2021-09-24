import styled from '@emotion/styled';

const StyledPage = styled.div`
    .page {
        background-color: wheat;
    }
    background-color: red;
`;

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.@emotion/styled file.
     */
    return (
        <StyledPage className="page">
            <p className="page">
                Thank you for using and showing some ♥ for Nx.
            </p>
        </StyledPage>
    );
}

export default Index;

import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import ErrorLogo from '../../assets/404.svg';
import colors from '../../utils/style/colors';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 3rem;
    margin: 3rem;
    gap: 1rem;
    background-color: ${colors.backgroundLight};
    border-radius: 1rem;
`;

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <StyledDisplay id="error-page">
            <h1>Oups...</h1>
            <img src={ErrorLogo} alt="error-logo" height="300px"></img>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Il semblerait qu'il y ait un problème
            </p>
        </StyledDisplay>
    );
}

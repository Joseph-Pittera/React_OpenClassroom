import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { useFetch, useTheme } from '../../utils/hooks';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const StyledSubtitle = styled.h4`
    color: ${colors.secondary};
    text-align: center;
    font-weight: 600;
`;
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ErrorMsg = styled.div`
    display: flex;
    justify-content: center;
`;

function Freelances() {
    const { theme } = useTheme();
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances`
    );

    if (error) {
        return <ErrorMsg>Oups il y a eu un problème</ErrorMsg>;
    }

    const freelancesList = data?.freelancersList;

    return (
        <div>
            <h1>Trouvez votre prestataire</h1>
            <StyledSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </StyledSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer theme={theme}>
                    {freelancesList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    );
}

export default Freelances;

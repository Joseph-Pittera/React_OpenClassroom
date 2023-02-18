import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/Atoms';

const CardsContainer = styled.div`
    display: grid;
    justify-items: center;
    gap: 24px;
    grid-template-rows: 250px 250px;
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem auto;
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

function Freelances() {
    const [freelancesList, setFreelancesList] = useState([]);
    const [error, setError] = useState(false);
    const [isDataLoading, setDataLoading] = useState(false);
    useEffect(() => {
        async function getFreelances() {
            setDataLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:8000/freelances`
                );
                const { freelancersList } = await response.json();
                setFreelancesList(freelancersList);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setDataLoading(false);
            }
        }
        getFreelances();
    }, []);

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div>
            <h1>Trouvez votre prestataire</h1>
            <StyledSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </StyledSubtitle>
            {isDataLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
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

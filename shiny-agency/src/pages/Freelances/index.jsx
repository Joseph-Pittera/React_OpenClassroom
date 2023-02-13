import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
];

const CardsContainer = styled.div`
    display: grid;
    justify-items: center;
    gap: 24px;
    grid-template-rows: 300px 300px;
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem auto;
`;

const StyledSubtitle = styled.h4`
    color: ${colors.secondary};
    text-align: center;
    font-weight: 600;
`;

function Freelances() {
    return (
        <div>
            <h1>Trouvez votre prestataire</h1>
            <StyledSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </StyledSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    );
}

export default Freelances;

import HomeIllustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    display: flex;
    padding: 5rem 3rem;
    margin: 3rem auto;
    gap: 1rem;
    background-color: ${colors.backgroundLight};
    border-radius: 1rem;
    max-width: 800px;
`;

const HomeText = styled.div`
    font-size: 32px;
    vertical-align: middle;
    font-weight: 600;
    line-height: 3rem;
    margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
    padding: 5px 35px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
`;

const StyledImg = styled.img`
    max-width: 50%;
    height: auto;
`;

function Home() {
    return (
        <HomeContainer>
            <div
                style={{
                    padding: '3rem',
                    minWidth: '250px',
                }}
            >
                <HomeText>
                    Repérez vos besoins, on s'occupe du reste, avec les
                    meilleurs talents
                </HomeText>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
            <StyledImg src={HomeIllustration} alt="home illustration" />
        </HomeContainer>
    );
}

export default Home;

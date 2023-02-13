import HomeIllustration from '../../assets/home-illustration.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

const HomeText = styled.div`
    font-size: 32px;
    vertical-align: middle;
    font-weight: 600;
    line-height: 3rem;
    margin-bottom: 2rem;
`;

const StyledDisplay = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    padding: 5rem 3rem;
    margin: 3rem;
    gap: 1rem;
    background-color: ${colors.backgroundLight};
    border-radius: 1rem;
`;

const StyledImg = styled.div`padding; 5rem 3rem;`;

const StyledLink = styled(Link)`
    padding: 5px 35px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
`;

function Home() {
    return (
        <StyledDisplay>
            <div
                style={{
                    padding: '3rem',
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
            <StyledImg>
                <img
                    src={HomeIllustration}
                    alt="home illustration"
                    height="400px"
                />
            </StyledImg>
        </StyledDisplay>
    );
}

export default Home;

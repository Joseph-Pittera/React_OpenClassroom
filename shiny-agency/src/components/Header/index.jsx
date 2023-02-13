import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import darkLogo from '../../assets/dark-logo.png';

const StyledLink = styled(Link)`
    padding: 5px 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const StyledNav = styled.nav`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
`;

function Header() {
    return (
        <StyledNav>
            <Link to="/">
                <img src={darkLogo} alt="logo-Shiny" height="50px" />
            </Link>

            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </StyledNav>
    );
}

export default Header;
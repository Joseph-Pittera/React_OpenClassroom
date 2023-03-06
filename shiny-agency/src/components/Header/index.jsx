import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import LightLogo from '../../assets/light-logo.png';
import DarkLogo from '../../assets/dark-logo.png';
import { useTheme } from '../../utils/hooks';

const StyledLink = styled(Link)`
    padding: 5px 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const StyledHeader = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
`;

const StyledNav = styled.nav`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
`;

function Header() {
    const pathName = window.location.pathname;
    const { theme } = useTheme();

    return (
        <StyledHeader>
            <Link to="/">
                <img
                    src={theme === 'light' ? DarkLogo : LightLogo}
                    alt="logo-Shiny"
                    height="50px"
                />
            </Link>

            <StyledNav>
                <StyledLink to="/" $isFullLink={pathName === '/'}>
                    Accueil
                </StyledLink>
                <StyledLink
                    to="/freelances"
                    $isFullLink={pathName === '/freelances'}
                >
                    Profils
                </StyledLink>
                <StyledLink
                    to="/survey/1"
                    $isFullLink={pathName.includes('/survey')}
                >
                    Faire le test
                </StyledLink>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;

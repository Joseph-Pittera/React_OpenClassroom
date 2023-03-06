import { useContext } from 'react';
import { ThemeContext } from '../context';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#040433' : 'white'};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
        margin: 1rem;  
    }
`;

function GlobalStyle() {
    const { theme } = useContext(ThemeContext);

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;

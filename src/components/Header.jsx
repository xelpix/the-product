import { FaSun, FaMoon } from 'react-icons/fa';

import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Nav } from './styles/Nav.styled';

export default function Header({ handleTheme, isDarkMode }) {
  return (
    <>
      <StyledHeader>
        <Container>
          <Nav>
            <img src="./images/logo-main.svg" />
            <div className={`toggle-container ${isDarkMode ? ' dark' : ''}`}>
              <button onClick={handleTheme}>
                {!isDarkMode ? (
                  <FaMoon className="toggle-icon" />
                ) : (
                  <FaSun className="toggle-icon" />
                )}
              </button>
            </div>
          </Nav>
        </Container>
      </StyledHeader>
    </>
  );
}

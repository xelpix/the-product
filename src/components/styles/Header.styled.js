import styled from 'styled-components';

export const StyledHeader = styled.header`
  img {
    width: 40px;
    user-select: none;
  }

  background-color: ${({ theme }) => {
    if (theme.darkMode) {
      return theme.colors.darkestDark;
    }
    return theme.colors.mainWhite;
  }};

  transition: all 0.5s linear;

  button {
    border: none;
    padding: 10px;
    background-color: transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .toggle-container {
    position: relative;
    display: inline-block;
  }

  .toggle-icon {
    font-size: 24px;
    color: rgb(37, 121, 218);
  }

  .dark .toggle-icon {
    color: #f1c40f;
  }
`;

import styled from 'styled-components';

export const StyledReviews = styled.section`
  background-color: ${({ theme }) => {
    if (theme.darkMode) {
      return theme.colors.darkestDark;
    }
    return theme.colors.mainWhite;
  }};

  transition: all 0.5s linear;
`;

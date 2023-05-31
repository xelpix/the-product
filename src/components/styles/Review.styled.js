import styled from 'styled-components';

export const StyledReview = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => {
    if (theme.darkMode) {
      return theme.colors.darkSlate;
    }
    return theme.colors.lightSlate;
  }};

  transition: all 0.5s linear;

  color: ${({ theme }) => {
    if (theme.darkMode) {
      return theme.colors.mainWhite;
    }
    return theme.colors.mainDark;
  }};
  border-radius: 16px;
  margin: 40px 0;
  padding: 30px;
  justify-content: space-between;
  flex-direction: ${({ layout }) => (layout ? 'row-reverse' : 'row')};

  h2 {
    margin-bottom: 14px;
  }

  h3 {
    margin-bottom: 4px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: ${({ layout }) => (layout ? 'end' : 'start')};
  }

  & > div > span {
    margin-bottom: 10px;

    align-self: ${({ layout }) => (layout ? 'start' : 'end')};
  }

  span {
    display: flex;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    row-gap: 20px;

    & > div {
      align-items: center;
    }

    & > div > span {
      align-self: unset;
    }
  }
`;

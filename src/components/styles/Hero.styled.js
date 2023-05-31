import styled from 'styled-components';

export const StyledHero = styled.main`
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  padding: 60px 0;
  min-height: 70vh;

  section {
    display: flex;
    align-items: center;

    & > div {
      flex: 1;
    }
  }

  img {
    width: 375px;
    margin-left: 40px;
  }

  h1 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.snake};
  }

  button {
    font-family: inherit;
    padding: 8px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    margin-top: 40px;
    border: 3px solid ${({ theme }) => theme.colors.mainWhite};
    background-color: ${({ theme }) => theme.colors.mainDark};
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  button:hover {
    color: ${({ theme }) => theme.colors.snake};
    border: 3px solid ${({ theme }) => theme.colors.snake};
    transform: scale(0.97);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    section {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
`;

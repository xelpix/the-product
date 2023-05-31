import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkestDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: center;
  padding-top: 40px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  li {
    list-style: none;
    font-size: 24px;
    transition: all 0.2s ease-in-out;
  }

  li:hover {
    transform: translateY(-3px);
  }

  a {
    color: ${({ theme }) => theme.colors.snake};
  }
`;

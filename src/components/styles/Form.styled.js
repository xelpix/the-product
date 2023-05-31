import styled from 'styled-components';

export const StyledFormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    border: 2px solid ${({ theme }) => theme.colors.snake};
    border-radius: 12px;
    padding: 40px;
    color: ${({ theme }) => theme.colors.mainWhite};
    width: 600px;
    font-size: 22px;
  }

  input {
    outline: none;
    padding: 4px 10px;
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    border: none;
  }

  input:not([type='checkbox']) {
    width: 70%;
  }

  input[type='checkbox'] {
    margin-right: 10px;
  }

  #agreement {
    margin-right: 10px;
  }

  img {
    width: 100px;
  }

  button {
    font-family: inherit;
    margin-top: 8px;
    margin-bottom: 10px;
    padding: 8px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    border: 3px solid ${({ theme }) => theme.colors.mainWhite};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  button:hover {
    color: ${({ theme }) => theme.colors.snake};
    border: 3px solid ${({ theme }) => theme.colors.snake};
    transform: scale(0.97);
  }

  min-height: 70vh;
  background-color: ${({ theme }) => theme.colors.mainDark};

  .alert {
    font-size: 14px;
    text-align: center;
  }

  .alert-dangerous {
    color: red;
  }

  .alert-success {
    color: yellowgreen;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    form {
      width: 340px;
    }

    input:not([type='checkbox']) {
      width: 100%;
    }
  }
`;

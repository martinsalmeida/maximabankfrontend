import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      outline: none;
      border-color: var(--green-dark);
      filter: brightness(0.96);
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green-dark);
    color: var(--shape);

    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

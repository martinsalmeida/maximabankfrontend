import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: var(--background);
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--green);
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  width: 20rem;

  form {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-bottom: 2rem;
  }

  input {
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 2px solid var(--shape);
    margin-bottom: 0.5rem;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--text-body);
    }

    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--green-dark);
      filter: brightness(0.96);
    }
  }

  button {
    background: var(--green-dark);
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;

    color: var(--shape);
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    color: var(--shape);
    font-weight: bold;

    transition: color 0.2s;

    &:hover {
      color: var(--green-dark);
    }
  }
`;

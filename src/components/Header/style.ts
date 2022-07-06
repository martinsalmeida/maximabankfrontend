import styled from 'styled-components';

export const Container = styled.header`
  background: var(--green);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;

  padding: 2rem 1rem 10rem;
`;

export const Wapper = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green-dark);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin-left: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .btn-sair {
    font-size: 1rem;
    color: #fff;
    background: var(--red);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin-left: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

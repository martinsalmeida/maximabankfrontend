import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  margin-top: -8rem;
`;

export const Wapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Card = styled.div`
  background: var(--shape);
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  margin-top: 1.5rem;

  strong {
    font-size: 2rem;
  }
`;

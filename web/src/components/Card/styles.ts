import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.6rem;

  h1 {
    margin-bottom: 0.8rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--paper-background-color);
  border-radius: 0.5rem;
  padding: 2.4rem;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  overflow: hidden;
`;

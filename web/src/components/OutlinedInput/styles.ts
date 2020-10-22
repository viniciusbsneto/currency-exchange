import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.fieldset<ContainerProps>`
  width: 100%;
  margin-right: 0.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.4rem 0.8rem;
  border: 0.2rem solid var(--light-color);
  border-radius: 0.5rem;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--title-color);
    `}

  legend {
    font: 400 1.4rem Roboto;
  }

  svg {
    margin-right: 0.2rem;
    color: var(--title-color);

    ${props =>
      props.isFilled &&
      css`
        color: var(--title-color);
      `}

    ${props =>
      props.isFocused &&
      css`
        color: var(--title-color);
      `}
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--text-color);
  }
`;

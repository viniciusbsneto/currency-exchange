import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: url('https://svgshare.com/i/Qh4.svg') no-repeat;
  background-position: right bottom;

  @media (max-width: 1000px) {
    background-position-x: 100vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.header`
  margin: 4.8rem 0 0;

  img {
    width: 16rem;
    height: 8.1rem;
  }

  @media (max-width: 900px) {
    margin: 4.8rem auto 0;
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: 56rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 5.4rem;
    color: var(--title-color);

    @media (max-width: 900px) {
      font-size: 4.2rem;
    }
  }

  p {
    font-size: 2.4rem;
    margin-top: 2.4rem;
    line-height: 3.8rem;

    @media (max-width: 900px) {
      font-size: 2.4rem;
    }
  }

  a {
    width: 100%;
    max-width: 36rem;
    height: 7.2rem;
    background: linear-gradient(to left, #0f6c87, #84ce46);
    border-radius: 0.8rem;
    text-decoration: none;
    transition: border-radius 0.3s ease-in-out;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 4rem;

    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 7.2rem;
      height: 7.2rem;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      svg {
        color: #fff;
        width: 2rem;
        height: 2rem;
      }
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }

    &:hover {
      border-radius: 1.6rem;
    }
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

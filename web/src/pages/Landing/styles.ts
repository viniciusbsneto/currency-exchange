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
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.header`
  margin: 48px 0 0;

  img {
    width: 160px;
    height: 81px;
  }

  @media (max-width: 900px) {
    margin: 48px auto 0;
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: var(--title-color);

    @media (max-width: 900px) {
      font-size: 42px;
    }
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;

    @media (max-width: 900px) {
      font-size: 24px;
    }
  }

  a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: linear-gradient(to left, #0f6c87, #84ce46);
    border-radius: 8px;
    text-decoration: none;
    transition: border-radius 0.3s ease-in-out;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;

    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;

      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }

    strong {
      flex: 1;
      text-align: center;
      color: #fff;
    }

    &:hover {
      border-radius: 16px;
    }
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

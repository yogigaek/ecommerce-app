import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  padding: 2em;
  overflow-y: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1em;
  }
`;

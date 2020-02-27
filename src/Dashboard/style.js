import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

export const Wrapper = styled('img')(
  {
    width: '500px',
    height: '500px',
    // width: '100%',
    // height: '100%',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  (props) => ({
    visibility: props.show ? 'visible' : 'hidden',
    ...(props.show &&
      props.ready && {
        animation: `${fadeIn} 0.2s ease-out`,
        animationFillMode: 'both'
      })
  })
);

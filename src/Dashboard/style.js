import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled('div')(
  {
    width: '500px',
    height: '500px',
    // width: '100%',
    // height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  (props) => ({
    backgroundImage: `url(${props.image})`,
    display: props.show ? 'block' : 'none',
    ...(props.show && {
      animation: `${fadeIn} 2s ease-out`,
      animationFillMode: 'both'
    })
  })
);

import React, { useState, useEffect, useRef } from 'react';
import disintegrate from 'disintegrate';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import { Container, Wrapper } from './style';

const IMAGES = [image1, image2, image3, image4];
const COLORS = [[51, 204, 204], [102, 153, 153], [46, 184, 184], [153, 153, 153]];

function Dashboard() {
  const [index, setIndex] = useState(0);
  const wrapperEl = useRef(IMAGES.map(() => React.createRef()));

  useEffect(() => {
    disintegrate.init();
  }, []);

  function onClick(i) {
    const disObj = disintegrate.getDisObj(wrapperEl.current[i].current);

    disintegrate.createSimultaneousParticles(disObj);
    setIndex((i + 1) % 4);
  }

  return (
    <Container>
      {IMAGES.map((image, i) => (
        <Wrapper
          data-dis-id={i}
          data-dis-type='contained'
          data-dis-reduction-factor='350'
          data-dis-particle-type={'ExplodingParticle'}
          // data-dis-color={`[${COLORS[i].toString()}]`}
          data-dis-color={'[255, 255, 255]'}
          ref={wrapperEl.current[i]}
          onClick={() => onClick(i)}
          image={image}
          key={i}
          show={index === i}
        ></Wrapper>
      ))}
    </Container>
  );
}

export default Dashboard;

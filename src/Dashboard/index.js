import React, { useState, useEffect, useRef } from 'react';
import disintegrate from 'disintegrate';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import { useEffectAfterMount } from './useEffectAfterMount';
import { Container, Wrapper } from './style';

const IMAGES = [image1, image2, image3, image4];

function Dashboard() {
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [disObj, setDisObj] = useState(null);
  const wrapperEl = useRef(IMAGES.map(() => React.createRef()));

  useEffect(() => {
    function onReady() {
      setReady(true);
    }
    window.addEventListener('particlesReady', onReady);

    return () => {
      window.removeEventListener('particlesReady', onReady);
    };
  }, []);

  useEffect(() => {
    disintegrate.init();
  }, []);

  useEffectAfterMount(() => {
    function onDisCompelete() {
      wrapperEl.current[index].current.style.visibility = '';
      setIndex((i) => (i + 1) % 4);
    }

    if (disObj) {
      disintegrate.createSimultaneousParticles(disObj);
      wrapperEl.current[index].current.style.visibility = 'hidden';
      disObj.elem.addEventListener('disComplete', onDisCompelete);
    }

    return () => {
      disObj && disObj.elem.removeEventListener('disComplete', onDisCompelete);
    };
  }, [disObj]);

  return (
    <Container>
      {IMAGES.map((image, i) => {
        const show = i === index || !ready;

        return (
          <Wrapper
            data-dis-id={i}
            data-dis-container-id={`${i}`}
            data-dis-type='contained'
            data-dis-reduction-factor='450'
            data-dis-particle-type={'ExplodingParticle'}
            onClick={() => setDisObj(disintegrate.getDisObj(wrapperEl.current[i].current))}
            key={i}
            show={show}
            ref={wrapperEl.current[i]}
            src={image}
            ready={ready}
          ></Wrapper>
        );
      })}
    </Container>
  );
}

export default Dashboard;

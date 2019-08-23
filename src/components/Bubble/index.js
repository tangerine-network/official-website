import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
import { addBubble, startLoop, setCanvas } from './animation';

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  height: 700px;
  width: 700px;
  @media screen and (max-width: ${MOBILE_WIDTH}px) {
    height: 400px;
    width: 400px;
  }
`;

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  /* border: 1px solid #EEE; */
`;

const AnimatedBubble = ({ size }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      addBubble({
        color: 'rgba(255, 255, 255, 0.3)',
        radius: 250,
        size: 0.9,
        animation: {
          startIndex: 4,
          movement1: { upper: 0.08, lower: 0.02, speed: 0.0005, expand: true },
          movement2: { upper: 0.08, lower: 0.02, speed: 0.0005, expand: true },
          movement3: { upper: 0.08, lower: 0.02, speed: 0.0005, expand: false },
          movement4: { upper: 0.08, lower: 0.02, speed: 0.0005, expand: false },
        },
        points: [
          [0, 1, 1],
          [1, 1, 1],
          [1, 0, 1],
          [1, -1, 1],
          [0, -1, 1],
          [-1, -1,1],
          [-1, 0, 1],
          [-1, 1, 1],
        ]
      });
      addBubble({
        color: 'rgb(255, 255, 255, 0.5)',
        radius: 220,
        size: 0.85,
        animation: {
          startIndex: 1,
          movement1: { upper: 0.05, lower: 0.05, speed: 0.0005, expand: true },
          movement2: { upper: 0.05, lower: 0.05, speed: 0.0005, expand: true },
          movement3: { upper: 0.05, lower: 0.05, speed: 0.0005, expand: false },
          movement4: { upper: 0.05, lower: 0.05, speed: 0.0005, expand: false },
        },
        points: [
          [0, 1, 1.05],
          [1, 1, 1.1],
          [1, 0, 1],
          [1, -1, 1],
          [0, -1, 1],
          [-1, -1, 1.05],
          [-1, 0, 1],
          [-1, 1, 1],
        ]
      });
      addBubble({
        color: 'white',
        radius: 200,
        size: 0.8,
        animation: {
          startIndex: 2,
          movement1: { upper: 0.15, lower: 0.075, speed: 0.001, expand: true },
          movement2: { upper: 0.1, lower: 0.125, speed: 0.001, expand: true },
          movement3: { upper: 0.15, lower: 0.075, speed: 0.001, expand: false },
          movement4: { upper: 0.075, lower: 0.15, speed: 0.001, expand: false },
        },
        points: [
          [0, 1, 1],
          [1, 1, 1],
          [1, 0, 1.1],
          [1, -1, 1.15],
          [0, -1, 1],
          [-1, -1, 1],
          [-1, 0, 1],
          [-1, 1, 1],
        ]
      });
      setCanvas(wrapperRef.current);
      return startLoop();
    }
  }, []);

  return (
    <Canvas
      ref={wrapperRef}
      width={1400}
      height={1400}
    />
  );
}

const Bubble = () => {
  const wrapperRef = useRef();
  const [size, setSize] = useState();
  useEffect(() => {
    if (wrapperRef.current) {
      setSize(wrapperRef.current.clientWidth);
    }
  }, [wrapperRef.current]);
  return (
    <Wrapper ref={wrapperRef}>
      {size && (
        <AnimatedBubble
          size={size}
        />
      )}
    </Wrapper>
  );
};

export default Bubble;

import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import {
  MOBILE_WIDTH,
} from 'src/constants/app';
import { addBubble, startLoop, setCanvas } from './animation';

const Wrapper = styled.div`
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
  border: 1px solid #EEE;
`;

const AnimatedBubble = ({ size }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      addBubble({
        color: 'rgba(255, 255, 255, 0.3)',
        radius: 250,
        size: 0.9,
        points: [
          [0, 1, 1.05],
          [1, 1, 1.1],
          [1, 0, 1],
          [1, -1, 1],
          [0, -1, 1],
          [-1, -1, 0.95],
          [-1, 0, 1],
          [-1, 1, 1.1],
        ]
      });
      addBubble({
        color: 'rgb(255, 255, 255, 0.5)',
        radius: 220,
        size: 0.85,
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
        points: [
          [0, 1, 1, { upper: 0, lower: 0.2, speed: 0.0005, expand: false }],
          [1, 1, 1, { upper: 0, lower: 0.2, speed: 0.0005, expand: false }],
          [1, 0, 1.1, { upper: 0.05, lower: 0.1, speed: 0.0002, expand: true }],
          [1, -1, 1.2, { upper: 0.05, lower: 0, speed: 0.0002, expand: true }],
          [0, -1, 1],
          [-1, -1, 1, { upper: 0.05, lower: 0.02, speed: 0.0002, expand: true }],
          [-1, 0, 1, ],
          [-1, 1, 1],
        ]
      });
      setCanvas(wrapperRef.current);
      startLoop();
    }
  }, [wrapperRef.current]);

  return (
    <Canvas
      ref={wrapperRef}
      width={size * 2}
      height={size * 2}
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

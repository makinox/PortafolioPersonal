import React, { useRef } from 'react';
import * as THREE from 'three';

import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

import { HeroNoiseProps } from './Hero.types';

const GradientShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uAspect: 0,
  },
  glsl/* glsl */ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl/* glsl */ `
    #pragma glslify: noise = require('glsl-noise/simplex/3d');
    #pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

    uniform float uAspect;
    uniform vec3 uColor;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 center = vUv - 0.5;
      center.x *= uAspect;

      float n = noise(vec3(center * 0.8, uTime * 0.5));
      vec3 color = hsl2rgb(0.13 + n * 0.1, 1.0, 0.65 * n);

      gl_FragColor = vec4(color, 1.0); 
    }
  `
);

extend({ GradientShaderMaterial });

const Wave = ({ heroRef }: HeroNoiseProps) => {
  const ref: any = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      {console.log({ wid: heroRef.current.offsetWidth, hei: heroRef.current.offsetHeight })}
      <planeBufferGeometry args={[0.8, 0.3, 1, 1]} />
      <gradientShaderMaterial ref={ref} uAspect={heroRef.current.offsetWidth / heroRef.current.offsetHeight} />
    </mesh>
  );
};

const HeroDark = ({ heroRef }: HeroNoiseProps) => {
  return (
    <Canvas style={{ position: 'absolute', zIndex: -1 }} camera={{ fov: 3, position: [0, 0, 5] }}>
      <Wave heroRef={heroRef} />
    </Canvas>
  );
};

export default HeroDark;

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import useResize from '../../hooks/useResize';

function HeroThree() {
  const refElement = useRef<HTMLDivElement>(null);
  const size = useResize();

  const elementHeight = refElement.current?.offsetHeight || 0;
  const elementWidth = refElement.current?.offsetWidth || 0;

  useEffect(() => {
    if (!refElement.current.hasChildNodes() && elementWidth) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, elementWidth / elementHeight, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(elementWidth, elementHeight);
      refElement.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 2;

      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      console.log({ elementWidth, elementHeight });
      animate();

      return () => renderer.dispose();
    } else {
      return;
    }
  }, [elementWidth]);

  return { refElement };
}

export default HeroThree;

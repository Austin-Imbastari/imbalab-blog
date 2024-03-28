import React from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { Mesh } from 'three';
import { Suspense, useRef } from 'react';
import { useControls, Leva } from 'leva';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import fontUrl from '/fonts/Panchang-Variable.ttf';
import {
  useGLTF,
  Environment,
  Text,
  MeshTransmissionMaterial,
  useProgress,
  Html,
} from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    oragnicShape: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
};
function OranicShape(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/organicShape.glb') as GLTFResult;
  const { viewport, camera } = useThree();
  const { width } = viewport.getCurrentViewport(camera, [0, 0, 0]);
  const organic = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    const angle = state.clock.getElapsedTime();
    organic.current.position.z += (Math.cos(angle) * delta) / 2;

    organic.current.rotation.set(
      Math.cos(angle / 2),
      Math.sin(-Math.PI * 2.5),
      -0.2 - (1 + Math.sin(angle / 1.5)),
    );
  });

  useFrame(({ mouse }) => {
    const normalizedX = (mouse.x / 2 - 1) / 5;
    const normalizedY = (mouse.y / 2 - 1) / 5;
    organic.current.position.x = normalizedX;
    organic.current.position.y = normalizedY;
  });

  const organicProps = useControls({
    thickness: { value: 0.25, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.4, min: 0, max: 1 },
    backside: { value: true },
    wireframe: { value: false },
  });

  return (
    <group {...props} dispose={null} scale={width / 8}>
      <mesh
        ref={organic}
        geometry={nodes.oragnicShape.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-2.698, 0.434, 3.094]}
        scale={1.2}
      >
        <MeshTransmissionMaterial {...organicProps} />
      </mesh>
    </group>
  );
}

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html distanceFactor={10} center>
      <p className="text-white font-pachang text-2xl">{progress.toFixed(2)}%</p>
    </Html>
  );
};

const Hero = () => {
  return (
    <>
      <div className="relative h-screen">
        <Canvas
          flat
          gl={{
            alpha: false,
            antialias: true,
          }}
          dpr={[1, 1.5]}
          camera={{ near: 0.01, far: 110, fov: 60 }}
        >
          <Suspense fallback={<Loader />}>
            <color attach="background" args={['#000']} />

            <directionalLight intensity={2} position={[0, 3, 2]} />
            <Environment files={'./hdr/gradient02.hdr'} resolution={32} />
            <OranicShape />
            <Text font={fontUrl} fontSize={2} position={[0, 0, -2.5]}>
              imbalab
            </Text>
          </Suspense>
        </Canvas>
        <div className="leva-panel">
          <Leva collapsed />
        </div>
      </div>
    </>
  );
};
useGLTF.preload('/organicShape.glb');

export default Hero;

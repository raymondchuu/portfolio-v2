import { useRef, useState } from 'react';
import { Center, OrbitControls, Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Experience() {
  const [torusGeometry, setTorusGeometry] = useState();
  const [sphereGeometry, setSphereGeometry] = useState();

  useFrame((state, delta) => {
    for (const donut of donutsGroup.current.children) {
      donut.rotation.y += delta * 0.2;
    }
  });
  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  const tourusRef = <torusGeometry args={[1, 0.6, 16, 32]} ref={setTorusGeometry} />;

  const boxRef = <boxGeometry args={[1, 1, 1]} ref={setSphereGeometry} />;

  const donutsGroup = useRef();
  const donuts = useRef([]);
  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault enableZoom={false} minDistance={35} />
      <Center>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/helvetiker_regular.typeface.json"
        >
          {`
            Hey!\n
            I'm Raymond Chu\n
            Full Stack Software Developer\n
          `}
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <group ref={donutsGroup}>
        {[...Array(700)].map((_, i) => (
          <mesh
            ref={(element) => (donuts.current[i] = element)}
            scale={0.2 + Math.random() * 0.2}
            key={i}
            position={[(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          >
            {i < 50 ? tourusRef : boxRef}
            <meshNormalMaterial />
          </mesh>
        ))}
      </group>
    </>
  );
}

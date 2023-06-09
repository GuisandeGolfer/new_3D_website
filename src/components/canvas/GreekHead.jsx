import React, { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
extend({ OrbitControls, Preload, useGLTF });

import CanvasLoader from "../Loader";

const GreekHead = ({ isMobile }) => {
  const bust = useGLTF("./rhetorician/scene.gltf");

  // need to put 'rotation' values inside <mesh> JSX tag
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={bust.scene}
        scale={isMobile ? 5.45 : 15.0}
        position={isMobile ? [0, -10, -2.2] : [-10, -60.5, -1.5]}
        rotation={[1, -1.5, 1]}
      />
    </mesh>
  );
};

const GreekCanvas = ({ zindex }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [200, 50, 50], fov: 35 }}
      gl={{ preserveDrawingBuffer: false }}
      className={`${zindex}`}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={3.0}
        />
        <GreekHead isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GreekCanvas;

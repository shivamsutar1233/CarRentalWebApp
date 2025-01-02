import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { useTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
// import { CircularProgress } from "@mui/material";
function Model(props) {
  const gltf = useGLTF(`/${props.name}/scene.gltf`);
  return (
    <primitive {...props} object={gltf.scene} rotation={[0, Math.PI / 2, 0]} />
  );
}

export default function Render3DModel({ name = "scorpio" }) {
  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <Suspense
      fallback={
        <section className=" flex flex-1 justify-center items-center h-full">
          <CircularProgress />
        </section>
      }
    >
      <Canvas dpr={[1, 2]} shadows style={{ position: "absolute", top: "0" }}>
        <ambientLight intensity={1} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 2]}
        />
        <Stage environment={null}>
          <Model name={name} />
        </Stage>

        <Environment
          preset={theme.palette.mode === "light" ? "dawn" : "night"}
          background
          blur={1}
        />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Suspense>
  );
}

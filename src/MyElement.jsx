import React,{useRef} from 'react'
import { OrbitControls, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

function MyElement3D() {
  return (
    <>      
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,3,2]}/>
      <axesHelper scale={10}/>
      <OrbitControls/>
      
      <mesh>
        <boxGeometry />          
        <meshStandardMaterial color="#e67e22" opacity={0.7} transparent={true}/>
      </mesh>

      <mesh>
        <boxGeometry />          
        <meshStandardMaterial emissive={"yellow"} wireframe={true}/>
      </mesh>
    </>
  );
};
export default MyElement3D;
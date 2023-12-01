import React,{useRef} from 'react'
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

function MyElement3D() {

  const refMesh = useRef();
  useFrame((state, delta)=>{
    refMesh.current.rotation.z += delta;
  });
  return (
    <>      
      <directionalLight position={[1,1,1]}/>
      <axesHelper scale={10}/>
      <OrbitControls/>
      <mesh ref={refMesh} rotation-x={THREE.MathUtils.degToRad(45)} position-x={2} scale={[1,2,1]}>
        <boxGeometry />          
        <meshStandardMaterial color="#e67e22" opacity={0.5} transparent={true}/>
        <axesHelper/>


      </mesh>
      <mesh scale={[0.1,0.1,0.1]} position-y={2}>
          <sphereGeometry  />
          <meshStandardMaterial color="red"/>
          <axesHelper scale={10}/>
        </mesh>
    </>
  );
};
export default MyElement3D;
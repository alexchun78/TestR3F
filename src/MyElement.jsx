import React,{useRef} from 'react'
import { OrbitControls, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

function MyBox(props){
  const geo = new THREE.BoxGeometry();
  return (<mesh {...props} geometry={geo}/>);
}

function MyElement3D() {
  const refMesh = useRef();
  return (
    <>      
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,3,2]}/>
      <axesHelper scale={10}/>
      <OrbitControls/>
      <mesh ref={refMesh} rotation-x={THREE.MathUtils.degToRad(45)}  scale={[1,1,1]}>
        <boxGeometry />          
        <meshStandardMaterial color="#e67e22" opacity={0.7} transparent={true}/>
        <axesHelper/>
      </mesh>
      <Box position={[1.2,0,0]}>
        <meshStandardMaterial color="#8e44ad" opacity={0.7} transparent={true}/>
      </Box>
      <MyBox position={[-1.2,0,0]}>
        <meshStandardMaterial color="#e74c3c" opacity={0.7} transparent={true}/>
      </MyBox>
    </>
  );
};
export default MyElement3D;
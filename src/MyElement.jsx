import React,{useRef,useEffect} from 'react'
import { OrbitControls, Box } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three';
import {useControls} from 'leva';

function MyElement3D() {
  const refMesh = useRef();  
  const refMeshWireFrame = useRef();
  const { scene } = useThree()
  useEffect(()=>{
    refMeshWireFrame.current.geometry = refMesh.current.geometry;
    if(!refMesh.current.boundingBox){
      console.log(refMesh.current);
    }
    }, [] 
  );

  return (
    <>      
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,1,0]}/>
      <directionalLight position={[1,2,8]} intensity={0.7}/>
      <axesHelper scale={10}/>
      <OrbitControls/>

      <mesh position={[0,-0.5,0]}>
        <boxGeometry args={[3,.1,3,1,1,1]} />
        <meshStandardMaterial opacity={0.5} transparent={true}/>
      </mesh>

      <mesh ref = {refMesh}> 
        <boxGeometry width={[]} args={[1,1,1,1,1,1]}/>
        <meshLambertMaterial color="#1abc9c" opacity={1} transparent={true}/>
      </mesh>

      <mesh ref = {refMeshWireFrame}>
        <meshStandardMaterial emissive={"yellow"} wireframe={true}/>
      </mesh>
    </>
  );
};
export default MyElement3D;
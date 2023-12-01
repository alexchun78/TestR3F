import React,{useRef,useEffect} from 'react'
import { OrbitControls, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import {useControls} from 'leva';

function MyElement3D() {
  const refMesh = useRef();  
  const refMeshWireFrame = useRef();

  const {xSize,ySize,zSize,xDivide,yDivide,zDivide} = useControls ({
    xSize: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01
    },
    ySize: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01
    },
    zSize: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01
    },
    xDivide: {
      value: 1,
      min: 1,
      max: 8,
      step: 1
    },
    yDivide: {
      value: 1,
      min: 1,
      max: 8,
      step: 1
    },
    zDivide: {
      value: 1,
      min: 1,
      max: 8,
      step: 1
    },
  });
  useEffect(()=>{
    refMeshWireFrame.current.geometry = refMesh.current.geometry;
  },[xSize,ySize,zSize,xDivide,yDivide,zDivide]);
  
  return (
    <>      
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,3,2]}/>
      <axesHelper scale={10}/>
      <OrbitControls/>
      
      <mesh ref = {refMesh}> 
        <boxGeometry args={[xSize,ySize,zSize,xDivide,yDivide,zDivide]}/>          
        <meshStandardMaterial color="#e67e22" opacity={0.7} transparent={true}/>
      </mesh>

      <mesh ref = {refMeshWireFrame}>
        <meshStandardMaterial emissive={"yellow"} wireframe={true}/>
      </mesh>
    </>
  );
};
export default MyElement3D;
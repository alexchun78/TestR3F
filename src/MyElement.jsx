import React,{useRef,useEffect} from 'react'
import { OrbitControls, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import {useControls} from 'leva';

function MyElement3D() {
  const refMesh = useRef();  
  const refMeshWireFrame = useRef();

  const {radius, widthSegments, heightSegments} = useControls ({
    radius:{
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.01
    }, 
    widthSegments:{
      value: 32,
      min: 3,
      max: 256,
      step: 1
    }, 
    heightSegments:{
      value: 16,
      min: 2,
      max: 256,
      step: 1
    }, 
    // phiStart:{

    // },
    // phiLength: {

    // },
    // thetaStart:{

    // },
    // thetaLength:{

    // },
  });
  useEffect(()=>{
    refMeshWireFrame.current.geometry = refMesh.current.geometry;
  },
  // [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
  [radius, widthSegments, heightSegments]
  );
  
  return (
    <>      
      <ambientLight intensity={0.1}/>
      <directionalLight position={[0,1,0]}/>
      <directionalLight position={[1,2,8]} intensity={0.7}/>
      <axesHelper scale={10}/>
      <OrbitControls/>
      
      <mesh ref = {refMesh}> 
        <sphereGeometry args={[radius,widthSegments,heightSegments]}/>
        <meshLambertMaterial color="#1abc9c" opacity={1} transparent={true}/>
      </mesh>

      <mesh ref = {refMeshWireFrame}>
        <meshStandardMaterial emissive={"yellow"} wireframe={true}/>
      </mesh>
    </>
  );
};
export default MyElement3D;
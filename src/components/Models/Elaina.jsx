/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf --transform 
Files: scene.gltf [123.54KB] > C:\Users\BARAKAT\Downloads\elaina_-_wandering_witch__vrchatquest_avatar\scene-transformed.glb [923.86KB] (-648%)
Author: Antro (https://sketchfab.com/Antro3d)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/elaina-wandering-witch-vrchatquest-avatar-91a65d069fb44892982b46be0a2a2553
Title: Elaina - Wandering Witch | VRChat/Quest Avatar
*/

import React, { useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Elaina(props) {
  const { scene } = useGLTF('/models/scene-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const modelRef = useRef(); 

  useFrame(({clock}) => {
    console.log(clock)
    modelRef.current.position.y = -2 + Math.sin(clock.getElapsedTime()) * 0.2;
  })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0, -2, 0]}
    scale={[0.3,0.3,0.3]}
    rotation={[0,-0.5,0]}>
      <primitive object={nodes._rootJoint} />
      <mesh geometry={nodes.Wand_broom_0.geometry} material={materials.broom} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Wand_Outline_cloth_0.geometry} material={materials.Outline_cloth} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.ribbon_Dress_0.geometry} material={materials.Dress} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.ribbon_Outline_Coth_0.geometry} material={materials.Outline_Coth} rotation={[-Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.Object_162.geometry} material={materials.Body} skeleton={nodes.Object_162.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_163.geometry} material={materials.Coat} skeleton={nodes.Object_163.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_164.geometry} material={materials.Outline_Skin} skeleton={nodes.Object_164.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_166.geometry} material={materials.Dress} skeleton={nodes.Object_166.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_167.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_167.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_169.geometry} material={materials.Dress} skeleton={nodes.Object_169.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_170.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_170.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_172.geometry} material={materials.Coat} skeleton={nodes.Object_172.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_173.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_173.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_175.geometry} material={materials.Coat} skeleton={nodes.Object_175.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_176.geometry} material={materials.Brooch} skeleton={nodes.Object_176.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_177.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_177.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_179.geometry} material={materials.Coat} skeleton={nodes.Object_179.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_180.geometry} material={materials.Hair} skeleton={nodes.Object_180.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_181.geometry} material={materials.Dress} skeleton={nodes.Object_181.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_182.geometry} material={materials.Outline_Hair} skeleton={nodes.Object_182.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_184.geometry} material={materials.Hair} skeleton={nodes.Object_184.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_185.geometry} material={materials.Face} skeleton={nodes.Object_185.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_186.geometry} material={materials.Body} skeleton={nodes.Object_186.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
      <skinnedMesh geometry={nodes.Object_187.geometry} material={materials.Outline_Skin} skeleton={nodes.Object_187.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={5.849} />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')

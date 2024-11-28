import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel=({children, className})=>{


    return(
        <Canvas 
        className={clsx('w-screen h-screen relative', className)}>
            <Suspense>
                {children}
            </Suspense>
            <Environment preset='forest' />
        </Canvas>
    )
}

export default RenderModel;
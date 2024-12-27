"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

const RotatingHexagon = () => {
    const groupRef = useRef<Group>(null);

    const hexagonLayers = Array.from({ length: 10 }, (_, i) => ({
        radius: (i + 1) * 0.2,
        color: i % 2 === 0 ? '#22c55e' : '#4ade80', // Alternating green colors
    }));

    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#22c55e" intensity={2} />

            <group ref={groupRef}>

                {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    const x = Math.cos(angle) * 1.8;
                    const y = Math.sin(angle) * 1.8;

                    return (
                        <Line
                            key={`connector-${i}`}
                            points={[
                                [0, 0, 0],
                                [x, y, 0],
                            ]}
                            color="#22c55e"
                            lineWidth={0.5}
                            opacity={0.6}
                            transparent
                        />
                    );
                })}
            </group>

            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
};

export default RotatingHexagon; 
/*
source: https://sketchfab.com/3d-models/squid-game-giant-doll-7afd49dd07714651a6afa1fc4aac8576
title: Squid Game - Giant Doll
*/

import React, { forwardRef } from "react";

const Model = forwardRef(({ squidDoll }, group) => {
  const { nodes } = squidDoll;

  return (
    <group ref={group} dispose={null} rotation={[0, Math.PI, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_01_leher_squidGameDoll_01_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_01_leher_squidGameDoll_01_MAT_0.material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_02_mata_squidGameDoll_02_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_02_mata_squidGameDoll_02_MAT_0.material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_01_rambut_squidGameDoll_01_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_01_rambut_squidGameDoll_01_MAT_0.material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_01_bajuDanKaki_squidGameDoll_01_MAT_0
                  .geometry
              }
              material={
                nodes.squidGameDoll_01_bajuDanKaki_squidGameDoll_01_MAT_0
                  .material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_02_kepala_squidGameDoll_02_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_02_kepala_squidGameDoll_02_MAT_0.material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_01_tangan_squidGameDoll_01_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_01_tangan_squidGameDoll_01_MAT_0.material
              }
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={
                nodes.squidGameDoll_02_jepit_squidGameDoll_02_MAT_0.geometry
              }
              material={
                nodes.squidGameDoll_02_jepit_squidGameDoll_02_MAT_0.material
              }
            />
          </group>
        </group>
      </group>
    </group>
  );
});

export default Model;

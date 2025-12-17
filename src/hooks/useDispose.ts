import { useEffect } from "react";
import {
  BufferGeometry,
  Material,
  Texture,
  WebGLRenderTarget,
  Object3D,
} from "three";

type Child = Object3D & {
  geometry?: BufferGeometry;
  material?: Material | Material[];
};

type DisposableResource =
  | BufferGeometry
  | Material
  | Material[]
  | Texture
  | WebGLRenderTarget
  | Object3D;

/**
 * Custom hook to automatically dispose Three.js resources on component unmount
 * Prevents memory leaks and VRAM accumulation
 *
 * @param resources - Single resource or array of resources to dispose
 *
 * @example
 * const { nodes } = useGLTF("/model.glb");
 * useDispose([nodes.mesh.geometry, nodes.mesh.material]);
 */
export const useDispose = (
  resources: DisposableResource | DisposableResource[]
) => {
  useEffect(() => {
    return () => {
      const resourceArray = Array.isArray(resources) ? resources : [resources];

      resourceArray.forEach((resource) => {
        if (!resource) return;

        // Handle geometries
        if (resource instanceof BufferGeometry) {
          resource.dispose();
        }

        // Handle single material
        if (resource instanceof Material) {
          resource.dispose();
        }

        // Handle array of materials
        if (Array.isArray(resource)) {
          resource.forEach((mat) => {
            if (mat instanceof Material) {
              mat.dispose();
            }
          });
        }

        // Handle textures
        if (resource instanceof Texture) {
          resource.dispose();
        }

        // Handle render targets
        if (resource instanceof WebGLRenderTarget) {
          resource.dispose();
        }

        // Handle Object3D and its children recursively
        if (resource instanceof Object3D) {
          resource.traverse((child: Child) => {
            // Dispose geometry
            if (child.geometry) {
              child.geometry.dispose();
            }

            // Dispose material(s)
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((mat: Material) => mat.dispose());
              } else {
                child.material.dispose();
              }
            }
          });
        }
      });
    };
  }, [resources]);
};

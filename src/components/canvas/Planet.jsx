import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Planet = () => {
  const earth = useGLTF( './planet/scene.gltf' );

  return (
    <primitive
      object={ earth.scene }
      scale={ 2 }
      position-y={ 0 }
      rotation-y={ 0 }
    />
  )
}

const PlanetCanvas = () => {
  return (
    <Canvas
      shadow
      frameloop="demand"
      gl={ { preserveDrawingBuffer: true } }
      camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ -4, 3, 6 ]
      } }
    >
      <Suspense fallback={ <CanvasLoader /> }>
        <OrbitControls
          autoRotate
          enableZoom={ false }
          maxPolarAngle={ Math.PI * 0.5 }
          minPolarAngle={ Math.PI * 0.5 }
        />

        <Planet />
      </Suspense>
    </Canvas>
  )
}

export default PlanetCanvas;
import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import fontJson from '../../assets/fonts/helvetiker_regular.typeface.json';

extend( { TextGeometry } );

const TextCanvas = ( { text, size, color, position, screenType } ) => {
  const ref = useRef();
  const font = new FontLoader().parse( fontJson );
  const config = useMemo( () => ( {
    font,
    size,
    height: size * 0.5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.04,
    bevelOffset: 0,
    bevelSegments: 4
  } ), [ font, size ] );

  const handleScreenType = () => {
    switch ( screenType ) {
      case 'sm':
      case 'md':
        return 0.5;
      case 'lg':
        return 0.7;
      default:
        return 0.8;
    }
  };

  useEffect( () => {
    ref.current.geometry.computeBoundingBox();
    const boundingBox = ref.current.geometry.boundingBox;
    const center = new THREE.Vector3();
    boundingBox.getCenter( center );
    ref.current.geometry.translate( -center.x, -center.y, -center.z );
  } );

  return (
    <group position={ position } scale={ handleScreenType() }>
      <mesh ref={ ref }>
        <textGeometry args={ [ text, config ] } />
        <meshStandardMaterial wireframe color={ color } />
      </mesh>
    </group>
  );
};

const HeroCanvas = () => {
  const [ screenType, setScreenType ] = useState( 'xl' );

  const handleResize = () => {
      const width = window.innerWidth;

      if ( width < 640 ) {
        setScreenType( 'sm' );
      } else if ( width < 768 ) {
        setScreenType( 'md' );
      } else if ( width < 1024 ) {
        setScreenType( 'lg' );
      } else {
        setScreenType( 'xl' );
      }
  }

  useEffect( () => {
    window.addEventListener( 'resize', handleResize );
    return () => window.removeEventListener( 'resize', handleResize );
  }, [] );

  return (
    <Canvas
      frameloop="demand"
      camera={ { position: [ 0, 0, 5 ] } }
      className="w-full h-full"
    >
      <OrbitControls enableZoom={ false } />

      <Suspense fallback={ null }>
        { ( screenType === 'sm' || screenType === 'md' ) ? (
          <>
            <TextCanvas
              text="Code"
              size='0.7'
              color='#e4ce1b'
              position={ [ 0, 1, 0 ] }
              screenType={ screenType }
            />
            <TextCanvas
              text="Dreamer"
              size='0.7'
              color='#e4ce1b'
              position={ [ 0, 0.5, 0 ] }
              screenType={ screenType }
            />
            <TextCanvas
              text='code the future'
              size='0.35'
              color='#ffffff'
              position={ [ 0, -0.5, 0 ] }
              screenType={ screenType }
            />
            <TextCanvas
              text='you dream of'
              size='0.35'
              color='#ffffff'
              position={ [ 0, -1, 0 ] }
              screenType={ screenType }
            />
          </>
        ) : (
          <>
            <TextCanvas
              text="CodeDreamer"
              size='0.7'
              color='#e4ce1b'
              position={ [ 0, 1, 0 ] }
              screenType={ screenType }
            />
            <TextCanvas
              text='code the future you dream of'
              size='0.35'
              color='#ffffff'
              position={ [ 0, -1, 0 ] }
              screenType={ screenType }
            />
          </>
        ) }
      </Suspense>

      <ambientLight />
    </Canvas>
  )
};

export default HeroCanvas;

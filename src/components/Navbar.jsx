import { useState, useEffect } from 'react';
import { logo, menu, close } from '../assets';
import { navbarLinks } from '../constants';

const Navbar = () => {
  const [ currentSection, setCurrentSection ] = useState( 'Home' );
  const [ isNavbarFixed, setIsNavbarFixed ] = useState( false );
  const [ isOpen, setIsOpen ] = useState( false );

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const scrollY = window.scrollY;
      if ( scrollY > 80 ) setIsNavbarFixed( true );

      if ( scrollY <= 80 ) {
        setCurrentSection( 'Home' )
      } else if ( scrollY <= 100 ) {
        setCurrentSection( 'Services' )
      } else if ( scrollY <= 120 ) {
        setCurrentSection( 'Works' )
      }
    } );
  } );

  return (
    <nav className={ `${ isNavbarFixed ? 'fixed top-0 bg-black-900 container mx-auto' : '' } w-full z-10` }>
      <div className="flex justify-between items-center w-full h-[80px]">
        {/* logo */}
        <div className="flex items-center">
          <img src={ logo } alt="logo" className="w-[64px] h-[64px]" />
          <p className="text-[20px] font-bold">
            Code<span className="text-primary">Dreamer</span>
          </p>
        </div>

        {/* links */}
        <ul className="hidden sm:flex items-center gap-5 list-none">
          { navbarLinks.map( link => (
            <li
              key={ link.name }
              className={ `${ ( link.name === currentSection ) ? 'text-primary border-b border-b-2 border-b-primary' : '' } text-[18px] font-bold cursor-pointer` }
              onClick={ () => setCurrentSection( link.name ) }
            >
              <a href={ `#${ link.name }` }>{ link.name }</a>
            </li>
          ) ) }
        </ul>
        
        {/* links on small screen */}
        <div className="sm:hidden flex flex-col justify-end items-center gap-5">
          <img
            src={ isOpen ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={ () => setIsOpen( prev => !prev ) }
          />

          <div className={ `${ isOpen ? 'flex' : 'hidden' } absolute top-[50px] right-0 min-w-[140px] mx-4 my-3 p-6 bg-black-gradient rounded-[12px]` }>
            <ul className="flex flex-col justify-end items-end gap-5 list-none">
              { navbarLinks.map( link => (
                <li
                  key={ link.name }
                  className={ `${ ( link.name === currentSection ) ? 'text-primary border-b border-b-2 border-b-primary' : '' } text-[18px] font-bold cursor-pointer` }
                  onClick={ () => setCurrentSection( link.name ) }
                >
                  <a href={ `#${ link.name }` }>{ link.name }</a>
                </li>
              ) ) }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
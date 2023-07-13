import { useState, useEffect } from 'react';
import { logo, menu, close } from '../assets/images';
import { navbarLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [ currentSection, setCurrentSection ] = useState( 'Home' );
  const [ isNavbarFixed, setIsNavbarFixed ] = useState( false );
  const [ isOpen, setIsOpen ] = useState( false );

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      const scrollY = window.scrollY;
      ( scrollY > 80 ) ?  setIsNavbarFixed( true ) : setIsNavbarFixed( false );

      const services = document.querySelector( '#Services' );
      const works = document.querySelector( '#Works' );
      const about = document.querySelector( '#About' );
      const contact = document.querySelector( '#Contact' );
      const footer = document.querySelector( '#Footer' );
      
      if ( scrollY < services.offsetTop ) {
        setCurrentSection( 'Home' );
      } else if ( scrollY < works.offsetTop -80 ) {
        setCurrentSection( 'Services' );
      } else if ( scrollY < about.offsetTop -80 ) {
        setCurrentSection( 'Works' );
      } else if ( scrollY < contact.offsetTop - 80 ) {
        setCurrentSection( 'About' );
      } else if ( scrollY < footer.offsetTop - 80 ) {
        setCurrentSection( 'Contact' );
      } else {
        setCurrentSection( 'Home' );
      }
    } );
  } );

  return (
    <nav className={ `${ styles.paddingX } ${ isNavbarFixed ? 'bg-black-900' : '' } fixed top-0 w-full max-w-[1536px] z-10` }>
      <div className="flex justify-between items-center w-full h-[80px]">
        {/* logo */}
        <div className="flex items-center">
          <img src={ logo } alt="logo" className="w-[64px] h-[64px] mx-[-16px]" />
          <p className="text-[20px] font-bold">
            Code<span className="text-primary">Dreamer</span>
          </p>
        </div>

        {/* links */}
        <ul className="hidden md:flex items-center lg:gap-10 gap-5 list-none">
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

        {/* links on small and midium screen */}
        <div className="md:hidden flex flex-col justify-end items-center gap-5">
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
                  onClick={ () => {
                    setCurrentSection( link.name );
                    setIsOpen( false );
                  } }
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

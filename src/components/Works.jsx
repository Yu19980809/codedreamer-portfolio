import { useState } from "react";
import { works } from "../constants";
// import { logo } from '../assets/images';
import { styles } from "../styles";

const ProjectCard = ( { name, description, tags, icon, isActive, index, handleClick } ) => (
  <div
    className={ `flex flex-col w-full works-card ${ isActive ? 'works-card-active' : '' } px-[20px] py-[8px] text-dimWhite bg-work-gradient rounded-[20px] cursor-pointer` }
    onClick={ () => handleClick( index ) }
  >
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-[24px]">
        <span className={ `iconfont ${ icon } px-[6px] text-[24px] ${ isActive ? 'bg-black-500' : 'bg-black-900' } rounded-full` } />
        <h2 className={ `${ isActive ? 'text-white' : '' } lg:text-[32px] text-[28px] font-bold` }>{ name }</h2>
      </div>
      <span className={ `iconfont ${ isActive ? 'icon-xiajiantou' : 'icon-youjiantou' }` } />
    </div>

    <p className={ `${ isActive ? '' : 'hidden' } xl:mt-[20px] mt-[8px] text-[16px] text-dimWhite lg:leading-[24px] leading-[20px]` }>{ description }</p>

    <div className={ `${ isActive ? 'hidden' : '' } flex items-center gap-[12px] xl:mt-[16px] mt-[8px]` }>
      { tags.map( tag => (
        <div
          key={ tag.name }
          className="px-[12px] py-[4px] text-[12px] text-dimWhite border rounded-[20px]"
        >
          { tag.name }
        </div>
      ) ) }
    </div>
  </div>
);

const MobileScreenCard = ( { name, description, tags, image } ) => (
  <div className="flex flex-col w-full px-[50px]" >
    <div className="flex flex-col px-[40px] py-[8px] text-dimWhite bg-work-gradient rounded-[20px] cursor-pointer">
      <h2 className="text-white text-[32px] font-bold text-center">{ name }</h2>

      <p className="mt-[20px] text-[16px] text-dimWhite text-center leading-[24px]">{ description }</p>

      <div className="flex flex-wrap justify-center items-center gap-[12px] mt-[16px]">
        { tags.map( tag => (
          <div
            key={ tag.name }
            className="px-[12px] py-[4px] text-[12px] text-dimWhite border rounded-[20px]"
          >
            { tag.name }
          </div>
        ) ) }
      </div>
    </div>

    <div className="relative flex justify-center items-center w-full h-[300px] py-[20px]">
      <img src={ image } alt={ name } className="h-full" />

      <div className="position-center w-[300px] h-full flex flex-col justify-around text-[50px] text-purple font-semibold opacity-20 z-[-1]">
        <div className={ `${ name === 'OE Biotech' ? '' : 'hidden' }` }>
          <p className="text-right">Biotech</p>
          <p className="text-center">Biotech</p>
          <p className="text-left">Biotech</p>
        </div>
        
        <div className={ `${ name === 'OE Biotech' ? 'hidden' : '' }` }>
          <p>{ name }</p>
          <p className="text-center">{ name }</p>
          <p className="text-right">{ name }</p>
        </div>
      </div>
    </div>
  </div>
);

const Works = () => {
  const [ activeWorkIndex, setActiveWorkIndex ] = useState( 1 );

  const handleClick = index => setActiveWorkIndex( index );

  return (
    <section id="Works" className={ `${ styles.section } w-full` }>
      <div className="md:hidden text-primary font-bold text-center">Featured projects</div>

      <div className="md:flex hidden justify-between items-center lg:gap-[50px] gap-[30px]">
        {/* left cards part */}
        <div className="flex flex-col gap-[20px] justify-start items-center w-[40%]">
          { works.map( ( work, index ) => (
            <ProjectCard
              key={ work.name }
              index={ index }
              isActive={ index === activeWorkIndex }
              { ...work }
              handleClick={ handleClick }
            />
          ) ) }
        </div>

        {/* right images part */}
        <div className="relative flex justify-center items-center w-[50%] h-[460px]">
          <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between xl:text-[150px] lg:text-[120px] md:text-[100px] text-purple font-semibold opacity-20 z-[-1]">
            <p className={ `${ activeWorkIndex === 0 ? '' : 'hidden' }` }>Hobos</p>
            <p className={ `${ activeWorkIndex === 0 ? '' : 'hidden' } text-right` }>Hobos</p>
            
            <p className={ `${ activeWorkIndex === 1 ? '' : 'hidden' }` }>TripTrip</p>
            <p className={ `${ activeWorkIndex === 1 ? '' : 'hidden' } text-right` }>TripTrip</p>

            <p className={ `${ activeWorkIndex === 2 ? '' : 'hidden' } text-right` }>Biotech</p>
            <p className={ `${ activeWorkIndex === 2 ? '' : 'hidden' }` }>Biotech</p>
          </div>

          { works.map( ( work, index ) => (
            <img
              key={ work.name }
              src={ work.image }
              className={ `${ index === activeWorkIndex ? '' : 'hidden' } h-full` }
            />
          ) ) }
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-[20px] mt-[20px]">
        { works.map( work => (
          <MobileScreenCard
            key={ work.name }
            { ...work }
          />
        ) ) }
      </div>
    </section>
  )
}

export default Works;
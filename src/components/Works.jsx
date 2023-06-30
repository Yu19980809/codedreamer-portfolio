import { useState } from "react";
import { works } from "../constants";
import { logo } from '../assets/images';
import { styles } from "../styles";

const ProjectCard = ( { name, description, tags, icon, isActive, index, handleClick } ) => (
  <div
    className={ `flex flex-col w-full works-card ${ isActive ? 'works-card-active' : '' } px-[20px] py-[8px] text-dimWhite bg-work-gradient rounded-[20px] cursor-pointer` }
    onClick={ () => handleClick( index ) }
  >
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-[24px]">
        <span className={ `iconfont ${ icon } px-[6px] text-[24px] ${ isActive ? 'bg-black-500' : 'bg-black-900' } rounded-full` } />
        <h2 className={ `${ isActive ? 'text-white' : '' } text-[32px] font-bold` }>{ name }</h2>
      </div>
      <span className={ `iconfont ${ isActive ? 'icon-xiajiantou' : 'icon-youjiantou' }` } />
    </div>

    <p className={ `${ isActive ? '' : 'hidden' } mt-[20px] text-[16px] text-dimWhite leading-[24px]` }>{ description }</p>

    <div className="flex items-center gap-[12px] mt-[16px]">
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

const MobileScreenCard = ( { name, description, tags } ) => (
  <div className="flex flex-col w-full" >
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

    <div className="flex justify-center items-center w-full h-[300px]">
      {/* <img src={ image } alt={ name } className="rounded-[20px] object-cover" /> */}
      <img src={ logo } alt={ name } className="rounded-[20px] object-cover" />
    </div>
  </div>
);

const Works = () => {
  const [ activeWorkIndex, setActiveWorkIndex ] = useState( 0 );

  const handleClick = index => setActiveWorkIndex( index );

  return (
    <section id="Works" className={ `${ styles.paddingX } w-full` }>
      <div className="md:hidden text-primary font-bold text-center">Featured Projects</div>

      <div className="md:flex hidden justify-between items-center">
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
        <div className="w-[50%] h-[460px] bg-purple">
            { activeWorkIndex }
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
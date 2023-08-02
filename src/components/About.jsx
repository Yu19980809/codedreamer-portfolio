import { about } from "../constants";

const About = () => {
  const handlePlay = e => e.target.play();

  return (
    <section id="About" className='md:mt-[120px] mt-[80px]'>
      <div className="md:hidden text-primary font-bold text-center">Who we are</div>

      <div className={`flex lg:flex-row lg:justify-between flex-col-reverse items-center`}>
        {/* ------------ avatar ------------ */}
        <div className="lg:hidden flex mt-4">
          { about.avatar.map( avatar => (
            <video
              key={ avatar.name }
              type="video/mov"
              src={ avatar.video }
              muted
              onMouseEnter={ handlePlay }
              className="lg:w-[200px] md:w-[150px] w-1/4"
            />
          ) ) }
        </div>

        <div className="lg:block hidden flex-col w-1/3">
          <div className="flex justify-center items-center">
            <video
              src={ about.avatar[0].video }
              type="video/mov"
              onMouseEnter={ handlePlay }
              muted
              className="w-[150px]"
            />
          </div>

          <div className="flex justify-between items-center">
            <video
              src={ about.avatar[1].video }
              type="video/mov"
              onMouseEnter={ handlePlay }
              muted
              className="w-[150px]"
            />
            <video
              src={ about.avatar[2].video }
              type="video/mov"
              onMouseEnter={ handlePlay }
              muted
              className="w-[150px]"
            />
          </div>

          <div className="flex justify-center items-center">
            <video
              src={ about.avatar[3].video }
              type="video/mov"
              onMouseEnter={ handlePlay }
              muted
              className="w-[150px]"
            />
          </div>
        </div>

        {/* ------------ description ------------ */}
        <div className="lg:w-2/3 lg:p-20 text-center p-2">
          <h2 className="text-white lg:text-4xl text-2xl font-bold my-4">
            {about.h1}
          </h2>
          <p className="text-dimWhite lg:text-lg text-ml">{about.h2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

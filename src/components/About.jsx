import { about } from "../constants";
import { styles } from "../styles";

const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = (e) => {
    console.log(e.target);
    e.target.play();
  };

  return (
    <section id="About" className={`${styles.section} w-full `}>
      <div className="md:hidden text-primary font-bold text-center">Who are we</div>

      <div className={`flex md:flex-row flex-col-reverse md:p-10 pb-10`}>
        {/* <div className="flex">
        {about.avatar.map((avatar) => (
          <video
            src={avatar.video}
            key={avatar.name}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="w-[150px]"
          />
        ))}
      </div> */}
        {/* ------------ avatar ------------ */}
        <div className="relative md:w-2/5 md:h-[500px] flex md:flex-col md:mt-0 mt-4">
          <video
            src={about.avatar[0].video}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="md:w-[300px] w-1/4 md:absolute md:top-0 md:left-[130px]"
          />
          <video
            src={about.avatar[1].video}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="md:w-[300px] w-1/4 md:absolute md:top-[140px] md:left-0"
          />
          <video
            src={about.avatar[2].video}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="md:w-[300px] w-1/4 md:absolute md:top-[140px] md:left-[240px]"
          />
          <video
            src={about.avatar[3].video}
            type="video/mov"
            onMouseEnter={handlePlay}
            muted
            className="md:w-[300px] w-1/4 md:absolute md:top-[280px] md:left-[110px]"
          />
        </div>

        {/* ------------ description ------------ */}
        <div className="md:w-3/5 md:p-20 text-center p-2">
          <h2 className="text-white md:text-4xl text-2xl font-bold my-4">
            {about.h1}
          </h2>
          <p className="text-dimWhite md:text-lg text-ml">{about.h2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

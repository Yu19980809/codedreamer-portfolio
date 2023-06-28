import { about } from "../constants";
import { styles } from "../styles";


const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = (e) => {
    console.log(e.target);
    e.target.play();
  };

  return (
    <div  id="About" className={ `${styles.section} w-full flex md:p-20` }>
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
      {/* ------------ left ------------ */}
      <div className="relative w-1/3 h-[500px] ">
        <video
          src={about.avatar[0].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] md:absolute md:top-0 md:left-[130px]"
        />
        <video
          src={about.avatar[1].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] md:absolute md:top-[140px] md:left-0"
        />
        <video
          src={about.avatar[2].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] md:absolute md:top-[140px] md:left-[240px]"
        />
        <video
          src={about.avatar[3].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] md:absolute md:top-[280px] md:left-[110px]"
        />
      </div>

      {/* ------------ right ------------ */}
      <div className="w-2/3 md:p-20 text-center p-2">
        <h2 className="text-white md:text-[36px] text-[30px] font-bold my-4">{about.h1}</h2>
        <p className="text-dimWhite md:text-[16px] text-[18px]">{about.h2}</p>
      </div>
    </div>
  );
};

export default About;

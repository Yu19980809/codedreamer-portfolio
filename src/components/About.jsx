import { about } from "../constants";
import { styles } from "../styles";


const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = (e) => {
    console.log(e.target);
    e.target.play();
  };

  return (
    <div  id="About" className={ `${ styles.paddingX } w-full flex` }>
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
      <div className="border relative w-[600px] h-[500px]">
        <video
          src={about.avatar[0].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-0 left-[130px]"
        />
        <video
          src={about.avatar[1].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-[140px] left-0"
        />
        <video
          src={about.avatar[2].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-[140px] left-[240px]"
        />
        <video
          src={about.avatar[3].video}
          type="video/mov"
          onMouseEnter={handlePlay}
          muted
          className="w-[300px] absolute top-[280px] left-[110px]"
        />
      </div>

      {/* ------------ right ------------ */}
      <div className="w-[680px] p-14">
        <h2 className="text-white text-[36px] font-bold my-4">{about.h1}</h2>
        <p className="text-dimWhite text-[16px]">{about.h2}</p>
      </div>
    </div>
  );
};

export default About;

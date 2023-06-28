import { about } from "../constants";
import { styles } from "../styles";


const About = () => {
  // const handlePlay = e => e.target.play();
  const handlePlay = (e) => {
    console.log(e.target);
    e.target.play();
  };

  return (
    <div  id="About" className={ `${ styles.paddingX } w-full` }>
      <div className="flex">
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
      </div>
      <div className="border relative w-[600px] h-[600px]">
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
    </div>
  );
};

export default About;

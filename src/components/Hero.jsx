import { styles } from "../styles";
// import { logo } from "../assets/images";
import { hero } from "../constants";

const Hero = () => {
  return (
    <div
      id="Home"
      className={`w-full ${styles.paddingX} h-screen flex flex-col items-center justify-center`}
    >
      {/* 1. logo */}
      <p className="text-[60px] font-bold">
        Code<span className="text-primary">Dreamer</span>
      </p>
      {/* 2.slogan */}
      <h2 className="text-[30px]">{hero.slogan}</h2>
    </div>
  );
};

export default Hero;

import { styles } from "../styles";
// import { logo } from "../assets/images";
import { hero } from "../constants";

const Hero = () => {
  return (
    <div
      id="Home"
      className={`w-full mt-0 ${styles.section}  h-screen flex flex-col items-center justify-center`}
    >
      {/* 1. logo */}
      <p className="md:text-7xl text-3xl font-bold">
        Code<span className="text-primary">Dreamer</span>
      </p>
      {/* 2.slogan */}
      <h2 className="md:text-4xl text-lg">{hero.slogan}</h2>
    </div>
  );
};

export default Hero;

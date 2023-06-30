import { motion } from 'framer-motion';
import { HeroCanvas } from './canvas';
import { styles } from "../styles";

const Hero = () => {
  return (
    <div
      id="Home"
      className={`relative w-full mt-0 ${ styles.paddingX } h-screen flex flex-col items-center justify-center`}
    >
      <HeroCanvas />

      <div className="absolute xs:bottom-10 bottom-12 w-full flex flex-col justify-center items-center gap-[20px]">
        <a href="#Works">
          <div className="w-[35px] h-[64px] flex justify-center items-start p-2 rounded-3xl border-4 border-dimWhite">
            <motion.div
              animate={ { y: [ 0, 24, 0 ] } }
              transition={ {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              } }
              className="w-3 h-3 mb-1 rounded-full bg-dimWhite"
            />
          </div>
        </a>

        <p className="text-dimWhite text-[16px]">Scroll up to see more</p>
      </div>
    </div>
  );
};

export default Hero;

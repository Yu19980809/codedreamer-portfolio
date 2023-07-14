import { motion } from 'framer-motion';
import { PlanetCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { styles } from "../styles";

const Hero = () => {
  return (
    <div id="Home" className={`relative w-full mt-0 ${ styles.paddingX } h-screen flex flex-col items-center justify-center`} >
      {/* main content */}
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-full h-screen">
        {/* text */}
        <motion.div
          variants={ slideIn( 'left', 'spring', 0.2, 1 ) }
          initial="hidden"
          animate="show"
          className="flex justify-center items-center lg-[60%] w-full"
        >
          <div>
            <h1 className="xl:text-[72px] lg:text-[52px] sm:text-[36px] text-[24px] font-bold" style={{textShadow: "4px 4px 4px rgba(236, 238, 239, .7)"}}>
              Code <span className="text-primary" style={{textShadow: "4px 4px 4px rgba(228, 206, 27, .7)"}}>the future</span><br/> you dream of
            </h1>

            <div className="mt-[50px] lg:text-left text-center">
              <a href="#Contact" className="px-8 py-3 text-[18px] font-semibold bg-primary rounded-md">Contact Us</a>
            </div>
          </div>
        </motion.div>

        {/* canvas */}
        <motion.div
          variants={ slideIn( 'right', 'spring', 0.2, 1 ) }
          initial="hidden"
          animate="show"
          className="lg:w-[40%] w-full lg:h-[550px] h-[350px]"
        >
          <PlanetCanvas />
        </motion.div>
      </div>

      {/* scroll up tips */}
      <div className="absolute sm:bottom-10 bottom-0 w-full flex flex-col justify-center items-center gap-[20px]">
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

import { services } from "../constants";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";

const Services = () => (
  <section id="Services" className={`${styles.section} w-full`}>
    <div className="md:hidden text-primary font-bold text-center">What we do</div>
    <div className={`w-full flex flex-col items-center w-full`} >
      <div className="flex text-white text-2xl text-center md:text-5xl font-bold mt-6">
        <Typewriter
          words={[services.header]}
          loop={false}
          cursor
          // cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={120}
          delaySpeed={1000}
        />
      </div>
      <div className="grid md:grid-cols-4 gap-12 grid-cols-1 my-6">
        {services.services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center content-center text-center mt-6"
          >
            <img src={service.image} className="md:w-[230px] w-[80px]" />
            <div className="text-[20px] my-3">{service.title}</div>
            <div className="max-w-[300px] text-dimWhite">{service.content}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

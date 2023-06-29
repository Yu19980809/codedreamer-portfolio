import { services } from "../constants";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";

// process.env.NODE_ENV !== "production" && require("../mocks/services");

const Services = () => {
  console.log(import.meta.env);
  return (
    <div
      id="Services"
      className={`${styles.section} w-full flex flex-col items-center w-full my-12`}
    >
      {/* <div className="text-white text-[30px] text-center md:text-[48px] font-bold my-6">
        {services.header}
      </div> */}
      <div className="flex text-white text-2xl text-center md:text-5xl font-bold mt-6">
        <Typewriter
          words={[services.header]}
          loop={5}
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
            <div className="text-dimWhite">{service.content}</div>
          </div>
          // <ServiceItem key={ service.name } { ...service } />
        ))}
      </div>
    </div>
  );
};

export default Services;

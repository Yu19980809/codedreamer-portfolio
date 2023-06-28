import { services } from "../constants";
import { styles } from "../styles";

const Services = () => {
  return (
    <div id="Services" className={ `${ styles.section } w-full flex flex-col items-center w-full my-12` }>
      <div className="text-white text-[30px] text-center md:text-[48px] font-bold my-6">
        {services.header}
      </div>
      <div className="grid md:grid-cols-4 gap-12 grid-cols-1">
        {services.services.map((service) => (
          <div key={service.title}  className="flex flex-col items-center content-center text-center mt-6">
            <img src={service.image} className="md:w-[230px] w-[100px]"/>
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

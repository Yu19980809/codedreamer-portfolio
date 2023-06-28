import { services } from "../constants";
import { styles } from "../styles";

const Services = () => {
  return (
    <div id="Services" className={ `${ styles.paddingX } w-full flex flex-col items-center w-full my-12` }>
      <div className="text-white text-[48px] font-bold my-6">
        {services.header}
      </div>
      <div className="grid grid-cols-4 gap-12">
        {services.services.map((service) => (
          <div key={service.title}  className="flex flex-col items-center content-center text-center">
            <img src={service.image} className="w-[230px]"/>
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

import { services } from "../constants";
import { Typewriter } from "react-simple-typewriter";

const Services = () => (
  <section id="Services" className="md:mt-[120px] mt-[80px]">
    <div className="md:hidden text-primary font-bold text-center">What we do</div>

    <div className="flex flex-col items-center">
      {/* title */}
      <div className="w-full my-[8px] text-center text-white md:text-[48px] text-[24px] font-bold">
        <Typewriter
          words={['Customize your business']}
          loop={false}
          cursor
          typeSpeed={80}
          deleteSpeed={120}
          delaySpeed={1000}
        />
      </div>

      {/* lists */}
      <div className="flex md:flex-row flex-col md:justify-around justify-center items-center">
        { services.map( item => (
          <div
            key={ item.title }
            className="flex flex-col items-center mt-[30px]"
          >
            <img src={ item.image } className="md:w-[230px] w-[80px] rounded-[12px]" />
            <div className="my-[12px] text-[20px]">{ item.title }</div>
            <ul className="max-w-[300px] lg:text-[16px] text-[12px] text-dimWhite list-disc" >
              { item.content.map( ( content, index ) => (
                <li key={ index } className="text-left">{ content }</li>
              ) ) }
            </ul>
          </div>
        ) ) }
      </div>
    </div>
  </section>
)

export default Services;
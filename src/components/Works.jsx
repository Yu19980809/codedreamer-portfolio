/* eslint-disable no-unused-vars */
import { works } from '../constants';
import { styles } from '../styles';

// const ProjectCard = ( { name, image, description, qrcode_img, tags }) => (
//   <div>{ name }</div>
// );

const Works = () => {
  return (
    <div className= {`flex justify-between items-center ${ styles.paddingX }`}>

      {/* left cards */}
      <div className="flex flex-3 flex-col space-y-[38px] justify-start" >

        {/* every single card */}

        { works.works.map( ( work ) => (
          <div className="pl-[26px] group rounded-3xl bg-work-gradient text-white/70 border-2 border-transparent hover:bg-work-active hover:text-white hover:border-2 hover:border-borderGrey shadow-xl shadow-blue-500/50:;
          " key={ work.name}>
            <div className="work-title pt-[35px] pb-[16.9px]">{ work.name }</div>
            <div className="text-[14px]">{ work.description }</div>
            <div className="flex pb-[30px] pt-[13px] flex space-x-[14px]">{ work.tags.map( (tag) => (
              <div className="text-[10px] px-[9px] py-[6px] border rounded-full group-hover:border-white" key={tag.name}> { tag.name }</div>
            )
          ) }</div>
          </div>
        )

        )}

      </div>

      {/* right image card */}
      <div className="flex flex-7 w-[770px] border">
        <img src="/src/assets/images/Hobos-QR.jpeg" alt="" />
      </div>

    </div>
  );


};

export default Works

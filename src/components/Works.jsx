/* eslint-disable no-unused-vars */
import { works } from "../constants";
import { styles } from "../styles";
import { useState } from "react";


const Works = () => {
  const [activeWork, setActiveWork] = useState(works.works[0].name);

  return (
    <div className={`flex justify-between items-center ${styles.paddingX}`}>
      {/* --------------------- left cards --------------------- */}
      <div className="flex w-[450px] flex-col space-y-[38px] justify-start">
        {/* every single card */}
        {works.works.map((work) => (
          <div
            className="pl-[26px] group rounded-3xl bg-work-gradient text-white/70 border-2 border-transparent hover:bg-slate-200/50 hover:text-white hover:border-2 hover:border-borderGrey shadow-xl shadow-blue-500/50:;
          "
            key={work.name}
            onClick={() => {setActiveWork(work.name)}}
          >
            <div className="work-title pt-[35px] pb-[16.9px]">{work.name}</div>
            <div className="text-[14px]">{work.description}</div>
            <div className="flex pb-[30px] pt-[13px] flex space-x-[14px]">
              {work.tags.map((tag) => (
                <div
                  className="text-[10px] px-[9px] py-[6px] border rounded-full group-hover:border-white"
                  key={tag.name}
                >
                  {" "}
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --------------------- right image card --------------------- */}
      <div className="flex w-[800px]  h-[666px]  border relative">
        {/* bg text */}
        <div className="flex w-[582px] h-[225px] flex-col justify-start border">
          <div className="text-textPurple text-[150px] font-semibold">
            <div className="absolute top-[10px] left-[35px]">TripTirp</div>
            <div className="absolute bottom-[242.23px] left-[93.61px]">
              TripTirp
            </div>
            <div className="absolute bottom-[38.8px] left-[188.43px]">
              TripTirp
            </div>
          </div>
        </div>

        {/* images */}
        {activeWork === "Hobos" && (
          <img
            className="absolute bottom-[274px] left-[96px]"
            src="/src/assets/images/Hobos-QR.jpeg"
            alt=""
          />
        )}
        {activeWork === "Triptrip" && (
          <div>
            <img
              className="absolute bottom-[84.41px] left-[96px]"
              src="/src/assets/images/triptrip1.png"
              alt=""
            />
            <img
              className="absolute bottom-[274.68px] left-[246.49px]"
              src="/src/assets/images/triptrip2.png"
              alt=""
            />
            <img
              className="absolute bottom-[12.99px] left-[376.79px]"
              src="/src/assets/images/triptrip3.png"
              alt=""
            />
            <img
              className="absolute bottom-[214.05px] right-[55px]"
              src="/src/assets/images/triptrip4.png"
              alt=""
            />
          </div>
        )}
        {activeWork === "OE Biotech" && (
          <div>
            <img
              className="absolute bottom-[30px] left-0"
              src="/src/assets/images/OE1.jpg"
              alt=""
            />
            <img
              className="absolute bottom-[30px] left-0"
              src="/src/assets/images/OE2.jpg"
              alt=""
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Works;

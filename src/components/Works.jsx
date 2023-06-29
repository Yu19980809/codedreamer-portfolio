/* eslint-disable no-unused-vars */
import { works, baseAssetUrl } from "../constants";
import { styles } from "../styles";
import { useState } from "react";

const Works = () => {
  const [activeWork, setActiveWork] = useState(works.works[0].name);

  return (
    <section id="Works" className={`${styles.section} w-full `}>
      <div className="md:hidden text-primary font-bold text-center">What we&apos;ve done</div>
      <div
        className={`flex justify-between items-center`}
      >
        {/* --------------------- left cards --------------------- */}
        <div className="flex w-1/3 flex-col space-y-[38px] justify-start">
          {/* every single card */}
          {works.works.map((work) => (
            <div
              className={`pl-[26px] group rounded-3xl text-white/70 border-2 border-transparent hover:bg-slate-200/50 hover:text-white hover:border-2 hover:border-borderGrey  shadow-xl shadow-blue-500/50:;
            ${
              activeWork === work.name
                ? "bg-slate-200/50 text-white border-2 border-borderGrey"
                : "bg-work-gradient"
            }`}
              key={work.name}
              onClick={() => {
                setActiveWork(work.name);
              }}
            >
              <div className="work-title pt-[35px] pb-[16.9px]">
                {work.name}
              </div>

              {activeWork === work.name && (
                <div className="text-[14px]">{work.description}</div>
              )}

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
        <div className="flex w-2/3  h-[666px] relative">
          {/* bg text */}
          <div className="flex w-[582px] h-[225px] flex-col justify-start">
            {activeWork === "Hobos" && (
              <div className="text-textPurple text-[150px] font-semibold">
                <div className="absolute top-[10px] left-[35px]">Hobos</div>
                <div className="absolute bottom-[242.23px] left-[93.61px]">
                  Hobos
                </div>
                <div className="absolute bottom-[38.8px] left-[188.43px]">
                  Hobos
                </div>
              </div>
            )}

            {activeWork === "OE Biotech" && (
              <div className="text-textPurple text-[150px] font-semibold">
                <div className="absolute top-[10px] left-[35px]">
                  OE Biotech
                </div>
                <div className="absolute bottom-[242.23px] left-[93.61px]">
                  OE Biotech
                </div>
                <div className="absolute bottom-[38.8px] left-[188.43px]">
                  OE Biotech
                </div>
              </div>
            )}

            {activeWork === "Triptrip" && (
              <div className="text-textPurple text-[150px] font-semibold">
                <div className="absolute top-[10px] left-[35px]">TripTirp</div>
                <div className="absolute bottom-[242.23px] left-[93.61px]">
                  TripTirp
                </div>
                <div className="absolute bottom-[38.8px] left-[188.43px]">
                  TripTirp
                </div>
              </div>
            )}
          </div>

          {/* images */}
          {activeWork === "Hobos" && (
            <img
              className="absolute w-28 top-[10px] left-[0px] rounded-full"
              src={`${baseAssetUrl}/Works/Hobos-QR.jpeg`}
              alt=""
            />
          )}
          {activeWork === "Triptrip" && (
            <div>
              <img
                className="absolute w-28 top-[10px] left-[0px] rounded-full"
                src="/src/assets/images/triptrip-QR.jpeg"
                alt=""
              />
              <img
                className="absolute bottom-[84.41px] left-[96px] w-[200px]"
                src={`${baseAssetUrl}/Works/triptrip1.jpg`}
                alt=""
              />
              <img
                className="absolute bottom-[274.68px] left-[246.49px] w-[250px]"
                src={`${baseAssetUrl}/Works/triptrip2.jpg`}
                alt=""
              />
              <img
                className="absolute bottom-[12.99px] left-[376.79px] w-[250px]"
                src={`${baseAssetUrl}/Works/triptrip3.jpg`}
                alt=""
              />
              <img
                className="absolute bottom-[214.05px] right-[55px] w-[200px]"
                src={`${baseAssetUrl}/Works/triptrip4.jpg`}
                alt=""
              />
            </div>
          )}
          {activeWork === "OE Biotech" && (
            <div>
              <img
                className="absolute bottom-[30px] left-0 w-[500px]"
                src={`${baseAssetUrl}/Works/OE1.jpg`}
                alt=""
              />
              <img
                className="absolute bottom-[30px] left-0 w-[500px]"
                src={`${baseAssetUrl}/Works/OE2.jpg`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;

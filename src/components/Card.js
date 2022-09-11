import React from "react";
import bgImage from "../image/bg.jpg";
import tiktok from "../image/tiktok.png";
import { MdCenterFocusWeak } from "react-icons/md";
import { TbMessageShare } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";
import { AiOutlineLine } from "react-icons/ai";
import styled from "styled-components";
function Card() {
  const backgroundImage = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: "cover",
    opacity: 0.9,
  };
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div
        className="w-[300px] h-[400px] rounded flex flex-col items-center justify-between "
        style={backgroundImage}
      >
        <div className="flex flex-row items-center justify-around space-x-[250px] mt-[10px]">
          <MdCenterFocusWeak className="text-white" />
          <TbMessageShare className="text-white" />
        </div>
        <div className="flex items-center">
          <svg
            className="fill-white"
            viewBox="0 0 100 100"
            width="130"
            height="130"
          >
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-size="13">
              <textPath className="tex-white" xlinkHref="#circle">
                CLARA.DT - FOLLOW ME - CLARA.DT - FOLLOW ME
              </textPath>
            </text>
          </svg>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="absolute rounded-full w-20 ml-6"
            alt="Avatar"
          />
          {/* <p className="absolute ml-14">limon</p> */}
        </div>
        <div className="flex ">
          <div className="">
            <p className="text-white text-center">Follow me on TikTok</p>
            <button className="flex items-center  justify-center h-[30px] w-[220px] rounded-2xl bg-slate-400 space-x-1 ring-2 ring-white ring-inset">
              <img className="w-[20px]" src={tiktok} />
              <p className="text-white ">CLARA.DT</p>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around mb-[10px]">
          <BsFillPlayFill className="text-white" />
         <input type="range" class=" w-full h-[4px] bg-gray-200 rounded-lg appearance-none"/>
          <GiSpeaker className="text-white"/>
        </div>
      </div>
    </div>
  );
}

const Line = styled.div`
  width: 150px;
  height: 1px;
  color: white;
  border: 0.000001rem solid white;
`;

export default Card;

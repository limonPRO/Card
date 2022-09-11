import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import bgImage from "../image/bg.jpg";
import { Typewriter } from 'react-simple-typewriter'
// import './App.css'
function Index() {
  const backgroundImage = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: "cover",
    
  };
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center ">
      <div 
        className="w-[300px] h-[400px] rounded flex"
        data-aos="zoom-in"
        style={backgroundImage}
      >
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-center justify-center mt-[100px]">
          <h2 className="text-white text-2xl text-center font-bold">How To Reach <br/> Us</h2>
          </div>
          <div className=" w-full h-[200px] bg-gray-200 rounded-t-2xl flex flex-col items-center justify-center space-y-4"  data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
           
            <div className='flex items-center justify-evenly px-[12px] h-10 w-[250px] rounded-2xl bg-white '>
            <AiFillInstagram className=""/>
            <span style={{ }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["@thebeautycenter"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
            <p></p>
         </div>
         <div className='flex items-center  justify-evenly px-[12px] h-10 w-[250px] rounded-2xl bg-white '>
            <IoLogoWhatsapp/>
            <span style={{ }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["+1-2-202-555-0160"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
            <p></p>
         </div>
         <div className='flex items-center   justify-evenly  px-[12px] h-10 w-[250px]  rounded-2xl bg-white'>
            <MdOutlineEmail/>
            <p className="text-xs"> <span style={{ }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["hello@beautycenter.com"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></p>
            <p></p>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

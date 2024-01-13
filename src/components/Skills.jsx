import React from "react";
import SkillList from "./SkillList";
import { BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
import { Heading } from "./utility";

const Skills = () => {
  const iconStyle = {
    height: "120px",
    width: "100%",
    color: "#E94560",
  };

  return (
    <div className="px-4 mt-6">
      <Heading className="text-center ">My Skills</Heading>
      <div className="flex items-center justify-center py-4">
        <div className="bg-baseColor w-1 h-[484px]" />
        <div className="flex flex-col gap-2 h-full justify-between">
          <SkillList
            w="w-[60vw]"
            icon={<BiLogoHtml5 style={iconStyle} />}
            heading="Html & Css"
          />
          <SkillList
            w="w-[45vw]"
            icon={<BiLogoJavascript style={iconStyle} />}
            heading="Javascript"
          />
          <SkillList
            w="w-[30vw]"
            icon={<BiLogoReact style={iconStyle} />}
            heading="React js"
          />
          <SkillList
            w="w-[15vw]"
            icon={<BiLogoNodejs style={iconStyle} />}
            heading="Node js"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

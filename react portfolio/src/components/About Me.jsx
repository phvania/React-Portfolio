import React from "react";

const AboutMe =  () => {
    return (
<div
id="About "
className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
>
<div>
  <div className="table">
    <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
    <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
      About Me
    </code>
    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
  </div>
  <div className="text-[#a2aabc] text-lg mt-5">
    <code>
    Hello there, My name is Priti Vania.
  
    </code>
    </div>
    </div>
    </div>
    );
};

export default AboutMe;
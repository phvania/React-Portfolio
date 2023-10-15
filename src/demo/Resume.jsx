import React from "react";
//import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              BSc.BEd with Math and Science and Full stack Web Development course
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 1997 - July 2000 and 2023(Web Development)
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Lorem - Gujarat, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• June2002 - 2022</code>
            <br />
            <code className="text-sm">
              <br />• Worked as a math and science Teahcher in St.Mary school ,India
              <br />• Worked as a math and science Teahcher in St.Xavier high  school ,India
              Worked as a math and science Teahcher in Bhavans high school ,India
              <br />• worked in achild care   center as aassistant teacher, Winnipag Manitoba
              <br />• Worked in a  customer service department in food company, ontatio
              <br />• work as a Educational Assistant at DPCDSB
              <br />
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Experience in using Git and VS code
              <br />• Excellent collaborative Skills.
                     Strong in communication and great problem solv
              <br />•Strong ablility  to coordinate with external and internal clients
              <br />•great knowledge of the entire web development process
              <br />• strong  experience with HTML CSS and JavaScript
              <br />• Good knowledge about React and third-party libraries
              <br />. Good Creativity and knowledge in responsive Design
              <br />. Testing and Debugging
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
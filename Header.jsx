import React from "react";

function Header() {


  const style={
    backgroundColor: 'black',
    font: '20px sans-ser',
    color:'white'
  }

  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">   
      <div className="flex flex-col" style={style}>
        <code className="text-lightblue_vs">PRITI VANIA</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Full Stack Developer</code>
      </div>
    </div>
  );
}
      //<button
        //className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      //</div>>
//<code>Check out my Projects !</code>
      //</button>
    
  


export default Header;
// app/sections/Intro.js
import ScrollIndicator from '../components/ScrollIndicator';
import Image from 'next/image';

export default function Intro() {
  return (
    <section id="intro" className="relative h-screen flex flex-col bg-green-100">
        <div className='bg-green-400' style={{height:"30%"}}>block1</div>
   
      <div 
        className="flex border-2 border-green-300 w-full h-1/4 "
        style={{ 
          background: 'repeating-linear-gradient(45deg, #add8e6, #add8e6 5px, #ffffff 5px, #ffffff 10px)',
          borderRadius: '10px',
        }}
      >
        <div className="flex bg-red-300 w-full">
            <div className='w-1/4'>Block 1</div>
           <div className='w-1/3 space-y-4'>
                <div className="text-6xl my-4">
                    My Work History.
                </div>
                <div className="w-1/8 border-b-2 mb-8 rounded-md animate-slideIn my-4" style={{ borderBottomWidth: '10px', borderBottomColor: 'green', width: '5%' }}></div>
    
                <div className=' my-4 text-2xl'>
                I love collaborating with people to create amazing things, whether it's an <b>interactive, accessible website or an AI model predicting healthcare trends</b>. I've managed large projects for major healthcare companies like HCA, New York Presbyterian, and New York's public hospital system. Currently, I'm a <b>full-stack engineer</b> at the Population Council, working with researchers to build AI models. I've spent years making an impact and keeping things neat!
                </div>
           </div>
            <div className='w-1/3'>Block 3</div>
        </div>
      </div>
      <div className = "bg-yellow-200 w-full" style={{ height: "45%" }}>

      <ScrollIndicator />
      </div>
    </section>
  );
}
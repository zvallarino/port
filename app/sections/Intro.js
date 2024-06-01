// app/sections/Intro.js
import ScrollIndicator from '../components/ScrollIndicator';
import Image from 'next/image';

export default function Intro() {
  return (
    <section id="intro" className="relative h-screen flex flex-col items-center justify-center bg-green-100">
      <div className = "bg-yellow-200 w-full h-1/3">blue</div>
      <div 
        className="flex border-2 border-green-300 w-full h-1/3 items-center justify-center space-x-8"
        style={{ 
          background: 'repeating-linear-gradient(45deg, #add8e6, #add8e6 5px, #ffffff 5px, #ffffff 10px)',
          borderRadius: '10px',
        }}
      >
        <div className="flex flex-col p-4">
          <div className="mb-4">
            <p className="text-8xl">Hi, my</p>
            <p className="text-8xl">name is Zach.</p>
          </div>
          <div>
            <p className="text-xl">Im a Full Stack Engineer based in</p>
            <p className="text-xl">New York City.</p>
          </div>
        </div>
        <div className="relative w-80 h-80">
          <Image 
            src="/images/naoto.png" 
            alt="Profile picture" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
      </div>
      <div className = "bg-yellow-200 w-full h-1/3">
      <ScrollIndicator />
      </div>
    </section>
  );
}
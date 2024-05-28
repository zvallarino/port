// app/sections/Intro.js
import ScrollIndicator from '../components/ScrollIndicator';

export default function Intro() {
  return (
    <section id="intro" className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <ScrollIndicator />
    </section>
  );
}
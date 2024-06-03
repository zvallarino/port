import Image from "next/image";

export default function CurrentExperience() {
  return (
    <section
      id="current-experience"
      className="h-screen flex items-center justify-center bg-yellow-300"
    >
      <div className="bg-red-300 h-full" style={{ width: "20%" }}>
        block 1
      </div>
      <div
        className="flex flex-col bg-blue-200 h-full justify-center items-center"
        style={{ width: "40%" }}
      >
        <div className="flex flex-col bg-purple-300 w-full py-8">
          <div className="mb-4 text-6xl font-bold">Experience.</div>
          <div className="font-medium">
            I love coding for mission-driven companies, supporting the arts,
            local businesses, and healthcare, while creating solutions for
            biomedical research at an NGO.
          </div>
        </div>

        <div className="flex bg-purple-300 w-full h-1/6 mb-4">
          <div className="flex w-1/2 bg-red-500 relative m-2">
            <Image
              src="/images/pclogo.png"
              alt="Population Council Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex w-1/2 bg-yellow-200 p-4 justify-center items-center">
  <div className="flex flex-col justify-center items-center">
    <div className="mb-4 text-3xl font-bold">Population Council</div>
    <div className=" mb-4">Here is my current experience</div>
    <a href="https://www.popcouncil.org" target="_blank" rel="noopener noreferrer">
      <button className="bg-button-bg border-2 border-button-border rounded-xl shadow-custom text-button-text cursor-pointer font-semibold text-lg py-2 px-4 hover:bg-button-hover active:shadow-custom-active active:transform active:translate-x-0.5 active:translate-y-0.5">
        Our Mission
      </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex bg-purple-300 w-full h-1/6 mb-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-1/2 bg-white m-2 border border-gray-300 shadow-md hover:shadow-lg">
            <a href="https://www.mintyz.com/" target="_blank" className="relative w-full h-full">
              <Image
                src="/images/mintyz2.png"
                alt="MintyZ Logo 1"
                layout="fill"
                objectFit="contain"
                className="hover:opacity-75"
              />
            </a>
            <a href="https://www.mordance.org/" target="_blank" className="relative w-full h-full">
              <Image
                src="/images/Mordance.png"
                alt="Mordance Logo"
                layout="fill"
                objectFit="contain"
                className="hover:opacity-75"
              />
            </a>
            <a href="https://virtualhealthpartners.com/" target="_blank" className="relative w-full h-full">
              <Image
                src="/images/vhp.png"
                alt="virtual health partners logo"
                layout="fill"
                objectFit="contain"
                className="hover:opacity-75"
              />
            </a>
            <a href="https://www.mylaurelhealth.com/" target="_blank" className="relative w-full h-full">
              <Image
                src="/images/myLau.jpg"
                alt="myLau Logo"
                layout="fill"
                objectFit="contain"
                className="hover:opacity-75"
              />
            </a>
          </div>
          <div className="flex w-1/2 bg-yellow-200 p-4 justify-center items-center">
  <div className="flex flex-col justify-center items-center">
    <div className="mb-4 text-3xl font-bold">Creative Freelancer</div>
    <div className=" mb-4">
      I build websites for companies I align with. These are four of my favorites.
      Feel free to explore. And if you get hungry, you can always order from MintyZ (if you're in Miami)!
    </div>
    <a href="https://www.mintyz.com/online-ordering/minty-z-coconut-grove/menu" target="_blank" rel="noopener noreferrer">
      <button className="bg-button-bg border-2 border-button-border rounded-xl shadow-custom text-button-text cursor-pointer font-semibold text-lg py-2 px-4 hover:bg-button-hover active:shadow-custom-active active:transform active:translate-x-0.5 active:translate-y-0.5">
        Order food
      </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
        <a 
            href="https://docs.google.com/document/d/13uhL3HTJaAp3LHbVHs5XtiNwL-a00JWUAmne2qKXpCA/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-button-bg border-2 border-button-border rounded-xl shadow-custom text-button-text cursor-pointer font-semibold text-lg py-2 px-4 hover:bg-button-hover active:shadow-custom-active active:transform active:translate-x-0.5 active:translate-y-0.5"
          >
            Download CV
          </a>
          </div>
      </div>
      <div className="bg-yellow-300 h-full" style={{ width: "40%" }}>
        block 3
      </div>
    </section>
  );
}

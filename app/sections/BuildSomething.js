import Link from "next/link";

export default function BuildSomething() {
  return (
    <section
      id="build-something"
      className="h-screen flex  bg-gray-200 border-2 border-green-500"
    >
      <div className="bg-red-300 h-full" style={{ width: "26.5%" }}>
        block 1
      </div>
      <div
        className="flex flex-col bg-blue-200 h-full justify-center items-center"
        style={{ width: "25%" }}
      >
        <div className="mb-4 text-6xl font-bold">Let's work together.</div>
        <div className="w-1/8 border-b-2 mb-8 rounded-md animate-slideIn my-4" style={{ borderBottomWidth: '4px', borderBottomColor: 'green', width: '20%' }}></div>
        <div className="text-justify">
          Full-stack Software Engineer with a strong foundation in software
          development and a passion for creating clean, efficient, and impactful
          products.Experienced in developing applications for various industries.
          Passionate about personal projects and always ready to collaborate on
          cutting-edge initiatives that make a difference.
          Let's create something amazing together!
        </div>
        <Link href="/about" className="bg-button-bg border-2 border-button-border rounded-xl shadow-custom text-button-text cursor-pointer font-semibold text-lg py-2 px-4 hover:bg-button-hover active:shadow-custom-active active:transform active:translate-x-0.5 active:translate-y-0.5" passHref> 
        About me
   
    </Link>

      </div>
      <div className="bg-yellow-300 h-full" style={{ width: "48.5%" }}>
        block 3
      </div>
    </section>
  );
}


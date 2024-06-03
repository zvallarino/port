import Image from "next/image";

export default function Design() {
  return (
    <section
      id="build-something"
      className="h-screen flex bg-gray-200 border-2 bg-green-500 w-full"
    >
      <div className="bg-red-200 w-1/4">Block 1</div>
      <div className="bg-green-200 w-2/4 flex flex-col">
        <div className="bg-blue-400 w-full h-1/2 flex p-4">
          <div className="w-1/2 bg-green-600">Block 1</div>
          <div className="w-1/2 bg-pink-600 flex justify-center items-center">
            <Image
              src="/images/mintyz2.png"
              alt="MintyZ Logo 1"
              layout="intrinsic"
              width={400} // Adjust the width and height as needed
              height={400}
              className="hover:opacity-75"
            />
          </div>
        </div>
        <div className="bg-red-400 w-full h-1/2 flex p-4">
          <div className="w-1/2 bg-purple-600 flex justify-center items-center">
            <Image
              src="/images/mintyz2.png"
              alt="MintyZ Logo 2"
              layout="intrinsic"
              width={400} // Adjust the width and height as needed
              height={400}
              className="hover:opacity-75"
            />
          </div>
          <div className="w-1/2 bg-green-600">Block 2</div>
        </div>
        
      </div>
      <div className="bg-blue-200 w-1/4">Block 3</div>
    </section>
  );
}

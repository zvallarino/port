import Image from "next/image";

export default function Final() {
  return (
    <section
      id="build-something"
      className="h-1/2 flex bg-gray-200 border-2 bg-green-500 w-full"
      style={{ height: "50vh" }}
    >
      <div className="bg-red-200 w-1/4">Block 1</div>
      <div className="bg-yellow-200 w-1/2 h-full">
      <div className="bg-blue-400 w-full h-full flex p-4">
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
      </div>
      <div className="bg-blue-200 w-1/4">Block 3</div>
    </section>
  );
}
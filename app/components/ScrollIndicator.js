export default function ScrollIndicator() {
  return (
    <div className="flex items-center h-full w-full ">
      <div className=" w-1/5"></div>
      <div className=" w-1/5 h-full">
        <div className="flex flex-col h-full items-end">
          <div className="flex flex-col h-full ">
          <div className="flex items-center justify-center w-full h-1/6 bg-orange-200">
          <span className="text-lg text-center animate-bounceSlow">Scroll</span>
            </div>

            <div className="flex items-center justify-center w-full h-5/6 bg-orange-200">
              <div className="w-1 bg-gray-500 h-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5"></div>
    </div>
  );
}

// export default function ScrollIndicator() {
//   return (
//     <div className="flex flex-col items-center h-full bg-red-400 ml-4">
//       <div className="flex items-center justify-center h-1/6 bg-green-300">
//         <span className="text-md animate-bounce">Scroll</span>
//       </div>
//       <div className="w-1 bg-gray-500 h-5/6 rounded-md"></div>
//     </div>
//   );
// }

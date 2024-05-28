// app/components/ScrollIndicator.js
export default function ScrollIndicator() {
    return (
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm">Scroll</span>
        <div className="w-1 h-16 bg-gray-500"></div>
      </div>
    );
  }
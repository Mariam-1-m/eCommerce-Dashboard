import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center">
        <div className="w-16  h-16 rounded-full bg-linear-to-tr from-blue-600 via-sky-400 to-indigo-500 animate-spin blur-[2px]">
          <div className="size-full rounded-full bg-slate-900 m-0.75 w-[calc(100%-6px)] h-[calc(100%-6px)]"></div>
        </div>
        <div className="w-10 absolute h-10 rounded-full border-4 border-double border-sky-400 animate-spin">
          <div className="size-full rounded-full bg-slate-900 m-0.75 w-[calc(100%-6px)] h-[calc(100%-6px)]  "></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;

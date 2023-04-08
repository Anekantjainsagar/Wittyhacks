import React from "react";
import VideoInput from "./Component/videoDisplay";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[100vh]">
      <p className="text-center text-2xl my-2 font-bold">
        Upload the Video here
      </p>
      <VideoInput />
    </div>
  );
};

export default App;

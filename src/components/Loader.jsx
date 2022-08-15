import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          borderTopColor: "transparent",
        }}
        className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

import React from "react";
import HashLoader from "react-spinners/HashLoader";

export const Loader = () => {
  return (
    <div className="loader">
      <HashLoader size={80} color={"#47D2A0"} />
    </div>
  );
};

import React from "react";
import Loader from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div style={{ position: "relative", height: "80vh" }}>
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 100px)",
          left: "calc(50% - 100px)"
        }}
      >
        <Loader type="Bars" color="#212529" height={200} width={200} />
      </div>
    </div>
  );
};

export default PageLoader;

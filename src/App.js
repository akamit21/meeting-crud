import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import Menubar from "./component/common/Menubar";

function App() {
  return (
    <>
      <Menubar />
      <div className="container my-5">
        <Routes />
      </div>
    </>
  );
}

export default App;

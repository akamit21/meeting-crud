import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import Menubar from "./component/common/Menubar";

function App() {
  return (
    <>
      <Menubar />
      <div className="container-fluid px-0">
        <Routes />
      </div>
    </>
  );
}

export default App;

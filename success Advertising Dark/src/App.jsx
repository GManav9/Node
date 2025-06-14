import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router";
// import Mainroutes from "../routes/Mainroutes";
import Mainroutes from "../routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Mainroutes></Mainroutes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./style.module.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;

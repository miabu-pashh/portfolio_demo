import "./App.css";
import NavBar from "./Components/Navbar";
import Routes from "./Components/Routes";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";


function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" />
      <div className="container my-5">
        <TextForm heading="Transform Your Text" />
      </div>
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;

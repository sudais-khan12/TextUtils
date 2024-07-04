import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Info from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" />
      <div className="container my-5">
        <TextForm heading="Transform Your Text" />
      </div>
      <div className="container">
        <Info />
      </div>
    </>
  );
}

export default App;

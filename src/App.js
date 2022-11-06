import "./App.css";
import { useState } from "react";
import fusee from "./img/fusee.png";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <img class="fusee" src={fusee} alt="calculette" />
        <span className="title"> Ready To Go </span>
      </header>

      <div className="bodyButton">
        <div className="Part1">
          <div className="body">
            <button
              className={switch1 ? "inactive" : "active"}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </button>
            <button
              className={switch1 ? "active" : "inactive"}
              onClick={() => {
                setSwitch1(false);
              }}
            >
              OFF
            </button>
          </div>
          <div className="body">
            <button
              className={switch2 ? "inactive" : "active"}
              onClick={() => {
                setSwitch2(true);
              }}
            >
              ON
            </button>
            <button
              className={switch2 ? "active" : "inactive"}
              onClick={() => {
                setSwitch2(false);
              }}
            >
              OFF
            </button>
          </div>
          <div className="body">
            <button
              className={switch3 ? "inactive" : "active"}
              onClick={() => {
                setSwitch3(true);
              }}
            >
              ON
            </button>
            <button
              className={switch3 ? "active" : "inactive"}
              onClick={() => {
                setSwitch3(false);
              }}
            >
              OFF
            </button>
          </div>
        </div>

        <div className="bodyButton2">
          {switch1 === true && switch2 === true && switch3 === true ? (
            <div>
              <h1 className="message1"> Go !</h1>{" "}
            </div>
          ) : (
            <div>
              {" "}
              <h1 className="message2">No way ! </h1>
            </div>
          )}
        </div>
      </div>
      <footer>
        <span>
          {" "}
          Made with <b>React</b> at <b>Le Reacteur</b> by <b>Vivii</b>
        </span>
      </footer>
    </>
  );
}

export default App;

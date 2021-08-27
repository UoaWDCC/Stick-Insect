import React from "react";
import "./App.css";
import logo from "./logo.svg";
import MainPage from "./components/MainPage";
import ConsentPage from "./components/ConsentPage";
import QuestionPage from "./components/QuestionPage";

function App() {
  //const [record, setRecord] = useState([]);
  const [sec, setSec] = useState(10);
  const [background, setbackground] = useState("blue");
  const [stop, setStop] = useState(true);

  useEffect(() => {
    if (sec <= 5) {
      setbackground("red");
    }
    const timer = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);

    if (sec === 0) {
      clearTimeout(timer);
      //setSec("You finish!!");
    }
  });

  return (
    <div className="App">
      <Timer sec={sec} background={background} />
      {/* <ConsentPage /> */}
    </div>
  );
}

export default App;

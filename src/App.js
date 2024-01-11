import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("#bfc0f7");
  const [darkTheme, setDarkTheme] = useState("default");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1200);
  };

  const changeBgColor = (clr) => {
    setBgColor(clr);
    document.body.style.backgroundColor = bgColor;
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      if (darkTheme === "default") {
        changeBgColor("black");
      } else if (darkTheme === "Blue") {
        changeBgColor("#042743");
        // document.body.style.backgroundColor = '#042743';
      } else if (darkTheme === "Green") {
        changeBgColor("#0f5032");
        // document.body.style.backgroundColor = '#0f5032';
      }
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      if (darkTheme === "default") {
        changeBgColor("#bfc0f7");
        // document.body.style.backgroundColor = '#bfc0f7'
      } else if (darkTheme === "Blue") {
        changeBgColor("#c4e9ff");
        // document.body.style.backgroundColor = '#c4e9ff';
      } else if (darkTheme === "Green") {
        changeBgColor("#bcfbc7");
        // document.body.style.backgroundColor = '#bcfbc7';
      }
      showAlert("Dark Mode has been disabled", "success");
    }
  };
  const toggleDarkTheme = (theme) => {
    setDarkTheme(theme);
  };

  if (mode === "dark") {
    if (darkTheme === "default") {
      document.body.style.backgroundColor = "black";
    } else if (darkTheme === "Blue") {
      document.body.style.backgroundColor = "#042743";
    } else if (darkTheme === "Green") {
      document.body.style.backgroundColor = "#0f5032";
    }
    // document.title =
    //   "TextUtils - Word counter | character counter | lowercase to uppercase | uppercase to lowercase | language detector DarkMode";
  } else {
    if (darkTheme === "default") {
      document.body.style.backgroundColor = "#bfc0f7";
    } else if (darkTheme === "Blue") {
      document.body.style.backgroundColor = "#c4e9ff";
    } else if (darkTheme === "Green") {
      document.body.style.backgroundColor = "#bcfbc7";
    }
    // document.title =
    //   "TextUtils - Word counter | character counter | lowercase to uppercase | uppercase to lowercase | language detector";
    // setInterval(()=>document.title = 'its interval time',1500);
    // setInterval(()=>document.title = 'interval over',1000);
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          aboutText="About TextUtils"
          toggleMode={toggleMode}
          toggleDarkTheme={toggleDarkTheme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                  darkTheme={darkTheme}
                />
              }
            />
            <Route
              exact
              path="/TextUtils"
              element={
                <TextForm
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                  darkTheme={darkTheme}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} bgColor={bgColor} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

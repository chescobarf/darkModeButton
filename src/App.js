import React from "react";
import "./App.scss";

const App = () => {
  //State Dark Mode => False to init
  const [darkMode, setDarkMode] = React.useState(false);

  //Search in LocalStorage if have site-dark-mode in True/False
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    //If found the property site-dark-mode True -> set Dark Mode in True
    if (currentMode) {
      setDarkMode(true);
    } 
    //If found the property site-dark-mode False -> set Dark Mode in False
    else {
      setDarkMode(false);
    }
  }, []);

   //Use Effect to Toggle Class Dark -> Add .dark in Body -> in this time have .scss to make the styles "Dark Mode" easy
   React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    console.log(json)
    localStorage.setItem("site-dark-mode", json);

  }, [darkMode]);

  return (
    <div>
      <h1>Dark Mode Simple Button</h1>
      <span>Using: </span>
      <ul>
        <li>UseEffect</li>
        <li>UseState</li>
        <li>LocalStorage</li>
      </ul>
      <div id="DarkToggle" onClick={() => setDarkMode(!darkMode)}>
        <div className="round"></div>
      </div>  
    </div>
  );
};

export default App;
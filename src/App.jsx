import Home from "./components/Home";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [selectedStyle, setSelectedStyle] = useState("1");
  const [styleLink, setStyleLink] = useState("main1");

  useEffect(() => {
    const style = `main${selectedStyle}`;
    setStyleLink(style);
  }, [selectedStyle]);
  return (
    <div className={style[styleLink]}>
      <Home
        selectedStyle={selectedStyle}
        styleLink={styleLink}
        setSelectedStyle={setSelectedStyle}
      />
    </div>
  );
}

export default App;

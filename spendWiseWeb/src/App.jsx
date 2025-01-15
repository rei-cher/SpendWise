import React, {useState} from "react";
import MainScreen from "./screens/MainScreen";
import MenuScreen from "./screens/MenuScreen";


export default function App() {
  const [selectedView, setSelectedView] = useState('Dashboard');
  const [selectedIcon, setSelectedIcon] = useState('Overview');

  return (
    <div className="top-0 m-0 p-0">
      <MainScreen
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
    </div>
  )
}

import { useState } from "react";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(false);
  };
  const handleOpen = () => {
    setVisible(true);
  };
  return (
    <div className="bg_image w-full h-[100vh]">
      <Navbar handleOpen={handleOpen} />
      {visible === true && <Sidebar handleVisible={handleVisible} />}
    </div>
  );
}

export default App;

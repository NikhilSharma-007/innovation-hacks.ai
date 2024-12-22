import { Link } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ChatHistory from "./components/ChatHistory";
import AutomateDesign from "./components/AutomateDesign";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex font-quicksand">
        {/* sidebar */}
        <Sidebar />

        {/* Automate Chat History */}
        <ChatHistory />

        {/* Automate Design */}
        <div className="relative w-[55.62rem] h-[100%] bg-[#1E1E1E]">
          <AutomateDesign />
        </div>
      </div>
    </>
  );
}

export default App;

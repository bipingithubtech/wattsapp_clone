import "./App.css";
import Sidebar from "./component/Sidebar";
import Chats from "./component/Chat";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main"

function App() {
    return (
      <div className="App max-w-[100vw]">
        <Navbar />
        <div className="flex gap-4">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
}

export default App;

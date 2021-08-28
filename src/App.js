import './App.css';
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="App">
      <SideBar
          departamentName="Департамент"
          efficiency={70}
          workload={10}
      />
    </div>
  );
}

export default App;

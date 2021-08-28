import './App.css';
import OrgStructTree from "./components/orgSctructTree";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="App">
      <OrgStructTree/>
      <SideBar
          departamentName="Департамент"
          efficiency={70}
          workload={10}
      />
    </div>
  );
}

export default App;

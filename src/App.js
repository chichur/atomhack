import './App.css';
import OrgStructTree from "./components/orgSctructTree";
import SideBar from "./components/sideBar";
import SearchHeader from "./components/searchHeader";

function App() {
  return (
    <div className="App">
        <SearchHeader/>
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

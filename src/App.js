import './App.css';
import OrgStructTree from "./components/orgSctructTree";
import SideBar from "./components/sideBar";
import ModalCreateTicket from "./components/modalCreateTicket";
import SearchHeader from "./components/searchHeader";
import SearchResult from "./components/searchResult";

function App() {
  return (
    <div className="App">
        <SearchHeader/>
        <SearchResult/>
        <ModalCreateTicket/>
      {/*<OrgStructTree/>*/}
      <SideBar
          departamentName="Департамент"
          efficiency={70}
          workload={10}
      />
    </div>
  );
}

export default App;

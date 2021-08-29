import OrgStructTree from "./orgSctructTree";
import SideBar from "./sideBar";
import ModalCreateTicket from "./modalCreateTicket";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";

function App() {
  return (
    <div className="App">
        <SearchHeader/>
        {/*      <SearchHeader/>
  <SearchResult/>
  <ModalCreateTicket/>*/}
        <OrgStructTree/>
        {/*<SideBar*/}
        {/*    departamentName="Департамент"*/}
        {/*    efficiency={70}*/}
        {/*    workload={10}*/}
        {/*/>*/}
    </div>
  );
}

export default App;

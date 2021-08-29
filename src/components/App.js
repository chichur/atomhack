import OrgStructTree from "./orgSctructTree";
import SideBar from "./sideBar";
import ModalCreateTicket from "./modalCreateTicket";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";

function App() {
  return (
    <div className="App">
        <SearchHeader/>
        {/*<SearchResult/>*/}
        {/*<ModalCreateTicket/>*/}
        <OrgStructTree/>

    </div>
  );
}

export default App;

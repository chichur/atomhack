import OrgStructTree from "./orgSctructTree";
import { Provider } from "redux-zero/react";
import SideBar from "./sideBar";
import ModalCreateTicket from "./modalCreateTicket";
import SearchHeader from "./searchHeader";
import SearchResult from "./searchResult";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

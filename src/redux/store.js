import createStore from "redux-zero";

const initialState = {
  getDepartmentsUrl: 'http://localhost:8000/api/department',

  departments: [],
}
const store = createStore(initialState);

export default store;

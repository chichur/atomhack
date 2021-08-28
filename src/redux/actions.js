const actions = store => ({
  loadData: async (state) => {
    try {
      const {getDepartmentsUrl} = state;
      const response = await fetch(getDepartmentsUrl);
      if (!response.ok)
        throw new Error(response.statusText);
      const json = await response.json();
      console.log(json);
      store.setState({
        departments: json,
      });
    } catch (e) {
      console.error(e);
    }
  },
})

export default actions;

const AllContactReducer = (state = { contact: [] }, actions) => {
  switch (actions.type) {
    case "LOAD":
      return { contact: actions.payload };
    default:
      return state;
  }
};

export default AllContactReducer;

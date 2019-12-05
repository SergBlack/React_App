let initialState = {
  user: [
    { name: "Penin", age: 33, sex: "male" },
    { name: "Lara", age: 23, sex: "female" },
    { name: "Pushkin", age: 66, sex: "male" },
    { name: "show max 3 user online" },
    { name: "show max 3 user online" }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;

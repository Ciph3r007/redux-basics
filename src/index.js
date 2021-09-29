import store from "./store";

console.log(store);
console.log(store.getState());

store.dispatch({ type: "bugAdded", payload: { description: "Bug 1" } });
console.log(store.getState());

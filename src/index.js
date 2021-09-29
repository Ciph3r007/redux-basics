import store from "./store";

// subscriber runs until called explicitly
const unsubscribe = store.subscribe(() =>
  console.log("Store changed to: ", store.getState())
);
store.dispatch({ type: "bugAdded", payload: { description: "Bug 1" } });
unsubscribe();
store.dispatch({ type: "bugRemoved", payload: { id: 1 } });

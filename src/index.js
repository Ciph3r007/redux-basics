import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

// subscriber runs until called explicitly
const unsubscribe = store.subscribe(() =>
  console.log("Store changed to: ", store.getState())
);

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
unsubscribe();
store.dispatch(bugAdded("Bug 2"));

import store from "./store/configureStore";
import * as actions from "./store/bugs";

// subscriber runs until called explicitly
const unsubscribe = store.subscribe(() =>
  console.log("Store changed to: ", store.getState())
);

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugResolved(1));
store.dispatch(actions.bugRemoved(1));
unsubscribe();
store.dispatch(actions.bugAdded("Bug 2"));

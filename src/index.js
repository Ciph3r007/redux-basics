import getStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = getStore();
// subscriber runs until called explicitly
const unsubscribe = store.subscribe(() =>
  console.log("Store changed to: ", store.getState())
);

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugResolved({ id: 2 }));
store.dispatch(actions.bugRemoved({ id: 1 }));
unsubscribe();
store.dispatch(actions.bugAdded({ description: "Bug 3" }));

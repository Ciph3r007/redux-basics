import getStore from "./store/configureStore";
import {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  getBugsByUserId,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = getStore();
// subscriber runs until called explicitly
const unsubscribe = store.subscribe(() =>
  console.log("Store changed to: ", store.getState())
);

store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugResolved({ id: 2 }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(userAdded({ name: "User 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 4, userId: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 3, userId: 3 }));
// unsubscribe();
// store.dispatch(bugAdded({ description: "Bug 100" })); // won't be in subscription

// testing memoization
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x);
console.log(x === y); // returns true

console.log(getBugsByUserId(1)(store.getState()));

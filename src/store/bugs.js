import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

/* Action Creators
 * createAction of redux-toolkit takes 'type' as the argument and
 * returns an action creator function for payload input
 */
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

/* Reducer:
 * reducers with vanilla js requires codes with immutable update pattern.
 * createReducer of redux-toolkit allows writing mutable code,
 * these codes get converted into an immutable update pattern using `immerJS`
 */
// let lastId = 0;
// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   [bugRemoved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs.splice(index, 1);
//   },

//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

/* Slice:
 * redux-toolkit provides slice to pack actions and reducers in a single function
 * it returns an object with reducer and actions as properties for using in store
 */

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],

  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].assignedTo = userId;
    },
  },
});

console.log("Bugs slice: ", slice);

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;
export default slice.reducer;

// Selectors (This will cause rerender even if the state is unchanged)
// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

/* Memoization:
 * This is technique to optimize selectors using cache
 * If state is unchanged, no rerender will occur
 * createSelector takes 1 or more states to watch
 * and uses selector only if the states are changed,
 * else it uses cache to return the result
 */
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs, // state functions can be more than one
  (bugs) => bugs.filter((bug) => !bug.resolved) // result function takes the previous states as input
);

export const getBugsByUserId = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.assignedTo === userId)
  );

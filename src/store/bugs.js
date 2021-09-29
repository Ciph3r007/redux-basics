import { createAction, createReducer } from "@reduxjs/toolkit";

/* Action Creators
 * createAction of redux-toolkit takes 'type' as the argument and
 * returns an action creator function for payload input
 */
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

/* Reducer:
 * reducers with vanilla js requires codes with immutable update pattern.
 * createReducer of redux-toolkit allows writing mutable code,
 * these codes get converted into an immutable update pattern using `immerJS`
 */
let lastId = 0;
export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs.splice(index, 1);
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});

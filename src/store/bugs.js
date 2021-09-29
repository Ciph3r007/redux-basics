import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

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
  },
});

console.log(slice);

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

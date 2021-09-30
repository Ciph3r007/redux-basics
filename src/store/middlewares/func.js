// A custom middleware like thunk to take functions as action

const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") action(dispatch, getState);
    else next(action);
  };

export default func;

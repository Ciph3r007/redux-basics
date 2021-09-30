// A custom middleware like thunk to take functions as action

const func = (store) => (next) => (action) => {
  if (typeof action === "function") action();
  else next(action);
};

export default func;

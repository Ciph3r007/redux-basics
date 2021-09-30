// Middlewares get called after dispatching an action
// and before reaching the root reducer or next middleware
// next() need to be called to pass action forward
const logger = (store) => (next) => (action) => {
  console.log("store: ", store);
  console.log("next: ", next);
  console.log("action: ", action);
};

export default logger;

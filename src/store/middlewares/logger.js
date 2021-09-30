// Middlewares get called after dispatching an action
// and before reaching the root reducer or next middleware
// next() need to be called to pass action forward
const logger = (param) => (store) => (next) => (action) => {
  console.log("From logger: ", param);
  next(action);
};

export default logger;

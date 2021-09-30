import { configureStore } from "@reduxjs/toolkit";
import logger from "./middlewares/logger";
import reducer from "./reducer";

export default function () {
  return configureStore({ reducer, middleware: [logger] });
}

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middlewares/logger";
import func from "./middlewares/func";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger({ destination: "console" }), func],
  });
}

import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducers from "./reducers";
import storage from "./storage";

const persistConfig = {
  key: "beweddy",
  storage,
  whitelist: ["question", "venue", "user", "rsvp", "todoList"],
  // blacklist: ['auth'],
};

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    Object.keys(state).forEach((key) => {
      storage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return rootReducers(state, action);
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

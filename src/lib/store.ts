import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";

const typesToExclude: any[] = [];

const dev =
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test";

const sagaMiddleware = createSagaMiddleware();
const makeStore = (initialState = {}) => {
  const loggerMiddleware = createLogger({
    predicate: (getState: any, action: any) =>
      !typesToExclude.includes(action.type),
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["persist/PERSIST"],
          // Ignore these field paths in all actions
          // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          // Ignore these paths in the state
          // ignoredPaths: ['items.dates'],
        },
      })
        .prepend(sagaMiddleware)
        .concat(loggerMiddleware),
  });

  const persist = persistStore(store, undefined, () =>
    sagaMiddleware.run(rootSaga)
  );

  return { persist, store };
};

export default makeStore;

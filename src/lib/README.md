## Lib / Library

---

This is the section of the code contining the business logic ([saga](./sagas/)) and the logic to store application state ([reducers](./reducers/))

To support sagas and reducers, we also have [actions](./actions/) and [types](./types/)

Othen than that we have a few other files...

1. [appState.ts](./appState.ts)
   - Contains the application state type as a whole.
2. [selectors.ts](./selectors.ts)
   - Contains selectors that sagas and component functions can use to get data from the application state i.e. reducers.
3. [storage.ts](./storage.tsx)
   - Declared how the data is persisted with localStorage.
4. [store.ts](./store.ts)
   - Creates the [react-redux](https://react-redux.js.org/) store along with middlewares like [redux-logger](https://github.com/LogRocket/redux-logger) and [redux-persist](https://github.com/rt2zz/redux-persist)

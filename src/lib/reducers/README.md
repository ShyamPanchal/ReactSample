## Reducers

---

Reducers are files that work with [react-redux](https://react-redux.js.org/) to store and persist data on a application wide scope.

Reducers are created `topic wise` and are not page wise.

Reducers are created within the [reducers](./reducers/) folder.

For Example:

- ❌ samplePageReducer is incorrect ❌
- ✅ userReducer is correct ✅

Once a reducer is created, it needs to be added to the root reducer. To do that, an entry needs to made as shown below in the [index.ts](./index.ts):

```typescript
import specialReducer from "./reducers/specialReducer"; // add this

const config = {
  blacklist: [
    ...,
    "special" // add this
  ],
};

const appReducer = combineReducers({
  ...,
  special: specialReducer, //add this
});
```

Other than this, the [AppState](../appState.ts) must also be updated in [appState.ts](../appState.ts)

```typescript
import { SpecialState } from "./reducers/reducers/specialReducer"; //add this

export type AppState = {
  special: SpecialState; //add this
};
```

Usually each reducer has a 1 to 1 mapping with a saga.

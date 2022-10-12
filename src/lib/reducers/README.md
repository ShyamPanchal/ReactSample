## Reducers

---

Reducers are files that work with [react-redux](https://react-redux.js.org/) to store and persist data on a application wide scope.

Reducers are created `topic wise` and are not page wise.

Reducers are created within the [reducers](./reducers/) folder.

For Example:

- ❌ samplePageReducer is incorrect ❌
- ✅ userReducer is correct ✅

Once a reducer is created, it needs to be added to the root reducer. To do that, an entry needs to made as shown below:

```typescript
import specialReducer from "./reducers/specialReducer"; // add this

const config = {
  blacklist: [
    ...
    "special" // add this
  ],
};

const appReducer = combineReducers({
  ...
  special: specialReducer, //add this
});
```

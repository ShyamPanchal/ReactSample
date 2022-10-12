## Sagas

---

Sagas are generator functions that are used to perform a series of asynchronous tasks in the application.

Checkout [redux-saga](https://redux-saga.js.org/)

Sagas are created `topic wise` and are not page wise.

Sagas are created within the [sagas](./sagas/) folder.

For Example:

- ❌ samplePageSaga is incorrect ❌
- ✅ userSaga is correct ✅

Once a saga is created, it needs to be added to the root saga. To do that, an entry needs to made as shown below in [index.ts](./index.ts):

```typescript
import specialSaga from "./sagas/specialSaga"; // add this

export default function* rootSaga() {
  yield all([
    ...,
    fork(specialSaga), // add this
  ]);
}
```

Usually each saga has a 1 to 1 mapping with a reducer.

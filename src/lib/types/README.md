## Types

---

Types are action types that are called and listened to throughout the application.
The folder contains all the constants for all the actions that can be performed.

These actions are created and grouped by `topic`.

Each Saga / Reducer may have a mapping to a single type file.

For example:

```typescript
export const GET_USER_REQUESTED = "GET_USER_REQUESTED";
```

is an action.

Note the pattern of naming actions `<verb/action>_<topic>_<request/status>`

The action type mentioned in the above example usually is accompanied by 2 other actions, namely,

```typescript
export const GET_USER_SUCCEEDED = "GET_USER_SUCCEEDED";
export const GET_USER_FAILED = "GET_USER_FAILED";
```

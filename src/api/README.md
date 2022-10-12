## API

---

All sections of code that call the api are placed under this folder.

Each file should be created topic wise. In other words, API endpoints, should be grouped by topic.
For example, all user related api endpoints must go under [src/api/user.ts](./user.ts)

A [commons.ts](./commons.ts) file has been created to store any code that is common to all api files. This file contains the get, post, put, delete methods and even constants like API_ENDPOINT. All api files must use these to make api calls.

For example, to call an /items path on the api as a post request the following snippet can be used:

```typescript
import { API_ENDPOINT, postData } from "./commons";

export const callAPI = (data: any) => {
  try {
    return postData(data, API_ENDPOINT + "/items");
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
```

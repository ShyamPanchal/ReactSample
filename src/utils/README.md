## Utils

---

These folder contain application wide use constants including string values and theme values.

There are 2 files and a folder already created within this folder:

- [constants.ts](./constants.ts) : This contains all the constant values like ports, header to content ratios, etc.
- [sample.helper.ts](./sample.helper.ts): This file would contain all the helper functions like filter functions or mapper functions that need to be used within the sample page would be created here. Alternatively, if helper functions are required for a feature instead of a page, a helper file can be created for that feature as well with the name `<feature-name>.helper.ts`
- [theme](./theme/)
  - This folder contains all the files that would be part of the theme of the application. This would contain any `.css` , `scss` files that are part of the theme but would also contain the values and colours and sizes that part of the theme.

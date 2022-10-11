## Pages

---

There are 2 ways to create a page...

1. Component Class

   - Component Classes are used when there the component is relatively big and management of data for rendering is getting long.
   - Component Classes also support Component Lifecycle methods like componentDidMount along with constructors. Checkout [React Component](https://reactjs.org/docs/react-component.html)
   - This is demonstrated with `HomePage` within [src/pages/home/index.tsx](./home/index.tsx)

2. Component Function

   - Component Functions are used when the component is reasonably small and doesn't require to use component lifecycle methods.
   - To access component state and props, react hooks are used. Checkout [React Hooks](https://reactjs.org/docs/hooks-intro.html)
   - This is demonstrated with `SamplePage` within [src/pages/sample/index.tsx](./sample/index.tsx)
   - This is also demonstrated with `Header` within [src/components/header.tsx](../components/header/header.tsx)

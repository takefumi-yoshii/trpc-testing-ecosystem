## trpc-testing-ecosystem

Example of component testing with [tRPC](https://trpc.io/) & [MSW](https://mswjs.io/).  
This example is referring to [this gist](https://gist.github.com/martin-fv/9bad75363245a16c918e112eb6a19f0d).

## Main Point

- Prepare a Provider for testing
- Disable Batching
- Prepare MSW request handler factory function.(for DX)

## Caution

- This example does not support nested tRPC Routers.
- The MSW request handler factory(`trpcMswHandlerFactory`) not support error response. But with a little ingenuity, you can handle it.
- MSW uses a slightly older version, because `msw-storybook-addon` not support latest version.

## Testing

```bash
$ npm test
```

## Storybook

```bash
$ npm run storybook
```

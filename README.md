# autobahn-api-ui

A API Explorer for the [Autobahn API](https://autobahn.api.bund.dev).

## Building

- `npm run start` to start a local server for development.
- `npm run build` to build a production bundle.
- `npm run codegen` to generate the Autobahn API client types.

## Deploying

Push to the `main` branch to deploy to `https://autobahn-api-ui.vercel.app/` via Vercel.

## Implementation Notes

This is a rough implementation of a UI to explore the Autobahn API.

There are still some TODOs:

- Implement robust error handling and display a message helfpul error messages to the user.
- Implement better logging and telemetry.
- Implmement localization, particularly the ability to toggle between German and English documentation.
- Implement integration tests (e.g. with Cypress)
  - And some more unit tests as well
- Improve the styling, as it's quite clunky as of now.

This API implementation relies on the following:

- `create-react-app` from Facebook for the boilerplate React app template.
- `@mui/material` for the basic React components.
- `@openapitools/openapi-generator-cli` for generating the API cilent types from the Autobahn API OpenAPI spec.

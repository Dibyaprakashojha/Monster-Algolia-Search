# Modifications

In `envConfig.js`, change the `indexName`, `applicationId` and `apiKey` as per the Algolia Dashboard Configuration.

Change the `environment.ts` as per the API keys from the Algolia Dashboard Configuration.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment in the Server

Copy the build artifacts stored in the `dist/` directory to the server's `webapp/` directory into a new directory.

Change the `index.html`'s base href to the specific name as the directory name.

Change the `proxyPass` and `reverseProxyPass` in the `httpd.conf` file in the `Apache24\config` directory.

Then restart the `Apache services` from the services.

# AlgoliaMonster

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

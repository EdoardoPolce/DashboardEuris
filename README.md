# Pasticceria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Libraries Used

In this project are used the following libraries:

- chart.js
- angular material
- angular flex layout
- ngx-toaster

Everything else is done with plain typescript.
Angular material was preferred to bootstrap for its standard components integrated in angular and for its base style for the UX/UI.
The angular flex layout was used to implement the flex css logic from the html as angular directives and for the presence of breakpoint so the app can be responsive and add a different behaviour vor various breakpoints from the html templates without using media queries.
Chart.js was required from the project needs.
Ngx-toaster is a library to add toast alert used to integrate the response for the various http calls to clarify the user the result.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# AngularMockSnapshotJest

Helper simple project for snapshot testing an Angular app with isolated component, thanks mocks. 

## Steps:
- Use Jest instead of Jasmine/Karma (see https://jestjs.io/docs/en/testing-frameworks)
- Add ngMocks to have simpler/cleaner/isolated tests (see https://github.com/ike18t/ng-mocks)
- Add `expect(fixture).toMatchSnapshot()` (see https://jestjs.io/docs/en/snapshot-testing)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests.



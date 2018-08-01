# RestaurantOrderingSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Folder Structure

The modified folder structure is inspired by an [Angular 5 article](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7), and gulp JS.

```

│   browserslist
│   favicon.ico
│   index.html
│   karma.conf.js
│   main.ts
│   polyfills.ts
│   styles.scss
│   test.ts
│   tsconfig.app.json
│   tsconfig.spec.json
│   tslint.json
│
├───app                                                 #AppModule
│   │   app-routing.module.ts       
│   │   app.component.html
│   │   app.component.sass
│   │   app.component.spec.ts
│   │   app.component.ts
│   │   app.module.ts
│   │
│   ├───core                                            #CoreModule 
│   │   │   core.module.spec.ts
│   │   │   core.module.ts
│   │   │
│   │   ├───authentication
│   │   │       authentication.service.spec.ts
│   │   │       authentication.service.ts
│   │   │
│   │   ├───guards
│   │   ├───http
│   │   │       api.service.spec.ts
│   │   │       api.service.ts
│   │   │
│   │   ├───interceptors
│   │   ├───mocks
│   │   └───services
│   │           data.service.spec.ts
│   │           data.service.ts
│   │
│   ├───modules                                
│   │   ├───admin
│   │   │       admin.component.spec.ts
│   │   │
│   │   ├───occupant
│   │   │   │   occupant.component.spec.ts
│   │   │   │
│   │   │   ├───occupant-dish-details
│   │   │   │       occupant-dish-details.component.spec.ts
│   │   │   │
│   │   │   └───occupant-menu
│   │   │           occupant-menu.component.spec.ts
│   │   │
│   │   └───receptionist
│   │       │   receptionist.component.spec.ts
│   │       │
│   │       ├───receptionist-assistance
│   │       │       receptionist-assistance.component.spec.ts
│   │       │
│   │       ├───receptionist-dine
│   │       │       receptionist-dine.component.spec.ts
│   │       │
│   │       └───receptionist-order
│   │               receptionist-order.component.spec.ts
│   │
│   └───shared
│       │   shared.module.spec.ts
│       │   shared.module.ts
│       │
│       ├───components
│       ├───directives
│       ├───models
│       └───pipes
├───assets
│   │   .gitkeep
│   │
│   ├───html
│   │       admin.component.html
│   │       occupant-dish-details.component.html
│   │       occupant-menu.component.html
│   │       occupant.component.html
│   │       receptionist-assistance.component.html
│   │       receptionist-dine.component.html
│   │       receptionist-order.component.html
│   │       receptionist.component.html
│   │
│   ├───images
│   ├───partials
│   ├───sass
│   │       admin.component.sass
│   │       occupant-dish-details.component.sass
│   │       occupant-menu.component.sass
│   │       occupant.component.sass
│   │       receptionist-assistance.component.sass
│   │       receptionist-dine.component.sass
│   │       receptionist-order.component.sass
│   │       receptionist.component.sass
│   │
│   └───ts
│           admin.component.ts
│           occupant-dish-details.component.ts
│           occupant-menu.component.ts
│           occupant.component.ts
│           receptionist-assistance.component.ts
│           receptionist-dine.component.ts
│           receptionist-order.component.ts
│           receptionist.component.ts
│
└───environments
        environment.prod.ts
        environment.ts

```


# DashboardTailwindAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```
dashboard-tailwind-angular
├─ .angular
├─ .editorconfig
├─ .postcssrc.json
├─ angular.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ images
│     ├─ 404
│     │  ├─ bg.jpg
│     │  ├─ bg_ori.jpg
│     │  └─ bg_ori.png
│     └─ logos
│        ├─ logo-color.png
│        └─ logo-white.png
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ auth
│  │  │  ├─ auth.component.spec.ts
│  │  │  ├─ auth.component.ts
│  │  │  └─ pages
│  │  │     ├─ change-password
│  │  │     │  ├─ change-password.component.css
│  │  │     │  ├─ change-password.component.html
│  │  │     │  ├─ change-password.component.spec.ts
│  │  │     │  └─ change-password.component.ts
│  │  │     ├─ forgot-password
│  │  │     │  ├─ forgot-password.component.css
│  │  │     │  ├─ forgot-password.component.html
│  │  │     │  ├─ forgot-password.component.spec.ts
│  │  │     │  └─ forgot-password.component.ts
│  │  │     └─ login
│  │  │        ├─ login.component.css
│  │  │        ├─ login.component.html
│  │  │        ├─ login.component.spec.ts
│  │  │        └─ login.component.ts
│  │  ├─ core
│  │  │  ├─ auth
│  │  │  │  ├─ auth.guard.spec.ts
│  │  │  │  ├─ auth.guard.ts
│  │  │  │  └─ dashboard
│  │  │  │     ├─ prevent-login.guard.spec.ts
│  │  │  │     └─ prevent-login.guard.ts
│  │  │  └─ interceptors
│  │  ├─ dashboard
│  │  │  ├─ dashboard.component.css
│  │  │  ├─ dashboard.component.html
│  │  │  ├─ dashboard.component.spec.ts
│  │  │  ├─ dashboard.component.ts
│  │  │  ├─ layout
│  │  │  │  ├─ footer.component.ts
│  │  │  │  ├─ header.component.ts
│  │  │  │  ├─ nav-header.component.ts
│  │  │  │  └─ sidebar
│  │  │  │     ├─ sidebar.component.html
│  │  │  │     ├─ sidebar.component.spec.ts
│  │  │  │     └─ sidebar.component.ts
│  │  │  └─ services
│  │  │     ├─ sidebar
│  │  │     │  ├─ sidebar.service.spec.ts
│  │  │     │  └─ sidebar.service.ts
│  │  │     └─ theme
│  │  │        ├─ theme.service.spec.ts
│  │  │        └─ theme.service.ts
│  │  ├─ models
│  │  │  └─ user.model.ts
│  │  └─ shared
│  │     ├─ components
│  │     │  ├─ alert-modal
│  │     │  │  ├─ alert-modal.component.css
│  │     │  │  ├─ alert-modal.component.html
│  │     │  │  ├─ alert-modal.component.spec.ts
│  │     │  │  └─ alert-modal.component.ts
│  │     │  ├─ dropdown.component.spec.ts
│  │     │  ├─ dropdown.component.ts
│  │     │  └─ page-404
│  │     │     └─ page-404.component.ts
│  │     ├─ directives
│  │     │  ├─ click-outside.directive.spec.ts
│  │     │  └─ click-outside.directive.ts
│  │     └─ pipe
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.css
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```


# UnideAngularNgrx

  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

  

## Development server

  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  

## Code scaffolding

  

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  

## State

State managment is implemented using ngrx library, docs:

https://ngrx.io/docs

  

## TASK

1. Change fetching data from fake-backend to swapi.dev.

	a) Get list of people https://swapi.dev/api/people

	b) Map objects array in response to ```Story``` type:

	```{ storyId: responseObject.height, title: responseObject.name, description: responseObject.gender, createdAt: responseObject.created, updatedAt: responseObject.edited }```

	c) Distribute people between columns evenly - order and column properties of ```Story``` sets its placement in column view. Distribute people between columns evenly.

		Simplified Example:

		Response persons: [1,2,3,4,5,6]

		Column1: [1,5]

		Column2: [2,6]

		Column3: [3]

		Column4: [4]

  

2. Remain all current features.
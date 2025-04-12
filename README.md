# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Create Online Repo

  `git remote add origin https://github.com/pascal-emde/homes-frontend.git`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`

- Start local json server

  `json-server --watch db.json`

- Add a Angular component

  `cd ./src/app`
 
  `ng generate component "component-name" --standalone --inline-template`

  `// ng g c "component-name" --standalone --inline-template`

- Import Angular Material

  `ng add @angular/material`

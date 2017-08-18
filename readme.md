**Friends test project**

Project constists of two parts: 
- Front end
- Backend

To run the project, first you need to compile the front-end part.

**Prequirements**

`node` - bigger than `4.x`

***How to compile Frontend*** 

In `client` directory run 

`npm install` 

`gulp build`

This will compile and glue frontend part using webpack and babel and put result into `server/static` directory

***How to run Backend***

In `server` directory run 

`npm install`

`node index.js`

This will start the server at `localhost:8080`


# PhoneListApp
This project has been created by Mariola Moreno. It's a phone listing created
with Angular and using Redux (ngxr for state management).

## Run in development mode
1. First you have to run the serve to provide the REST API to the application. To run the serve you have type `node server.js` and then, the app will have the mock data in the route `localhost:8080/phones` The app use a Rest Api created in node.js (you can find it in the file "server.js").

2. Run `ng serve -o` (inside /phonelistapp) and go to `http://localhost:4200/`.  
## Build
If you want to build the app for production you have to type `ng build -prod`.

## Important note about load data from http request or from store
First time the app runs, the data is load from an http request to the rest api (remember to run `node server.js`). In the server ('server.js') I use a timeout to forced the server to take 2 seconds to return the data (and use a spinner loader).

In the toolbar you can find two link, both of them load the same component, but this time, instead of make a request, the data will be load from store. If you reload the app, the data wil be load from a http request again

## Docker image
You can find the docker image in https://hub.docker.com/r/marosca/phonelistapp/
To run image remeber not use port 8080 (the project use an api serve in that port). Pe:

docker pull marosca/phonelistapp
docker run -i -t -p 3000:80 phonelistapp:latest

Note: I've include Dockerfile in the root directory to take a look

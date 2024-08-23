## This is the Reconstructed Backend Node App for a ZOHO Environment

This app was developed for client prototyping purposes, specifically to interact with the ZOHO API environment and provide a robust backend for managing ZOHO resources and data integrations.

## Key Features:

- The Node application updates MongoDB periodically (set to every 12 hours).
- It pulls all data from ZOHO Projects, including all respective tasks.
- The app automatically refreshes the `ACCESS_TOKEN` using the `REFRESH_TOKEN` whenever the `ACCESS_TOKEN` expires (valid for 1 hour).
- It provides routes for the frontend application to display project data.

## Server Setup

Here is are the step to setup you node server in a development environment:

1. install Node.js -> https://nodejs.org/en
2. open your application in VS code -> https://code.visualstudio.com
3. install mongoDB server or use mongoDB Atlas -> https://www.mongodb.com
4. open a VS CODE terminal (control+`)
5. type 'npm install' this will install any missing Node modules
6. type 'npm start' to run the server locally, you should see on your terminal a [nodemon] log and other log thats normal
7. if you see :
   """
   Server is running on port 3000
   MongoDB connected
   New Access Token has been generated
   """
   The application is running succesfully.

## API Guide

If you require more connection to ZOHO API, you will need to create a new connection or modify the existing one to include any other ZOHO application you may want to add in your pull scope.

Here is the video I used to setup the connection: https://youtu.be/tUj9twM_Klo
Its a bit weird but it works.

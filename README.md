# Mermories Application

## Introduction
This is a very simple application where you can save their memories as a post, like you do in Instagram and Facebook application.

### Screenshot
[![memories-mern-stack-app.png](https://i.postimg.cc/x895h2D1/memories-mern-stack-app.png)](https://postimg.cc/PpF1v05g)

## Sections
There are two sections present in this application.

#### Posts
In Posts sections, user can see all available posts in this application.

#### Form
* By this Form, user can create a post.

* In this form, user can enter creator name, post title, a message,some tags related to posts, and select a picture from his computer to attach with a post.

* After entering data in all fields, user can click on Submit button.

## Technologies

### Frontend
* Material UI and Icons
* React
* React DOM
* Moment
* React File Base 64
* Redux

### Backend
* Cors
* Body Parser
* Express
* Mongoose


### Working of this application
* Whenever user opens this applicatin, that time this appliation calls an GET api to fetch all available post in MongoDB database.

* If there are any posts available in database, that time all those posts are shown to user in Posts section.

* If there is not any post available in database, that time a message is show to user - "No Post Available".

* To add a post, user has to enter data in all fields of Upload Post form.

* After entering all fields, user clicks on Submit button, that time that post data is being sent to database, where it gets saved.

* After saving a post to database, application gets all posts available in database to show in Posts section.

### How to start this application

* To start this application in your system, you just need to clone this memories application repository in your system.

* After cloning this repo, open it in vs code or your favorite code editor.

* Then install all required packages in both folders client and server by running <code>npm install</code> in terminal.

* Before starting the backend of this application, you must have to add your own mongodb connection string.

* To connect your application to mongodb, just create a <code>.env</code> file in server folder. And in that folder add a variable name <code>CONNECTION_URL</code> and give it your mongo db connection string.

* Now your application is ready to start.

* To start this application, just go to your server folder in terminal, and then run <code>npm start</code> command.

* After starting your server, just open a new terminal, and go to client folder, and then run <code>npm start</code> command.

* Now your app successfully got started.

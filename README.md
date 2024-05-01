## STARTOON_LABS
Why Node JS
Node.js: Node.js provides a lightweight and efficient runtime environment for building server-side applications, making it well-suited for developing RESTful services.

why Express
Express.js: Express.js is a popular web application framework for Node.js, providing a robust set of features for building web servers and APIs. It simplifies the process of defining routes, handling requests, and managing middleware.

why mongodb
MOngoDB: Chosen as the relational database management system for storing event data and manipulating and updating the events data

Why dotenv
dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It's useful for securely managing sensitive information like API keys.

Prerequisites:
1.Node JS installed in system. 2.later installed packages like express,axios and dotenv(npm packages). 3.installed mongoose to interact with database and manage events. 4.I ensure that the api keys,database information i accessed from .env for security. 5.I implemented MVC (Model-View-Controller) architecture it helps organize and structure applications.# startoon_labs

## project Structure
project-root/ │ ├── controllers/ │ └── userController.js|_adminController.js │ ├── models/ │ └── userModel.js │ ├── middileware/ │ |── auth.js | |__ validaton.js / /__admin.js | ├── routes/ │ └── route.js │ ├── data/ │ └── mongoose.js │ ├── .env ├── .gitignore ├── server.js ├── package.json └── README.md

 # API Documents:
Introduction
API provides a user can get events near by him with 14 days of period.

Base URL
Method: POST http:https://startoon-labs-19wl.onrender.com
# Login
Request
Method: post

Endpoint : /user/signIn  Response HTTP/1.1 200 OK
Status: 200 Successfull Login Content-Type: application/json
parameters:
{
    "identifier": "sai",
    "password": "sai@@123"
}
# Register
Request
Method : post
 EndPoint : /user/signup 
parameters:
{
    "name":"sai",
    "email":"saiganesh1@gmail.com",
    "password":"sai@@123",
    "gender":"male"
}

# user Profile Details
Request
Method : get
 EndPoint : /user/profile
header:
authorization bearer token

#admin login
Request
Method : post
 EndPoint : /admin/login 
parameters:
{
    "email": "admin@email.com",
    "password": "Admin@123"
}

# dashboard
Request
Method : get
 EndPoint : /admin/dashboard
header:
authorization bearer token

# search api for users
Request
Method : get
 EndPoint : /admin/search
params:
name:sai
header:
authorization bearer token




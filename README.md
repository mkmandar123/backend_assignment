
<h1 align="center">NodeJS app for managing long running tasks</h1></br>

<p align="center">
:eyeglasses: NodeJS backend with APIs to execute long running tasks and stop them in between
</p>
<br>

<br>
<p align="center">

</p><br>

## Instructions

1. This repository has **Dockerfile**, so you can create docker image by running docker build command.
2. The app.js contains **PORT** variable which is set to 8080, you can modify if needed.
3. Once app is started you can send **GET** request to **/longTask** endpoint to start long running task.
4. You will see the **PID** for long running task, if you want to stop that task you can pass that **PID** to **/killprocess/:pid** endpoint.
## API Endpoints

This app provides two APIs:
- /longTask (This endpont will start a long task as child process)
- /killprocess/:pid (Here you can specify the id of process which you want to stop)


## Use Case

You can use this to execute and stop long running tasks


## References used:

* [NodeJS Docs](https://nodejs.org/api/process.html) To understand how the process work in NodeJS.
* [NodeJS Docker Docs](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) To understand how to create docker image for the app.



## :computer: Thank You

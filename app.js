const express = require('express');
const app = express();
const execFile = require('child_process').execFile;
const PORT = 8080; //change if needed

//this endpoint will start an long running childprocess
app.get('/longTask', () => {

    // this will execute longTask.js file which will mimic a long running task
   const child = execFile('node',['./longTask.js'], function(error, stdout, stderr) {
        console.log('stderr: ', stderr);
        if (error !== null) {
            console.log('exec error: ', error);
        }
    });

   //this will give us pid of child process
   child.stdout.on('data', (data) => {
       console.log(data.toString());
   });
});

// if we want to kill the long running task, we will pass pid of child process to this endpoint and it will stop the process
app.get('/killprocess/:id', (req, res) => {
    console.log(process.kill(req.params.id));
    console.log('SuccessFully killed process', req.params.id);
})

// running our app on port 3000
app.listen(PORT, ()=> {
    console.log(`App started on ${PORT}`);
});

const express = require('express');
const api = require('./routes/api.route');
const bodyParser = require('body-parser'); 
const path = require('path');
const mongoose = require('mongoose');
const TaskModel = require('./models/task.model');


// This is my default todolist 
// We will insert it in the database
var todos = [
  {
      'title':'Learn what is angular, node',
      'completed': false
  },    
  {
      'title':'How to use angular',
      'completed': false
  },
  {
      'title':'Create server in node, app in angular',
      'completed': false
  },
  {
      'title':'Create database and connect to server',
      'completed': false
  }
 ];


// Mongoose connection to mongoDB
const mongoDB = 'mongodb://localhost:27017/MYDB';
mongoose.connect(mongoDB, {useNewUrlParser: true}, (error)=> {
 if(!error){
     console.log("Connection success to MYDB");


     // Insert the default todolist in mongoDB
      for(var i=0; i<todos.length; i++){
    
        var default_list = new TaskModel(todos[i]);

        default_list.save(function (err,item) {
          if (err) { 
            console.log(err); 
          }
          console.log("Item created in database : "+item.title);
        });

      };

    
 } else {
     console.log("Error connecting to MYDB");
 }
});

// Express creates HTTP server
const app = express();

// app.use is a middelware
// Each app.use(middleware) is called every time a request is sent to the server.
app.use(express.static('to-do-list'))
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

// The api of the application
app.use('/api', api);

// Route that serve static files
app.get('/', function (req, res) { 
  res.sendFile(path.resolve('to-do-list/index.html')); 
});

let port = 8000;

// Now we can start the server 
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

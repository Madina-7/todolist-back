const TaskModel = require('../models/task.model');



// This is my default todolist 
// We will insert it in the database
exports.todos = [
  {
      'title':'Learn what is angular, node',
      'completed': false,
      'id':14548545
  },    
  {
      'title':'How to use angular',
      'completed': false,
      'id':24564
  },
  {
      'title':'Create server in node, app in angular',
      'completed': false,
      'id':31489564
  },
  {
      'title':'Create database and connect to server',
      'completed': false,
      'id':4156496546
  }
 ];

     /*
     var awesome_instance = new TaskModel({
        'title':'Learn what is angular, node',
        'completed': false,
        'id':1222});

        awesome_instance.save(function (err) {
          if (err) {console.log(err);}

          console.log("saved !")
          // saved!
        });
    */

    /*
    TaskModel.find({id: 1222 }, function (err, todo) {
      if (err) { return handleError(err); };
      console.log(todo[0]);

      todo[0].title = "youpi";
      todo[0].save();
    });

   TaskModel.find({id:1222}).remove(function(){
    console.log("item deleted");
  }); 
    */

exports.get = function (req, res) {

  TaskModel.find({}, function (err, todos) {
    if (err) { return handleError(err); };
    res.json(todos);
  });

}; 

exports.create = function(req, res) {

  var new_item = new TaskModel(req.body);

    new_item.save(function (err,item) {
      if (err) {
        console.log(err);
        return res.json(err);
      } else {
        console.log("New item is saved !")
        res.json(item);
      }

    });
  }
     /*
      OLD VERSION of CREATE
      let newitem =  req.body;
      exports.todos.push(newitem);
      res.json(exports.todos);
    */


exports.update = function(req, res) {

  var id = req.body.id;
  var task_to_update = req.body;
  TaskModel.find({id: id}, function (err, todos) {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      console.log(todos[0]); //find an object
      todos[0].title = task_to_update.title;
      todos[0].completed = task_to_update.completed;
      todos[0].save();
      res.json(todos[0]);
    }
  });
  
  }
    /* 
    OLD VERSION ON UPDATE
    // get the id of el to update by using req
    var id = req.body.id;
    for (var i = 0; i < exports.todos.length; i++){
      if (id==exports.todos[i].id){
         exports.todos[i] = req.body;
      }
    }
    res.json(exports.todos)
    */


exports.delete = function(req, res) {

  var id = req.query.taskid;
  TaskModel.find({id:id}).remove(function(err,tasks){
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      console.log("item deleted");
      res.json(tasks[0]);
    }
  });
   
}

// DELETE OLD VERSION
// var id = req.body.id;
//   for (var i = 0; i < exports.todos.length; i++){
//     if (id==exports.todos[i].id){
//       exports.todos.splice(i, 1);
//     }
//   }
//     res.json(exports.todos);
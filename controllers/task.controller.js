const TaskModel = require('../models/task.model');

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

exports.update = function(req, res) {

  var _id = req.body._id;
  var task_to_update = req.body;
  TaskModel.find({_id: _id}, function (err, todos) {
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

exports.delete = function(req, res) {

  var taskid = req.query.taskid;
  TaskModel.find({_id:taskid}).remove(function(err,tasks){
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      console.log("item deleted");
      res.json(tasks[0]);
    }
  });
   
}

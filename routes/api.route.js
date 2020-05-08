/* Here we keep the JS files that are responsible for calling 
   functions based on the route a user requests.*/

const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const task_controller = require('../controllers/task.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/task', task_controller.get);
router.post('/task', task_controller.create);
router.put('/task', task_controller.update); 
router.delete('/task', task_controller.delete);

// TODO on the front to get task list
// HTTP GET localhost:8000/api/task -> exports.get() -> returns list

module.exports = router;
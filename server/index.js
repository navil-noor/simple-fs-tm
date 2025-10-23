// server/index.js

const express = require('express');
const db = require('./db'); // <-- Import the initialized Knex database connection

const app = express();
const port = 5000;

// MIDDLEWARE: Required for Express to parse JSON data sent in the request body
app.use(express.json());

// ------------------------------------
// 1. GET: Fetch All Tasks
// Route: /api/tasks (via proxy from Next.js)
// ------------------------------------
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await db('tasks').select('*'); // Selects all tasks
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to retrieve tasks.' });
  }
});

// ------------------------------------
// 2. POST: Create a New Task
// Route: /api/tasks
// ------------------------------------
app.post('/tasks', async (req, res) => {
  // Check if a title was provided in the request body
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Task title is required.' });
  }

  try {
    // Inserts the task and returns the ID of the new task
    const [id] = await db('tasks').insert({ title: title }); 
    
    // Fetch the newly created task to return to the client
    const newTask = await db('tasks').where({ id }).first();
    res.status(201).json(newTask); // 201 Created status
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task.' });
  }
});


// ------------------------------------
// 3. PUT: Toggle Task Completion
// Route: /api/tasks/:id
// ------------------------------------
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    // Fetch the current task state
    const currentTask = await db('tasks').where({ id: taskId }).first();

    if (!currentTask) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    // Determine the new completion status (toggle it)
    const newIsCompleted = !currentTask.is_completed;
    
    // Update the task status in the database
    await db('tasks').where({ id: taskId }).update({ is_completed: newIsCompleted });

    // Fetch and return the updated task
    const updatedTask = await db('tasks').where({ id: taskId }).first();
    res.json(updatedTask);

  } catch (error) {
    console.error(`Error updating task ${taskId}:`, error);
    res.status(500).json({ error: 'Failed to update task.' });
  }
});


// ------------------------------------
// 4. DELETE: Delete a Task
// Route: /api/tasks/:id
// ------------------------------------
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const rowsDeleted = await db('tasks').where({ id: taskId }).del();

    if (rowsDeleted === 0) {
      return res.status(404).json({ error: 'Task not found.' });
    }
    
    // Send a 204 No Content status, which is standard for successful deletions
    res.status(204).send(); 
  } catch (error) {
    console.error(`Error deleting task ${taskId}:`, error);
    res.status(500).json({ error: 'Failed to delete task.' });
  }
});


// ------------------------------------
// Server Start
// ------------------------------------
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
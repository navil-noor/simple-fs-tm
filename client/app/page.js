// client/app/page.js

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ListGroup, Spinner, Alert } from 'react-bootstrap';
import TaskForm from '../components/TaskForm'; // Import the form component
import TaskItem from '../components/TaskItem'; // Import the item component

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all tasks from the API
  // useCallback memoizes this function, which is good practice for functions passed to useEffect
  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // GET request to /api/tasks (proxied to http://localhost:5000/tasks)
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks. Is the Express server running?");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); // fetchTasks is a dependency, but useCallback prevents unnecessary re-runs

  // This function is passed to the child components (TaskForm, TaskItem)
  // When a child action (create, update, delete) occurs, it triggers a list refresh.
  const handleTaskAction = () => {
    fetchTasks();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="text-center mb-4">Simple Task Manager</h1>
      
      {/* 1. Task Creation Form */}
      <TaskForm onTaskCreated={handleTaskAction} />

      {/* 2. Loading and Error States */}
      {loading && <div className="text-center"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* 3. Task List */}
      <ListGroup>
        {!loading && tasks.length === 0 && (
          <Alert variant="info" className="text-center">No tasks found. Add one above!</Alert>
        )}
        
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskUpdated={handleTaskAction}
            onTaskDeleted={handleTaskAction}
          />
        ))}
      </ListGroup>
    </div>
  );
}
// client/components/TaskItem.js

import React from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';

export default function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  
  // Handlers for interacting with the API
  
  const handleToggle = async () => {
    try {
      // PUT request to toggle the task status
      await axios.put(`/api/tasks/${task.id}`);
      // Notify the parent component to refresh the list
      onTaskUpdated(); 
    } catch (error) {
      console.error('Error toggling task:', error);
      alert('Failed to update task.');
    }
  };

  const handleDelete = async () => {
    try {
      // DELETE request to remove the task
      await axios.delete(`/api/tasks/${task.id}`);
      // Notify the parent component to refresh the list
      onTaskDeleted();
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task.');
    }
  };

  return (
    <ListGroup.Item 
      className="d-flex justify-content-between align-items-center"
      variant={task.is_completed ? 'success' : 'light'} // Change color based on status
    >
      <span 
        style={{ textDecoration: task.is_completed ? 'line-through' : 'none' }}
        className="flex-grow-1"
      >
        {task.title}
      </span>
      
      <div>
        {/* Button to toggle completion status */}
        <Button 
          variant={task.is_completed ? 'secondary' : 'success'} 
          size="sm" 
          onClick={handleToggle} 
          className="me-2"
        >
          {task.is_completed ? 'Undo' : 'Complete'}
        </Button>
        
        {/* Button to delete the task */}
        <Button 
          variant="danger" 
          size="sm" 
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
} 

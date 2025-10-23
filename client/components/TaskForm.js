// client/components/TaskForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';

// TaskForm accepts a function (onTaskCreated) from its parent to refresh the task list
export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission/page reload

    if (!title.trim()) {
      alert('Task title cannot be empty.');
      return;
    }

    try {
      // POST request to the API (proxied by Next.js)
      await axios.post('/api/tasks', { title });
      
      // Clear the input field
      setTitle('');

      // Notify the parent component (page.js) to re-fetch the task list
      onTaskCreated(); 
      
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to add task.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </InputGroup>
    </Form>
  );
} 

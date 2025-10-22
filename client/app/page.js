// client/app/page.js

// Client-side functionality (hooks), so this is marked as Client Component
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState("Connecting to server...");

  // useEffect runs once after the component mounts
  useEffect(() => {
    // Calling the API route via the proxy: /api/ will be forwarded to http://localhost:5000/
    axios.get('/api/')
      .then(response => {
        // If successful, update the state with the server's message
        setMessage("Server Message: " + response.data);
      })
      .catch(error => {
        // If there's an error (e.g., server is down), show the error
        console.error("API Error:", error);
        setMessage("ERROR: Could not connect to the Express server.");
      });
  }, []); // The empty array ensures this runs only once

  return (
    <div>
      {/* Display the message state */}
      <h1>{message}</h1>
      <p className="text-muted">
        If you see "Server Message: Hello from the Express Server!", the full-stack connection is successful!
      </p>
    </div>
  );
}
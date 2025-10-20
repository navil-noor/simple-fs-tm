// import express
const express = require('express')

//creating application instance
const app = express()

// defining the port 
const port = 5000

// adding default route
app.get('/', (req, res) => {
    res.send("Hello from the Express Server!")
})

// starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
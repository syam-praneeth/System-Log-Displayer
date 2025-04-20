// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');
// const fs = require('fs');
// const path = require('path');
// const { Tail } = require('tail'); // tail reads in utf-8 by default, but we'll be explicit

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = socketIo(server, { cors: { origin: "*" } });

// // MongoDB Connection URL and Database Name
// const mongoUrl = 'mongodb://localhost:27017';
// const dbName = 'logsDB';
// let db;

// MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(client => {
//     console.log("Connected to MongoDB");
//     db = client.db(dbName);
//   })
//   .catch(err => console.error("MongoDB connection error:", err));

// // API endpoint to retrieve archived logs from MongoDB
// app.get('/logs', async (req, res) => {
//   try {
//     const logs = await db.collection('logs').find({}).toArray();
//     res.json(logs);
//   } catch (error) {
//     res.status(500).json({ error: "Unable to fetch logs" });
//   }
// });

// // API endpoint to read the entire custom.log file in UTF-8
// app.get('/raw-log', (req, res) => {
//   fs.readFile(logFilePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error("Error reading raw log:", err);
//       return res.status(500).send('Failed to read log file.');
//     }
//     res.send(data);
//   });
// });

// // Socket.IO connection
// io.on('connection', (socket) => {
//   console.log("New client connected");

//   socket.on('disconnect', () => {
//     console.log("Client disconnected");
//   });
// });

// // Define the path to your custom log file
// const logFilePath = path.join(__dirname, 'custom.log');

// // Ensure the log file exists (create it if it doesn't)
// if (!fs.existsSync(logFilePath)) {
//   fs.writeFileSync(logFilePath, '', 'utf8');
//   console.log('Created new log file:', logFilePath);
// }

// // Create a Tail instance with explicit UTF-8 encoding
// const tail = new Tail(logFilePath, { encoding: 'utf-8' });

// // Watch for new lines in the log file
// tail.on("line", function(data) {
//   const logEntry = {
//     message: data,
//     timestamp: new Date()
//   };
//   console.log("Emitting log entry:", logEntry);

//   // Emit to connected clients
//   io.emit('log', logEntry);

//   // Store in MongoDB
//   if (db) {
//     db.collection('logs').insertOne(logEntry)
//       .catch(err => console.error("Error saving log to MongoDB:", err));
//   }
// });

// // Handle tailing errors
// tail.on("error", function(error) {
//   console.error("Error reading log file:", error);
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/logs', (req, res) => {
  fs.readFile('custom.log', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading log file');
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle React routing (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/home.html')); // Serve renamed `home.html`
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

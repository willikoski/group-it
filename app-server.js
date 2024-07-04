const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use((req, res, next) => {
    res.locals.data = {}; // Initialize res.locals.data
    next();
});
app.use(logger('dev')); // Logging
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png'))); // Favicon
app.use(express.static(path.join(__dirname, 'public'))); // Static files

// Routes
// app.use('/api/todos', require('./routes/api/todos')); // Example todos route
app.use('/api/users', require('./routes/api/users')); // User routes for signup, login, forgot-password

// Default route (serve index.html for SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;

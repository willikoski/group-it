const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const checkTokenMiddleware = require('./config/checkToken');
const usersRouter = require('./routes/api/users');


const app = express();
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use((req, res, next) => {
    res.locals.data = {}; // Initialize res.locals.data
    next();
});
app.use(logger('dev')); // Logging
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png'))); // Favicon
app.use(express.static(path.join(__dirname, 'public')));

// Redirect trailing slash to non-trailing slash for all routes
// app.use((req, res, next) => {
//     if (req.path !== '/' && req.path.endsWith('/')) {
//         const query = req.url.slice(req.path.length);
//         res.redirect(301, req.path.slice(0, -1) + query);
//     } else {
//         next();
//     }
// });

// Routes
app.use(checkTokenMiddleware);
app.use('/api/users', usersRouter); // User routes for signup, login, forgot-password

// Default route (serve index.html for SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error in request:', err);
    res.status(500).send('Something went wrong');
});

module.exports = app;
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const api = require('./routes/api');

const app = express();


// Global Middlewares
app.use(cors({
    origin: '*'
}));

// let allowedDomains = ['http://localhost:3000', 'gatewayIP'];
// app.use(cors({
//   origin: function (origin, callback) {
//     // bypass the requests with no origin (like curl requests, mobile apps, etc )
//     if (!origin) return callback(null, true);
 
//     if (allowedDomains.indexOf(origin) === -1) {
//       var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(morgan('combined')); // a middleware for logging requests
app.use(express.json());
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

app.use(express.static(path.join(__dirname, '..', 'public'))); // Serving the frontend

// API Router Middleware
app.use('/api', api);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
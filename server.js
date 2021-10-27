const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on rotues
app.use(routes);

// turn on connection to the db and server 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});
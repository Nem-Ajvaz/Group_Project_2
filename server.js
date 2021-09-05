// Required functionality
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const cors = require('cors');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const { initSocketServer } = require('./socketServer.js');

const app = express();
const SERVER_PORT = process.env.PORT || 3001;

const server = http.createServer(app);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(routes);

(async () => {
  await sequelize.sync({ force: false });
  app.listen(SERVER_PORT, () => {
    console.log('Now listening Sequelize Live!!!');
    initSocketServer(server);
  });
})();

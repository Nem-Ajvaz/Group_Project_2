// Required functionality
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http');
const socket = require('socket.io');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const SERVER_PORT = process.env.PORT || 3001;
const SOCKET_PORT = process.env.PORT || 4001;

// Initialize socket.io
const server = http.createServer(app);
const io = socket(server);

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 36000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));
app.use(morgan());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

(async () => {
  await sequelize.sync({ force: false })
  app.listen(SERVER_PORT, () => {
    console.log('Now listening Sequelize Live!!!')

    server.listen(SOCKET_PORT, () =>
      console.log(`Server running on port ${SOCKET_PORT}. Socket.io is live!!!`)
    );
  });
})()

module.exports = {io};
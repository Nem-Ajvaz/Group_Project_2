// Required functionality
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const morgan = require('morgan');

// Socket.io functionality
const http = require('http');
const socket = require('socket.io');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

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

sequelize.sync({ force: false }).then(() => {
  app.listen(SERVER_PORT, () => console.log('Now listening Sequelize Live!!!'));
  server.listen(SOCKET_PORT, () =>
    console.log(`Server running on port ${SOCKET_PORT}. Socket.io is live!!!`)
  );
});


// Required functionality

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const logger = require('morgan');

// Socket.io functionality
const http = require('http');
const socket = require('socket.io');



// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


// Initialize socket.io

const server = http.createServer(app);
const io = socket(server),

// Configure and link a session object with the sequelize store
const sess = {
    secret: 'Super secret secret',
    cookie: {maxAge: 36000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
// Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(morgan('tiny'));

// Socket.io server side operations







sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening Sequelize Live!!!'));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}. Socket.io is live!!!`));



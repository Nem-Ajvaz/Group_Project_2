// Required functionality
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
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

const sess = {
  secret: 'Super secret secret',
  // cookie: { maxAge: 300, httpOnly: true, secure: false, sameSite: 'strict' },
  rolling: true,
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//To test session and session IDS
app.get('/session', (req, res) => {
  console.log(req.session);
  res.send('hello mate');
});

app.use(cors());
app.use(routes);

(async () => {
  await sequelize.sync({ force: false });
  app.listen(SERVER_PORT, () => {
    console.log('Now listening Sequelize Live!!!');
    initSocketServer(server);
  });
})();

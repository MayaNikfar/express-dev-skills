const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const skillsRouter = require('./routes/skills');
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);

app.use('/skills', skillsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// Index Route
app.get('/skills', (req, res) => {
  res.render('index', { skills });
});

// Show Route
app.get('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const skill = skills.find(skill => skill.id === id);
  res.render('show', { skill });
});

// New Route (Form to add skill)
app.get('/skills/new', (req, res) => {
  res.render('new');
});

// Create Route (Add skill to database)
app.post('/skills', (req, res) => {
  const { name } = req.body;
  const id = skills.length + 1;
  skills.push({ id, name });
  res.redirect('/skills');
});
// Update Route
app.put('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  // Find the skill in the "database"
  const skillIndex = skills.findIndex(skill => skill.id === id);
  if (skillIndex !== -1) {
      // Update the skill
      skills[skillIndex].name = name;
      res.redirect(`/skills/${id}`);
  } else {
      res.status(404).send("Skill not found");
  }
});
// Delete Route
app.delete('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  skills = skills.filter(skill => skill.id !== id);
  res.redirect('/skills');
});

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8080)
module.exports = app;

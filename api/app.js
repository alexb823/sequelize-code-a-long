const express = require('express');
const { models } = require('../db/index');
const app = express();

//send array of task objects with only name ad difficulty
// app.get('/tasks', (req, res, next) => {
//   models.Task.findAll()
//     .then(tasks => {
//       res.send(
//         tasks.map(({ name, difficulty }) => {
//           return { name, difficulty };
//         }),
//       );
//     })
//     .catch(next);
// });

//send array of task objects
app.get('/tasks', (req, res, next) => {
  models.Task.findAll()
    .then(tasks => res.send(tasks))
    .catch(next);
});

app.get('/tasks/:id', (req, res, next) => {
  const id = req.params.id;

  if (typeof id === 'string') {
    models.Task.findByPk(parseInt(id), { include: [models.Project] }).then(
      task => {
        if (!task) {
          res.sendStatus(404);
        } else {
          const { name, difficulty, project } = task;
          res.send({
            task: {
              name,
              difficulty,
              project: {
                name: project.name,
                date: project.date,
              },
            },
          });
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
});

app.get('/projects/:id', (req, res, next) => {
  const id = req.params.id;

  if (typeof id === 'string') {
    models.Project.findByPk(parseInt(id), { include: [models.Task] }).then(
      project => {
        if (!project) {
          res.sendStatus(404);
        } else {
          res.send(project);
        }
      }
    );
  } else {
    res.sendStatus(404);
  }
});

app.get('/projects', (req, res, next) => {
  models.Project.findAll()
    .then(projects => res.send(projects))
    .catch(next);
});
module.exports = app;

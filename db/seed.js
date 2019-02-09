const { Project, Task } = require('./models');
const { initDb } = require('./index');

initDb(true)
  .then(() => {
    const creatProject = Project.create({
      name: 'Sequelize Workshop',
      date: new Date(),
    });
    const creatTasks = Promise.all([
      Task.create({ name: 'Lacture', difficulty: 3 }),
      Task.create({ name: 'Live Coding', difficulty: 10 }),
    ]);

    return Promise.all([creatProject, creatTasks]);
  })
  .then(([project, tasks]) => {
    // const [lecture, liveCode] = tasks;
    return project.setTasks(tasks);
  })
  .then(() => {
    console.log('I have seeded the database.');
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

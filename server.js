const {initDb} = require('./db/index');
const server = require('./api/app');

const port = process.env.PORT || 3000;

initDb()
  .then(() => {
    server.listen(port, () => {
      console.log('Server is listening!');
    });
  })
  .catch(e => {
    console.log(e);
    process.exit(1);
  });


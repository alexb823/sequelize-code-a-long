const initDb = require("./db");

initDb()
.then(()=> {
    console.log('DB is connected!')
})
.catch((e) => {
  console.log('DB did not connect!');
  console.error(e);
});

const db = require("./db");
const { Project, Task } = require("./models")

const initDb = (force = false) => {
    return db
        .authenticate()
        .then(() => {
            Project.hasMany(Task);
            Task.belongsTo(Project);
            
            return db.sync({force});
        })
};

// sequelize.sync({force: true});

// process.exit(0);

module.exports = initDb;
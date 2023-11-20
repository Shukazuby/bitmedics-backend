const Sequelize = require('sequelize');
const { sequelize } = require('../config/config');
const logger = require('../config/logger');

const sequelizeInstance = new Sequelize(sequelize.url);
const db = {};

/*
const sequelizeInstance = new Sequelize(sequelize.database, sequelize.user, sequelize.password, {
  host: sequelize.host,
  dialect: sequelize.dialect,
  pool: {
    min: 0,
    max: 100,
    acquire: 5000,
    Idle: 1000
  },
});
*/
sequelizeInstance
  .authenticate()
  .then(() => logger.info('DB connected'))
  .catch((err) => {
    logger.error(err);
  });

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.users = require('./user.model')(sequelizeInstance, Sequelize);
db.tokens = require('./token.model')(sequelizeInstance, Sequelize);
// db.teachers = require('./teacher.model')(sequelizeInstance, Sequelize);
// db.subjects = require('./subject.model')(sequelizeInstance, Sequelize);
// db.teachers_subjects = require('./teacher_subject.model')(sequelizeInstance, Sequelize);
db.doctors = require('./doctors.model')(sequelizeInstance, Sequelize);
db.hospitalAdmins = require('./hospital-admins.model')(sequelizeInstance, Sequelize);
db.roles = require('./roles.model')(sequelizeInstance, Sequelize);
db.hospitals = require('./hospitals.model')(sequelizeInstance, Sequelize);
db.hospitalSpecialties = require('./hospital-specialties.model')(sequelizeInstance, Sequelize);
db.doctorCertifications = require('./doctors-certification.model')(sequelizeInstance, Sequelize);
db.payments = require('./payment.model')(sequelizeInstance, Sequelize);
db.appointments = require('./appointments.model')(sequelizeInstance, Sequelize);
db.patients = require('./patients.model')(sequelizeInstance, Sequelize);
db.medicalHistory = require('./medicalHistory.model')(sequelizeInstance, Sequelize);



// Relationships For Models

// One-to-one Relationship

// db.users.hasOne(db.teachers);
// db.teachers.belongsTo(db.users);

db.hospitals.hasOne(db.users);
db.users.belongsTo(db.hospitals);

db.hospitals.hasOne(db.payments);
db.payments.belongsTo(db.hospitals);


db.hospitalAdmins.hasOne(db.users);
db.users.belongsTo(db.hospitalAdmins);

db.hospitalAdmins.hasOne(db.hospitals);
db.hospitals.belongsTo(db.hospitalAdmins);

db.patients.hasOne(db.appointments);
db.appointments.belongsTo(db.patients);

db.medicalHistory.hasOne(db.appointments);
db.appointments.belongsTo(db.medicalHistory);


// One-to-Many Relationship

db.users.hasMany(db.roles);
db.roles.belongsTo(db.users);

db.hospitalAdmins.hasMany(db.appointments);
db.appointments.belongsTo(db.hospitalAdmins);

db.hospitals.hasMany(db.doctors);
db.doctors.belongsTo(db.hospitals);


db.hospitalSpecialties.hasMany(db.hospitals);
db.hospitals.belongsTo(db.hospitalSpecialties);

db.doctors.hasMany(db.doctorCertifications);
db.doctorCertifications.belongsTo(db.doctors);

// Many-to-many Relationship

// db.teachers.belongsToMany(db.subjects, { through: db.teachers_subjects });
// db.subjects.belongsToMany(db.teachers, { through: db.teachers_subjects });

// db.hospitals.hasOne(db.payments);
// db.payments.belongsTo(db.hospitals);

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Role);
// db.Role.belongsTo(db.User);

module.exports = {
  db,
};

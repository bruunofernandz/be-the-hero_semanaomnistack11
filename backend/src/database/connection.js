const kenx = require("knex");
const config = require("../../knexfile");

const configuration =
  process.env.NODE_ENV === "test" ? config.test : config.development;

const connection = kenx(configuration);

module.exports = connection;

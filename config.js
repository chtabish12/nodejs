require("./constants");

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  },
};
module.exports = config;

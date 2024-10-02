// next.config.js
module.exports = {
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_SCHEMA: process.env.DB_SCHEMA,
  },
};

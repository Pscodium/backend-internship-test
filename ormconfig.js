require('dotenv').config();

module.exports = {
  type: 'postgres',
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: [
    process.env.MIGRATIONS_DIR,
  ],
  entities: [
    process.env.ENTITIES_DIR,
  ],
  cli: {
    migrationsDir: process.env.MIGRATIONS_CLI_DIR,
  },
};

const development = {
  database: 'mindtree',
  username: 'root',
  password: 'root',
  host: '127.0.0.1',
  dialect: 'mariadb',
};

const testing = {
  database: 'mindtree',
  username: 'root',
  password: 'root',
  host: '127.0.0.1',
  dialect: 'mariadb',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mariadb',
};

module.exports = {
  development,
  testing,
  production,
};

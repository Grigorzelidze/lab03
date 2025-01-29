const { Client } = require('pg');

const client = new Client({
  host: 'postgres',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'mydatabase',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .then(() => client.query('SELECT NOW()'))
  .then(res => console.log(res.rows))
  .catch(e => console.error('Connection error', e.stack))
  .finally(() => client.end());
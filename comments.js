//Create a web server
//Create a route
//Get the data from the database
//Send the data back to the client

//Create a web server
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//Create a route
app.get('/', (request, response) => {
  response.send('Hello World!');
});

//Get the data from the database
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'bootcampx'
});

//Send the data back to the client
app.get('/comments', (req, res) => {
  pool.query(`
  SELECT students.id, students.name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  LIMIT 5;
  `)
  .then(result => {
    res.json(result.rows);
  })
  .catch(err => console.error('query error', err.stack));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
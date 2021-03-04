const { Pool } = require('pg');

const pool = new Pool({
  user: 'marianne',
  host: 'localhost',
  database: 'bootcampx'
});

/* pool.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  pool.end()
}) */

//pool.connect();

/* pool.query('SELECT * FROM cohorts', (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  pool.end()
}) */

/* pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack)); */

/* pool.query(`
SELECT cohorts.name as cohort, students.name as name, students.id as id 
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`)
  })
})
.catch(err => console.error('query error', err.stack)); */


/* let inputArray = ['FEB12', 2]


pool.query(`
SELECT cohorts.name as cohort, students.name as name, students.id as id 
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
LIMIT $2;
`, inputArray)  
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`)
  })
})
.catch(err => console.error('query error', err.stack)); */

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
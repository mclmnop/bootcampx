const { Pool } = require('pg');

const pool = new Pool({
  user: 'marianne',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort_name = [process.argv[2]]

pool.query(`
SELECT  teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances 
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;
`, cohort_name)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));
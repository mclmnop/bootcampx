SELECT students.name, students.start_date AS Enrolled, cohorts.name, cohorts.start_date AS cohorts_start
FROM students JOIN cohorts ON cohort_id = cohorts.id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohorts.start_date
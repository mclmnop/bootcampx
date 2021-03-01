SELECT cohorts.name, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions 
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY cohorts.name DESC;
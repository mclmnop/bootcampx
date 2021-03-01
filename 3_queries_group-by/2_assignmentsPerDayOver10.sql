SELECT day, count(*) AS total_assignements
FROM assignments
GROUP BY day
HAVING count(*) >=10
ORDER BY day;
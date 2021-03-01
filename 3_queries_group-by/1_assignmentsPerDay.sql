SELECT day, count(*) AS total_assignements
FROM assignments
GROUP BY day
ORDER BY day;
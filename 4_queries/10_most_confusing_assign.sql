SELECT assignments.id AS id,
name,
day,
chapter,
COUNT(*) AS total_request
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_request DESC;
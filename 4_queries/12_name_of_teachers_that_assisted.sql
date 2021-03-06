SELECT DISTINCT teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;
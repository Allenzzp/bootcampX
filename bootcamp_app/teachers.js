const {Pool} = require("pg");
const pool = new Pool({
  user: "vagrant",
  host: "localhost",
  password: 123,
  database: "bootcampx"
});

const cohort_name = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name AS teacher,
cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher;
`, [`${cohort_name}`])
.then(res => {
  res.rows.forEach(obj => {
    console.log(`${obj.cohort}: ${obj.teacher}`);
  })
})
.catch(err => console.error("query error", err.stack));
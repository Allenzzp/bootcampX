SELECT AVG(duration) AS average_assistance_request_duration
FROM (
  SELECT (completed_at - started_at) AS duration FROM assistance_requests
) AS sub;
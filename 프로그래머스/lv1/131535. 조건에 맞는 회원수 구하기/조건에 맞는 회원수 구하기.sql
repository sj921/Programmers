SELECT count(*) AS users
FROM user_info
WHERE TO_CHAR(joined, 'YYYY') = 2021
AND age BETWEEN 20 AND 29;
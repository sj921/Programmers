SELECT dr_name, dr_id, mcdp_cd, TO_CHAR(hire_ymd, 'YYYY-MM-DD') AS hire_ymd
FROM doctor
WHERE mcdp_cd = 'CS' OR mcdp_cd = 'GS'
ORDER BY hire_ymd DESC, dr_name ASC;
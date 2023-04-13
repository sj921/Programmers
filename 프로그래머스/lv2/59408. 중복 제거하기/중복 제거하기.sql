-- 코드를 입력하세요
SELECT count(DISTINCT name) AS count
FROM animal_ins
WHERE name IS NOT NULL;
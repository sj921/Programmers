-- 코드를 입력하세요
SELECT 
    name,
    count(name) AS count
FROM animal_ins
WHERE name IS NOT NULL
GROUP BY name
    HAVING count(name) >= 2
ORDER BY name;

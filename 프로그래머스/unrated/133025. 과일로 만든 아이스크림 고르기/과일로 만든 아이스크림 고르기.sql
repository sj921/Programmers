-- 코드를 입력하세요
SELECT flavor
FROM first_half f
INNER JOIN icecream_info i
USING (flavor)
WHERE f.total_order > 3000
AND i.ingredient_type = 'fruit_based'
ORDER BY f.total_order DESC;
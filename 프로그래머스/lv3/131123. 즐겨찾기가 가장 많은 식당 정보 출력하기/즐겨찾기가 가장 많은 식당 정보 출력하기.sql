SELECT FOOD_TYPE
     , REST_ID
     , REST_NAME
     , FAVORITES
FROM   REST_INFO
WHERE  1=1
AND    (FOOD_TYPE, FAVORITES) IN (
                                   SELECT FOOD_TYPE, MAX(FAVORITES) FAVORITES
                                   FROM REST_INFO 
                                   GROUP BY FOOD_TYPE
                                 )
ORDER BY FOOD_TYPE DESC
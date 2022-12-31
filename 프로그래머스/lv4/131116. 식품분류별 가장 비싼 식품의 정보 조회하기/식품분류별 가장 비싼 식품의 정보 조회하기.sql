SELECT CATEGORY
     , MAX(PRICE) MAX_PRICE
     , MAX(PRODUCT_NAME) PRODUCT_NAME
FROM   FOOD_PRODUCT
WHERE  1=1
AND    CATEGORY IN ('과자', '국', '김치', '식용유')
AND    PRICE IN (
                 SELECT MAX(PRICE) MAX_PRICE
                 FROM   FOOD_PRODUCT
                 GROUP BY CATEGORY
                )
GROUP BY CATEGORY
ORDER BY MAX_PRICE DESC
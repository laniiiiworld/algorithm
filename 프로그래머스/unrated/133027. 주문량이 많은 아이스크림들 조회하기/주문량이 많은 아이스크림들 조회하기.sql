SELECT m.FLAVOR
FROM  (
        SELECT j.FLAVOR
             , NVL(SUM(NVL(f.TOTAL_ORDER,0)),0) + SUM(j.TOTAL_ORDER) TOTAL_ORDER
        FROM   FIRST_HALF f
             , JULY j
        WHERE  1=1
        AND    f.SHIPMENT_ID(+) = j.SHIPMENT_ID
        AND    f.FLAVOR(+) = j.FLAVOR
        GROUP BY j.FLAVOR
        ORDER BY TOTAL_ORDER DESC
     ) m
WHERE  1=1
AND    ROWNUM <= 3
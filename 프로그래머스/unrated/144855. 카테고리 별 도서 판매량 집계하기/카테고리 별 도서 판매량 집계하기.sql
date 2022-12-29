SELECT b.CATEGORY
     , SUM(s.SALES) TOTAL_SALES
FROM   BOOK b
     , BOOK_SALES s
WHERE  1=1
AND    s.BOOK_ID = b.BOOK_ID
AND    TO_CHAR(s.SALES_DATE, 'YYYYMM') = '202201'
GROUP BY b.CATEGORY
ORDER BY b.CATEGORY
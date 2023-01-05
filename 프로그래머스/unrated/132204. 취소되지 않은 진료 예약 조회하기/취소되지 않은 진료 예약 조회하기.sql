--2022년 4월 13일 취소되지 않은 흉부외과(CS) 진료 예약 내역
--진료예약일시를 기준으로 오름차순 정렬
SELECT a.APNT_NO
     , p.PT_NAME
     , p.PT_NO
     , a.MCDP_CD
     , d.DR_NAME
     , a.APNT_YMD
FROM   PATIENT p
     , DOCTOR d
     , APPOINTMENT a
WHERE  1=1
AND    TO_CHAR(a.APNT_YMD, 'YYYYMMDD') = '20220413'
AND    a.MCDP_CD = 'CS'
AND    a.APNT_CNCL_YN = 'N'
AND    p.PT_NO = a.PT_NO
AND    d.DR_ID = a.MDDR_ID
ORDER BY a.APNT_YMD
SELECT *
FROM ( SELECT
            INS.ANIMAL_ID,
            INS.NAME
        FROM
            ANIMAL_INS INS
        INNER JOIN
            ANIMAL_OUTS OUTS
        ON
            INS.ANIMAL_ID = OUTS.ANIMAL_ID
        ORDER BY
            OUTS.DATETIME - INS.DATETIME DESC 
     )
WHERE ROWNUM <= 2;
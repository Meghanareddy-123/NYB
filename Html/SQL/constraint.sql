--Constraints NOT NULL,UNIQUE---
--Creating a table with NOT NULL constraint: XXNYB_CONSTRAINTS_TEST
--NOT NULL

CREATE TABLE xxnyb_constraints_test (
    sno             NUMBER,
    constraint_name VARCHAR2(50) NOT NULL,
    comments        VARCHAR2(500)
);

desc xxnyb_constraints_test;

INSERT INTO xxnyb_constraints_test VALUES ( 1,
                                            'Not Null',
                                            'It should not allow NULL values' );

COMMIT;

SELECT
    *
FROM
    xxnyb_constraints_test;

INSERT INTO xxnyb_constraints_test (
    sno,
    comments
) VALUES ( 2,
           'No comments' );    ( Error report - ORA-01400: cannot insert NULL into ("HR"."XXNYB_CONSTRAINTS_TEST"."CONSTRAINT_NAME"))
    
           
--UNIQUE
--Add UNIQUE constraint on sno column from XXNYB_CONSTRAINTS_TEST

ALTER TABLE XXNYB_CONSTRAINTS_TEST   
MODIFY sno number UNIQUE;

desc XXNYB_CONSTRAINTS_TEST;

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Unique',
                                            'It wont allow Duplicate values' );
commit;      

select * from xxnyb_constraints_test ;

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Unique',
                                            'It wont allow Duplicate values' ); (Error report -ORA-00001: unique constraint (HR.SYS_C007519) violated)
CREATE TABLE product (
    pid    NUMBER,
    pname  VARCHAR2(50),
    pcompy VARCHAR2(20)
);

DELETE FROM product;

CREATE TABLE product (
    pid    NUMBER,
    pname  VARCHAR2(50),
    pcompy VARCHAR2(20) NOT NULL
);

CREATE TABLE stock (
    sid    NUMBER,
    sname  VARCHAR2(50),
    scompy VARCHAR2(20) NOT NULL
);

INSERT INTO stock VALUES ( 1,
                           'GOODAY',
                           'BRITANIA' );

COMMIT;

INSERT INTO stock VALUES ( 1,
                           'Marigold',
                           'BRITANIA' );

INSERT INTO stock VALUES ( 1,
                           'GOODAY',
                           'BRITANIA' );

desc stock;

SELECT
    *
FROM
    stock;

ALTER TABLE stock MODIFY         
sname VARCHAR2(50) UNIQUE;
    
ALTER TABLE XXNYB_CONSTRAINTS_TEST   
MODIFY sno number UNIQUE;

ALTER TABLE stock 
ADD CONSTRAINT unique_sname UNIQUE (sname);





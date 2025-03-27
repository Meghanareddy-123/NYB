---primary key ,COMPOSIT PRIMARY KEY--

create table scott (
pid number(10) primary key,
p_name varchar2(50),
p_cmpy varchar(15)
);

----does not accept null values--
--does not accepect dupicate value--

INSERT INTO SCOTT VALUES ( NULL,'MEGHA','NYB' ); SQL Error: ORA-01400: cannot insert NULL into ("HR"."SCOTT"."PID")

INSERT INTO SCOTT VALUES ( 1,'MEGHA','NYB' );  Error report -ORA-00001: unique constraint (HR.SYS_C007529) violated

COMMIT;

---COMPOSITE PRIMARY KEY--
It same as the primary key it works as a mulitiple colums.


INSERT INTO SCOTT VALUES ( 3,'PANDU','NYB' );   

INSERT INTO SCOTT VALUES ( 4,'DEEPU','NYB' );

INSERT INTO SCOTT VALUES ( '','MEGHA','NYB' );   Error report -SQL Error: ORA-01400: cannot insert NULL into ("HR"."SCOTT"."PID")

INSERT INTO SCOTT VALUES ( 3,'pandu','NYB' );   Error report -ORA-00001: unique constraint (HR.SYS_C007529) violated




-PRIMARY KEY--

ALTER TABLE xxnyb_constraints_test ADD CONSTRAINT sno_pk PRIMARY KEY ( sno );

--Passing Duplicate values

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Duplicate Unique',
                                            'No Comments' );
                                            
--Passing NULL values

INSERT INTO xxnyb_constraints_test VALUES ( NULL,
                                            'Duplicate Unique',
                                            'No Comments' );
                                            
--COMPOSITE Primary Key
--Create a new table: XXNYB_EMPLOYEES_TEST
--Define Composite Primary Key

CREATE TABLE xxnyb_employees_test (
    employee_id   NUMBER,
    employee_name VARCHAR2(100),
    hire_date     DATE,
    department_id NUMBER,
    CONSTRAINT emp_pk PRIMARY KEY (employee_id, employee_name)
);
select * from  xxnyb_employees_test ;

desc xxnyb_constraints_test;

insert into xxnyb_employees_test values (1001, 'Chandeep', sysdate -280, 10);
insert into xxnyb_employees_test values (1002, 'meghana', sysdate -218, 20);

--does not accept null values--
insert into xxnyb_employees_test values (Null, 'pandu', sysdate -280, 10);  Error: ORA-01400: cannot insert NULL into ("HR"."XXNYB_EMPLOYEES_TEST"."EMPLOYEE_ID")

 --does not accepect dupicate value--
insert into xxnyb_employees_test values (1002, 'meghana', sysdate -218, 20);  Error report -ORA-00001: unique constraint (HR.EMP_PK) violated


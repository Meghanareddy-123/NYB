----check,foreign key,default  ---

CREATE TABLE test (
    sname  VARCHAR(50),
    sno    NUMBER,
    salary NUMBER CHECK ( salary >= 3000 ),
    phno   NUMBER
);

INSERT INTO test VALUES ( 'meghana',
                          1,
                          4000,
                          123 );

INSERT INTO test VALUES ( 'pandu',
                          2,
                          2000,
                          124 );  ---Error report -ORA-02290: check constraint (HR.SYS_C007554) violated--





--foreign key--

CREATE TABLE xxnyb_constraints_desc_test (
    col_idx        NUMBER,
    constraint_sno NUMBER,
    description    VARCHAR2(500),
    comments       VARCHAR2(500),
    CONSTRAINT col_idx_pk PRIMARY KEY ( col_idx )
 --   CONSTRAINT const_sno_fk FOREIGN KEY ( constraint_sno )
   --     REFERENCES xxnyb_constraints_test ( sno )
);

ALTER TABLE xxnyb_constraints_desc_test
    ADD CONSTRAINT const_sno_fk FOREIGN KEY ( constraint_sno )
        REFERENCES xxnyb_constraints_test ( sno );
       
--DEFAULT

-Add default constraint on HIRE_DATE column from XXNYB_EMPLOYEES_TEST
-- Default Value --> SYSDATE

ALTER TABLE xxnyb_employees_test MODIFY
    hire_date DEFAULT sysdate;
    
select *  from xxnyb_employees_test;
desc xxnyb_employees_test;

insert into XXNYB_EMPLOYEES_TEST(employee_id, employee_name, department_id)
values(1003, 'Nandini', 30);

commit;

insert into XXNYB_EMPLOYEES_TEST(employee_id, employee_name, department_id)
values(1004, 'Thanusha', 40);

select *  from xxnyb_employees_test;
desc xxnyb_employees_test;


--CHECK

-- Add a condition on department_id column from XXNYB_EMPLOYEES_TEST
-- department_id <= 50

ALTER TABLE XXNYB_EMPLOYEES_TEST
ADD CONSTRAINT dept_id_chk CHECK (department_id <= 50);

--insert the data with department_id 70

insert into xxnyb_employees_test values (1004, 'mani', sysdate -260, 30);

commit;

select *  from xxnyb_employees_test;
desc xxnyb_employees_test;

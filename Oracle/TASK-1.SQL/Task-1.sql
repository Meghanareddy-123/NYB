CREATE TABLE DEPARTMENTS(
DEPARTMENT_ID NUMBER PRIMARY KEY,
DEPATMENT_NAME VARCHAR2(20) NOT NULL,
HEAD_OF_DEPATMENT VARCHAR2(50)
);

Create table student2 (
    student_id   NUMBER PRIMARY KEY,
    first_name   VARCHAR2(30) NOT NULL,
    last_name    VARCHAR2(30),
    email        VARCHAR2(50) UNIQUE,
    dob          DATE,
    department_id number,
    phone_number number
    Check(length(to_char(phone_number))=10),
   --- department_id number REFERENCES (department_id),---
CONSTRAINT fk_department FOREIGN KEY(department_id)REFERENCES departments(Department_id) 
);

INSERT INTO DEPARTMENTS (DEPARTMENT_ID,DEPATMENT_NAME ,HEAD_OF_DEPATMENT)
VALUES (101, 'computer_science', 'computers_dept');
COMMIT;

INSERT INTO DEPARTMENTS (DEPARTMENT_ID,DEPATMENT_NAME ,HEAD_OF_DEPATMENT)
VALUES (102, 'Elecronics', 'Elecronics_dept');
commit;

INSERT INTO DEPARTMENTS (DEPARTMENT_ID,DEPATMENT_NAME ,HEAD_OF_DEPATMENT)
VALUES (103, 'Civil', 'Civil_dept');
commit

INSERT INTO DEPARTMENTS (DEPARTMENT_ID,DEPATMENT_NAME ,HEAD_OF_DEPATMENT)
VALUES (104, 'computer_science', 'computers_dept');
COMMIT;

INSERT INTO DEPARTMENTS (DEPARTMENT_ID,DEPATMENT_NAME ,HEAD_OF_DEPATMENT)
values(105,'physics','physics_dept');
COMMIT

insert into student2(student_id,first_name,last_name, email,dob ,department_id, phone_number)
VALUES(201,'MEGHANA','REDDY','Megha@gmail.com',TO_DATE('2025-03-03','YYYY-MM-DD'),101,1234567898);
commit;

insert into student2(student_id,first_name,last_name, email,dob ,department_id, phone_number)
VALUES(202,'john','rold','john@gmail.com',TO_DATE('2022-06-03','YYYY-MM-DD'),102,1255456789);
commit;

insert into student2(student_id,first_name,last_name, email,dob ,department_id, phone_number)
VALUES(203,'steven ','ste','steven@gmail.com',TO_DATE('2023-04-10','YYYY-MM-DD'),103,1200456788);
commit;

insert into student2(student_id,first_name,last_name, email,dob ,department_id, phone_number)
VALUES(204,'varsha','vulikanti','varsha@gmail.com',TO_DATE('2020-07-06','YYYY-MM-DD'),104,1230068278);
commit;

insert into student2(student_id,first_name,last_name, email,dob ,department_id, phone_number)
VALUES(205,'pavani','ponu','pavani@gmail.com',TO_DATE('2019-08-09','YYYY-MM-DD'),105,1234800768);
commit;

SELECT *
FROM student2
WHERE dob >to_date('31-12-2000','DD-MM-YYYY');


SELECT
    department_name,
    COUNT(students_id)
FROM
         departments d
    JOIN student2 s ON d.department_id = s.department_id
GROUP BY
    DEPATMENT_NAME;




SELECT * FROM STUDENT2 
ORDER BY LAST_NAME;

---DDL,DML COMMANDS  ---

--create,alter,truncate,insert,update,delete--

CREATE TABLE STUDENTS(
Student_id number primary key,
student_name varchar2(50),
Age number not null,
gender varchar2(50) not null,
Marks number
);
desc STUDENTS;

INSERT INTO STUDENTS (student_id,student_name,Age,gender,Marks)
values(1,'shiva',25,'MALE',70);

COMMIT;

INSERT INTO STUDENTS (student_id,student_name,Age,gender,Marks)
values(2,'Hema',23,'FEMALE',80);
COMMIT;

INSERT INTO STUDENTS (student_id,student_name,Age,gender,Marks)
values(3,'Geetha',24,'FEMALE',90);
commit;

INSERT INTO STUDENTS (student_id,student_name,Age,gender,Marks)
values(4,'Suresh',25,'MALE',60);
commit;

INSERT INTO STUDENTS (student_id,student_name,Age,gender,Marks)
values(5,'Mani',22,'FEMALE',95);
CMMIT;
COMMIT;

SELECT * FROM STUDENTS;

UPDATE STUDENTs
SET MARKS=99
WHERE student_id=3;

SELECT * FROM STUDENTS;

ALTER TABLE Students ADD Email VARCHAR(100);

desc STUDENTS;

UPDATE  STUDENTS
SET Email='Shiva@gmail.com'
WHERE student_id = 1;

UPDATE  STUDENTS
SET Email='Hema@gmail.com'
WHERE student_id = 2;

UPDATE  STUDENTS
SET Email='geetha@gmail.com'
WHERE student_id = 3;

UPDATE  STUDENTS
SET Email='suresh@gmail.com'
WHERE student_id = 4;

UPDATE  STUDENTS
SET Email='mani@gmail.com'
WHERE student_id = 5;

select * from students;

ALTER TABLE Students MODIFY Marks FLOAT;


RENAME STUDENTS TO STUDENTS1; 

select * from students1;

SELECT * FROM TAB;
--It display all tables--

DELETE FROM STUDENTS1 
WHERE STUDENT_NAME='Suresh';

select * from students1;

ROLLBACK;
select * from students1;

UPDATE STUDENT1
SET STUDENT_ID='Maggi'
where student_id=6;

SELECT
    *
FROM
    students1
ORDER BY
    marks DESC;
    
SELECT
    *
FROM
    students1
ORDER BY
    age ASC;
    
SELECT
    *
FROM
    students1
ORDER BY
    STUDENT_ID ASC;
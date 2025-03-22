select *from employees;
create table student 
(studentid number(20) ,
studentname varchar2(50) ,
Gender VARCHAR(10),
DOb date ) ;
desc student;

SELECT* FROM STUDENT;

---INSERT INTO student (studentid,studentname,Gender,Dob)
--values
---( 1, 'AaravKumar','M',TO_DATE('2005-05-10','YYYY-MM-DD'));


INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(1, 'AaravKumar', 'M', TO_DATE('2005-05-10', 'YYYY-MM-DD'));
commit;

INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(2, 'Sneha Reddy', 'F', TO_DATE('2001-12-15', 'YYYY-MM-DD'));
commit;
INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(3, 'Rohan Mehta', 'M', TO_DATE('2003-02-20', 'YYYY-MM-DD'));
commit;
INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(4, 'Priya Shah', 'F', TO_DATE('2000-09-25', 'YYYY-MM-DD'));
commit;

INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(5, 'Vikram Singh', 'M', TO_DATE('2002-07-14', 'YYYY-MM-DD'));
commit;
INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(6, 'Kavya Nair', 'F', TO_DATE('2001-11-01', 'YYYY-MM-DD'));
commit;

INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(7, 'Manoj Yadav', 'M', TO_DATE('2003-04-10', 'YYYY-MM-DD'));
commit;
INSERT INTO student (studentid, studentname, Gender, Dob)
VALUES
(8, 'Divya Patel', 'F', TO_DATE('2002-06-18', 'YYYY-MM-DD'));
commit;
select * from student;

select studentname,gender from student;

select * from student 
where Dob> to_date ( '2001-01-01','yyyy-mm-dd');

select gender,count(*) from student
group by gender;

select * from student
order by Dob asc;

SELECT * FROM STUDENT
WHERE STUDENTNAME LIKE 'S%';

select
to_char(Dob,'dd-mm-yyyy')
from student;

select * from student 
where gender ='F'
order by studentname Desc;

select studentname count(Dob)
from student
Group by Dob;

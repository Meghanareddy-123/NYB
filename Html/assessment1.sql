create table student 
(studentid number(20) primary key,
studentname varchar2(5) not null,
Gender char(1) not null,
DOM date not null);

INSERT
into student values(1,'Arava Kumar','M','2002-05-10');
into student (2,'Sneha Reddy','F','2001-12-15'),
into student (3,'Rohan Mehta','M','2003-02-20'),
into student (4,'priya Shah','F','2000-09-25'),
into student (5,'vikram sighn','M','2002-07-14'),
into student (6,'kavya Nair','F','2001-11-01'),
into student (7,'Manoj','M','2003-04-10'),
into student(8,'Divya Patel','F','2002-06-18');


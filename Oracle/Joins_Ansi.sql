--JOINS(ANSI Join)--
--Simple join
--a.Equi join
--b.Non Equi join

--Simple Equi join(Ansi)--

SELECT
    e.*,
    d.*
FROM
    employees e  inner join
    departments d
on
    e.department_id = d.department_id  


SELECT
    e.first_name,
    e.employee_id,
    e.department_id,
    d.department_id,
    d.location_id
FROM
    employees e inner join
    departments d
on
    e.department_id = d.department_id    
    
    
--Non equi join --
SELECT
    e.first_name,
    e.employee_id,
    --e.department_id,
    d.department_id,
    d.department_name
FROM
    employees e inner join 
    departments d
ON
    e.department_id != d.department_id 
    order by e.department_id;     --2756 rows--
    
SELECT
    e.*,
    d.department_name
FROM
    employees   e INNER JOIN
    departments d
ON
    e.department_id != d.department_id
    order by e.employee_id;
  
--SELF JOIN--  
    
SELECT
    e1.*,
    e2.first_name manager_first_name,
    e2.last_name manager_last_name
FROM
    employees e1 SELF JOIN
    employees e2
ON
    e1.manager_id = e2.employee_id;
    
SELECT
  e.employee_id,
  e.first_name,
  e1.department_id
from 
   employees e SELF JOIN 
   employees e1
ON
  e.employee_id=e1.employee_id
 
SELECT
    e.*,
    d.*
FROM
    employees   e 
    departments d
on
    e.department_id = d.department_id ;
 
 --left outer join---
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    e.hire_date,
    d.department_id,
    d.department_name,
    d.location_id
FROM
    employees   e
    LEFT JOIN departments d ON e.department_id = d.department_id;--107--   
    
---Right outer join --

SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.department_id,
    d.department_name
FROM
    employees   e
    RIGHT JOIN departments d ON e.department_id = d.department_id; --row count 122--
    
SELECT
    e.employee_id,
    e.first_name,
    d.department_id,
    d.department_name
FROM
    employees   e
    RIGHT JOIN departments d ON e.department_id = d.department_id;---122 rows
    
--Full outer join--
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.department_id,
    d.department_name
FROM
    employees   e
    FULL OUTER JOIN departments d ON e.department_id = d.department_id; --row count 123--


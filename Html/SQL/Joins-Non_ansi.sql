--JOINS(ANSI Join)--
--Simple join
--a.Equi join
--b.Non Equi join

SELECT
    e.*,
    d.*
FROM
    employees e ,
    departments d
WHERE
    e.department_id = d.department_id    --Number of rows 106--
    
    
SELECT
    e.first_name,
    e.employee_id,
    e.department_id,
    d.department_id,
    d.location_id
FROM
    employees e ,
    departments d
WHERE
    e.department_id = d.department_id    --Number of rows 106--
  
select * from employees;  

SELECT
    e.employee_id,
    d.department_id
FROM
    employees e,
    departments d
WHERE
    e.department_id = d.department_id ;   --Number of rows 106--
    --order by e.department_id; --

-- Non-Equi Join--

    
SELECT
    e.first_name,
    e.employee_id,
    --e.department_id,
    d.department_id,
    d.department_name
FROM
    employees e ,
    departments d
WHERE
    e.department_id != d.department_id 
    order by e.department_id;     --2756 rows--
    
select * from departments;

SELECT
    e.*,
    d.department_name
FROM
    employees   e,
    departments d
WHERE
    e.department_id != d.department_id
    order by e.employee_id;
    --2756 rows
    
SELECT
    E.*,
    D.*
FROM
    EMPLOYEES E,
    DEPARTMENTS Dl
WHERE
    E.DEPARTMENT_ID ! = D.DEPARTMENT_ID;  --2756 rows-
    
    
--Self join--
SELECT
    e1.*,
    e2.first_name manager_first_name,
    e2.last_name manager_last_name
FROM
    employees e1,
    employees e2
WHERE
    e1.manager_id = e2.employee_id;
    

SELECT
    e1.*,
    e2.first_name ,
    e2.last_name manager_last_name
FROM
    employees e1,
    employees e2
WHERE
    e1.manager_id = e2.employee_id;
    
SELECT
  e.employee_id,
  e.first_name,
  e1.department_id
from 
   employees e
   
where 
  e.employee_id=e1.employee_id;
  
--Outer join--
--LEFT OUTER JOIN --
SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+);
    
SELECT
    e.employee_id,
    d.department_id,
    d.location_id
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+);
    
  
SELECT
    e.first_name,
    e.employee_id,
    d.department_id,
    d.department_id,
    d.location_id
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+); --107 rows--
      
--Right Outer Join

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id (+) = d.department_id; --122 rows--
    
SELECT
    e.first_name,
    e.employee_id,
    d.department_id 
FROM
    employees   e,
    departments d
WHERE
    e.department_id(+) = d.department_id ;   
    
--Full Outer Join

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id = d.department_id (+)   --left outer join  --107
UNION
SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
WHERE
    e.department_id (+) = d.department_id;  --right outer join  --122
    
--Cross Join/Cartesian Product

SELECT
    e.*,
    d.*
FROM
    employees   e,
    departments d
ORDER BY e.employee_id;  -2889 rows-
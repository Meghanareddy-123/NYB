--JOINS--
--Outer join
       --i.left outer join
       --ii.right outer join
       --iii.full outer join
--Self join

SELECT
    *
FROM
    departments;
    
SELECT * FROM EMPLOYEES;
    
-- left outr join, right outer join,full outer join---

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

SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.department_id,
    d.department_name
FROM
    employees   e
    FULL OUTER JOIN departments d ON e.department_id = d.department_id; --row count 123--
    
    
--Self join -- 

--INNER SELF JOIN --
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    e1.manager_id,
    e1.job_id,
    e1.department_id
FROM
         employees e
    INNER JOIN employees e1 ON e.department_id = e1.department_id; --(row count 3298)--

--LEFT SELF JOIN--
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    e1.manager_id,
    e1.job_id,
    e1.department_id
FROM
         employees e
    left JOIN employees e1 ON e.department_id = e1.department_id; --(row count 3299)--
    
--RIGHT SELF JOIN --
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    e1.manager_id,
    e1.job_id,
    e1.department_id
FROM
         employees e
    right JOIN employees e1 ON e.department_id = e1.department_id; --(row count 3299)--
  
 --FULL SELF JOIN-- 
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    e1.manager_id,
    e1.job_id,
    e1.department_id
FROM
         employees e
    FULL JOIN employees e1 ON e.department_id = e1.department_id;  --(row count 3300)--
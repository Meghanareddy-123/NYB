--JOINS --
--Crossjoin and Innerjoin  --

--CROSS JOIN--

SELECT
    *
FROM
    employees;

SELECT
    *
FROM
    hr.departments;

SELECT
    first_name,
    last_name,
    department_name
FROM
         employees
    CROSS JOIN hr.departments;

SELECT
    first_name,
    last_name,
    employee_id,
    department_name,
    department_id
FROM
         employees
    CROSS JOIN hr.departments;

SELECT
    *
FROM
         employees
    CROSS JOIN hr.departments;
    

--INNOR JOIN--

SELECT
    *
FROM
         employees
    INNER JOIN hr.departments ON employees.department_id = hr.departments.department_id;

SELECT
    first_name,
    department_name
FROM
    employees,
    hr.departments
WHERE
    employees.department_id = hr.departments.department_id;

SELECT
    first_name,
    location_id,
    job_id
FROM
    employees,
    hr.departments
WHERE
        employees.department_id = hr.departments.department_id
    AND job_id = 'SH_CLERK';

SELECT
    first_name,
    departement_id,
    department_name,
    location_id
FROM
    employees,
    hr.departments
WHERE
        employees.department_id = hr.departments.department_id
    AND salary > 2000;
    
    
SELECT
    first_name,
    department_id,
    department_name,
    location_id
FROM
    employees,
    hr.departments
WHERE
    employees.department_id = hr.departments.department_id
    AND salary > 2000;
    
SELECT
    e.first_name,
    e.department_id,
    d.department_name,
    d.location_id
FROM
    employees e
INNER JOIN hr.departments d
    ON e.department_id = d.department_id
WHERE
    e.salary > 2000;
    


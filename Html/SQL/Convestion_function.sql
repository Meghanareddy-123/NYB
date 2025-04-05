---CONVEESTION FUNCTION--

--TO_CHAR--

SELECT
    *
FROM
    employees;

SELECT
    to_char(sysdate, 'DD')
FROM
    dual;

SELECT
    employee_id,
    first_name,
    last_name,
    hire_date,
    to_char(hire_date, 'MM/DD/YYYY') AS formatted_hire_date
FROM
    employees;

SELECT
    employee_id,
    to_char(first_name
            || ' '
            || last_name) AS full_name
FROM
    employees;

SELECT
    employee_id,
    to_char(last_name
            || ' '
            || first_name) AS full_name
FROM
    employees;

SELECT
    employee_id,
    to_char(hire_date, 'Month') AS hire_month
FROM
    employees;

SELECT
    employee_id,
    to_char(hire_date, 'DD') AS hire_day
FROM
    employees;

SELECT
    employee_id,
    to_char(hire_date, 'YYYY') AS hire_month
FROM
    employees;

SELECT
    employee_id,
    first_name,
    last_name,
    to_char(hire_date, 'DD/MM/YYYY') AS hire_month
FROM
    employees;

SELECT
    salary,
    first_name,
    to_char(salary, 9999.90) AS salary
FROM
    employees;
    
---TO_DATE--

SELECT FIRST_NAME,HIRE_DATE, to_date ( ( to_char('HIRE_DATE', 'YYYY') )) FROM employees ;


SELECT
    first_name,
    last_name,
    TO_DATE(to_char(hire_date, 'YYYY'),
            'YYYY') AS hire_year
FROM
    employees;


SELECT TO_DATE('04-04-2025','DD/MM/YYYY')FROM DUAL;

SELECT TO_DATE('04042025','DD/MM/YYYY')FROM DUAL;

SELECT
    employee_id,
    first_name,
    TO_DATE('2025-04-04 14:30:00', 'YYYY-MM-DD HH24:MI:SS') AS full_timestamp
FROM
    employees;


---SELECT
    ---SUM(TO_NUMBER(salary)) AS total_salary
--FROM
   -- employees;
SELECT TO_DATE(SYSDATE,'YYYY/MM/DD')FROM DUAL;


--TO_NUMBER--

SELECT
    SUM(TO_NUMBER(salary)) AS total_salary
FROM
 employees;

SELECT
    employee_id,
    first_name,
    last_name,
    TO_NUMBER(salary)>2000
FROM
    employees;
    
SELECT employee_id, first_name,TO_NUMBER(HIRE_DATE,'DD-MM-YYYY') FROM EMPLOYEES;


    

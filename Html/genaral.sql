SELECT * FROM employees;

SELECT
e.employee_id,
e.first_name,
e.last_name,
e.manager_id,
nvl(to_char(e.manager_id), 'no Manager')
from employees e;

SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.manager_id,
    NVL(e.manager_id, 0) AS manager 
from
employees e;

SELECT
e.employee_id,
e.first_name,
e.last_name,
e.phone_number,
e.manager_id,
e.commission_pct,
nvl(e.commission_pct,0)
nvl(e.commission_pct,'no commistion')
from
employees e;


SELECT NVL(NULL,0)FROM DUAL;

SELECT NVL(10,0)FROM DUAL;

--NVL2--

SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.phone_number,
    e.manager_id,
    e.commission_pct,
    nvl(e.commission_pct, 0) nvl2(e.commission_pct,round(commission_pct,1),0)
from
employees.e;

SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.phone_number,
    e.manager_id,
    e.commission_pct,
    NVL(e.commission_pct, 0) AS commission_pct_with_nvl,
    NVL2(e.commission_pct, ROUND(e.commission_pct, 1), 0) AS commission_pct_with_nvl2
FROM 
    employees e;


SELECT
    nvl2(NULL, 1, 2)
FROM
    dual;

SELECT
    nvl2(100, 1, 2)
FROM
    dual;

--Greatest number--
select greatest(10,20,30,40,69)from dual;

--Least--
select LEAST(10,20,30,40,69)from dual;

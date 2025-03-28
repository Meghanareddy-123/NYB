
---Translate,Replace,Decode,Case,Sunstring,Instring---

SELECT
    e.first_name,
    translate(e.first_name, 'aeiou', 'AEIOU') AS modified_first_name
FROM
    employees e;


SELECT
    translate('ELLEN', 'LL', 'A') AS modified_first_name
FROM
    employees e;


SELECT
    e.last_name,
    translate(e.last_name, 'aeiou', 'AEIOU') AS modified_first_name
FROM
    employees e;


SELECT
    e.first_name,
    translate(e.first_name, ' ', '') AS first_name_without_spaces
FROM
    employees e;


SELECT
    translate('meghana', 'g', 'a')
FROM
    dual;


SELECT
    translate('meghana', 'me', 'nee')
FROM
    dual;

SELECT
    translate('megha', 'megha', 'nealm')
FROM
    dual;


--it is not possible translate entri string
--with same length of sring is possible

SELECT
    translate('meghana', 'meghana', 'megha')
FROM
    dual;



--REPLACE--

--It is possible to replace entrie string

--string = lithisha gangireddy
--charecter = reedy
--string replace = neelam

SELECT
    replace('lithisha gangireddy ', 'reddy', 'neelam')
FROM
    dual;


SELECT
    replace('lithisha gangireddy ', 'lithisha gangireddy', 'meghan')
FROM
    dual;


SELECT
    replace(' gangireddy ', 'ga', 'ch')
FROM
    dual;


SELECT
    e.first_name,
    replace(e.first_name, 'aeiou', 'AEIOU') AS modified_first_name
FROM
    employees e;
    


--DECODE--


SELECT
    *
FROM
    employees;


SELECT
    employee_id,
    first_name,
    decode(first_name, 'Steven', 'Stev', 'Neena', 'Nee',
           'Bruce', 'Bru', 'common_name') changed_name
FROM
    employees
ORDER BY
    employee_id;


SELECT
    employee_id,
    first_name,
    decode(first_name, 'Steven', 'Stev', 'Neena', 'Nee',
           'Bruce', 'Bru', 'common_name') changed_name
FROM
    employees;



SELECT
    employee_id,
    first_name,
    last_name,
    job_id,
    decode(job_id, 'IT_PROG', 'IT Programmer', 'AD_PRES', 'President',
           'ST_CLERK', 'Senior Clerk', job_id) decoded_job_id_value
FROM
    employees;


--CASE--


SELECT salary, case when salary<10000 then 'low salary '
                   when salary between 10000 and 20000 then 'medium salary'
                   when salary>20000 then 'high salary'
                   else 'common_status'
                   end as salary_status from employees;
                   
   
                
SELECT salary, case when salary=10000 then 'low salary '
                   when salary between 10000 and 20000 then 'medium salary'
                   when salary>=20000 then 'high salary'
                   else 'salary'
                   end as salary_status from employees;
                   
  

---SUBSTRING--

  
SELECT first_name,substr(first_name,-4)from employees;

SELECT first_name,substr(first_name,2,3)from employees

SELECT job_id,substr(job_id,-4)from employees;


SELECT substr('meghana',2,4)from dual;
                                
SELECT substr('meghana',1,3)from DUAL;
                                                               

--INSTRING---


SELECT INSTR('MEGHANA','A',1,2) FROM DUAL;

SELECT INSTR('MEGHANAFFYYAAUUEEPPALLAADFGMMAA','A',1,4) FROM DUAL;

SELECT INSTR('MEGHANAFFYYAAUUEEPPALLAADFGMMAA','A',1,7) FROM DUAL;

SELECT JOB_ID,INSTR(JOB_ID, 'S',1,3)FROM EMPLOYEES;

SELECT JOB_ID, INSTR(JOB_ID, 'S', 1, 3) AS S_POSITION
FROM EMPLOYEES;


                                































































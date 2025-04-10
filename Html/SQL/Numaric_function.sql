--Numaric functions--
--power,squre root,mod,round,trunc,ceil,floor Absolute function--

--power--

select * from employees;

select POWER (SALARY,2) FROM EMPLOYEES
WHERE ENAME="Steven";

select power(1256,10) as power from dual;

select power (salary,2)from employees;

select power(15,2) as power from dual;  --225--

select power(25,2) as power from dual;   --625--

select power(12.5,2) as  power from dual;  --156.25--

--sqrt--

select sqrt (salary) as from employees;

select sqrt(commission_pct)from employees;

select sqrt(25) as SQUARE_ROOT from dual;


--MOD FUNCTION--

select MOD(SALARY,2) as MODULUES from EMPLOYEES;

select MOD(COMMISSION_PCT,2) as MODULUES from EMPLOYEES;

select MOD(10,2) as MODULUES from dual;

select MOD(24,2) as MODULUES from EMPLOYEES;

select MOD(25,2) as MODULUES from EMPLOYEES;


--ROUND FUNCTION--

SELECT ROUND(SALARY)FROM EMPLOYEES;
SELECT ROUND(COMMISSION_PCT)FROM EMPLOYEES;

SELECT ROUND(98.2) AS ROUND FROM  DUAL;

SELECT ROUND(98.6) AS ROUND FROM DUAL;

SELECT ROUND(420.49,-2) AS ROUND FROM DUAL;

SELECT ROUND(420.49) AS ROUND FROM DUAL;

SELECT ROUND(420.49,-3) AS ROUND FROM DUAL;

--TRUNC FUNCTION--

SELECT TRUNC (854.64,-2)FROM DUAL;

SELECT TRUNC(98.6)AS TRUNC FROM DUAL;

SELECT TRUNC(98.3)AS TRUNC FROM DUAL;

SELECT TRUNC (128.567,2) AS TRUNC FROM  DUAL;

SELECT TRUNC(99.99,-1)AS TRUNC FROM DUAL;

SELECT TRUNC(986.618,-2)AS TRUNC FROM DUAL;


---CEIL FUNCTION  FLOOR FUNCTION---

--Next possible hight value for whole number--
--FLOOR is used to next possible lowest vallue for whole number--

SELECT CEIL(98.6)AS CEIL FROM DUAL;  --99--
SELECT FLOOR(98.6)AS FLOOR FROM DUAL; --98--
SELECT CEIL(98.2)AS CEIL FROM DUAL;   --99--
SELECT FLOOR(98.2)AS FLOOR FROM DUAL;  --98--

SELECT CEIL(SALARY)FROM EMPLOYEES;
SELECT CEIL(COMMISSION_PCT)FROM EMPLOYEES;
SELECT TO_CHAR(CEIL(HIRE_DATE))FROM EMPLOYEES;


--ABSOLUTE FUNCTION--
--It is used to maintain positive results--

SELECT ABS(10.493),ABS(-420.520) AS ABSOLUTE FROM EMPLOYEES;

SELECT ABS(SALARY)FROM EMPLOYEES;

SELECT ABS(COMMISSION_PCT)FROM EMPLOYEES;

SELECT ABS(-40.50)FROM DUAL;

SELECT ABS(10.90) as ABSOLUTE FROM DUAL;
Charecter function 
       --Trim--
select trim(' ' from '   meghana   ')from dual;

select trim(' '  from  '   megh  ana   ')from dual;  

select trim('e' from 'eeemeghanaeee')from dual;

select trim('e' from 'eeemeeeghanaeee')from dual;

       --LTRIM--
SELECT LTRIM ('EETHANUSHAEE', 'E') FROM DUAL;

SELECT LTRIM ('THANUSHAEE','T')FROM DUAL;

SELECT LTRIM ('THANUSHAEE','H')FROM DUAL;

 --RTRIM--
It remove only right side charecter given string

select RTRIM ('AAAALASYAAAA','A')FROM DUAL;

SELECT RTRIM ('PRADEEP REDDY', 'Y')FROM DUAL;

---LPAD--

SELECT LPAD('MEGHANA' ,13,'NEELAM')FROM DUAL;

SELECT LPAD('MEGHANA' ,13,'56789')FROM DUAL;

SELECT LPAD('MEGHANA' ,15,'56789')FROM DUAL;

SELECT LPAD(TO_CHAR(SYSDATE, 'DD/MM/YYYY'), 15, '0')from dual;

---RPAD--
SELECT LPAD('MEGHANA' ,13,'REDDY')FROM DUAL;

SELECT LPAD('MEGHANA' ,16,'*#!@#123')FROM DUAL;

--SUBSTRING--
SELECT SUBSTRING('MEGHANA REDDY',-2,5)FROM DUAL;

SELECT SUBSTR('MEGHANAREDDY', -2, 5) FROM DUAL;
SELECT SUBSTR('pradeep', -1, 5) FROM DUAL;

SELECT SUBSTR('Hello, World!', 1, 5) FROM DUAL;



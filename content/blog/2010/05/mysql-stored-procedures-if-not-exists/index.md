---
title: "MySQL Stored Procedures IF NOT EXISTS()"
date: "2010-05-06"
---

I have been using MSSQL with ASP.NET alot lately, and I really wanted to get some of the benefits of stored procedures into a PHP application I'm writing. I've known MySQL has supported them for a while but I guess I was always a bit too lazy to go through old code and convert it. I used the tool [HeidiSQL](http://www.heidisql.com/) to make the process a bit more painless.

The first stored procedure I attempted to write accepted 3 parameters and based on one of them checks a lookup table, and creates a new value in it if the same value does not already exist. Normally I would use an IF NOT EXISTS clause, which in Microsoft SQL would look like this

\[sourcecode language="sql"\] CREATE PROCEDURE someProc @SomeParam varchar(50), AS BEGIN DECLARE @SomeId int

IF NOT EXISTS(SELECT (1) FROM lookup\_table WHERE someField = @SomeParam ) BEGIN INSERT INTO lookup\_table (someField) VALUES(@someParam) SELECT @SomeId = @@identity END ELSE BEGIN SELECT @SomeId = id FROM lookup\_table WHERE someField = @SomeParam END

\-- Do some other stuff here with the id you just received and other data END \[/sourcecode\]

The above snippet would take a value, check a table for it, get its id, and if the record doesn't exist in the database create it and return the id. Then you could continue on and insert that id into another table or what have you.

Accomplishing the same thing with a MySQL stored procedure is a bit different. The code below shows how you would accomplish the same task.

\[sourcecode language="sql"\] CREATE PROCEDURE 'someProc' (IN 'in\_SomeParam' INT) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN DECLARE SomeId int; DECLARE CheckExists int; SET CheckExists = 0;

SELECT count(\*) INTO CheckExists from lookup\_table WHERE someField = in\_SomeParam;

IF (CheckExists > 0) THEN SELECT id INTO SomeId FROM lookup\_table WHERE someField = in\_SomeParam; ELSE INSERT INTO lookup\_table (someField ) VALUES(in\_SomeParam); SELECT SomeId = LAST\_INSERT\_ID(); END IF;

\# Do some other stuff here with the id you just received and other data END; \[/sourcecode\]

I'm sure I will find some more differences in things I am used to doing with stored procedures using T-SQL, and when I do I'll post them here.

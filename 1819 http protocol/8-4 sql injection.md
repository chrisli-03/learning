almost all web application use database to store information, so it constantly makes request to database
if sql statement generation is not secure, it is vulnerable to sql injection
in worst case attacker can modify database with sql injection
sql injection is user can send some sql statement in request to modify the sql statement used by server
for example using 'or'1=1 as password, it might add or 1=1 after where, which makes the statement true regardless of anything else

danger to sql injection
- getting knowledge on database structure
- leak information
- gaining higher privilege

preventing sql injection
- using prepared statement instead of creating sql statement directly
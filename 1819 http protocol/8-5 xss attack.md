xss is cross site scripting, it is a common security breach in web applications
attacker can post some malicious js script on the webpage, and do something when other users load that script, like getting cookie or private data
it is the most common attack on web

xss attack dangers
- stealing accounts
- modifing data (add/edit some sensitive information)
- stealing secret information

real world xss attack
- myspace xss attack
    - in 2005, an user named samy added some js script on his profile
    - when another user views his profile, the script will add him as friend, and copy that script on his profile
    - all victims becomes attackers

types of xss attack
- reflected xss (non-persistent or type I)
    - usually in the form like some url, it could be in an email or link on another site
- stored xss (persistent or type II)
    - usually in form like comments or profile, anyone accessing that page will run the script
- dom based xss (type 0)
    - unlike reflected of stored where attack payload is placed in the response page due to server flaw, but the client side code contained in the page runs differently due to the malicious modifications that have occurred in the dom environment

preventing xss attack
- request validation
    - checking if payload only contains legal characters
    - length
    - checking format of payload
- encoding
    - using html entity instead of plain text
    - common encoding < as `&gt;`, > as `&lt;`, etc.

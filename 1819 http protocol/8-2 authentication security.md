authentication is the most basic security in web applications
normally an app checks if username and password are correct before logging in
it is the core defense against attacks
if broken, then attacker can easily control all parts of webapp

user login -> create session -> write session to cookie
user action -> read cookie -> authenticate from session

authentication method
- html form based
- compound password
- ssl certificate

weak password
- short or empty password
- common word or sequence
- same username and password
- using default password

brute force attact
- attacker can try to guess the username/password
- if webapp allows user to unlimitedly try password, it might be vulnerable to brute force attact
- some tool (like burpsuite) provides a common password decrypt list
ways to prevent brute force
- captcha, and making it more complex, some captcha can be bypassed by ocr, so making it complex is necessary
- there are also other type of captcha not text based, like clicking images, sliding, etc.
- storing number of failed attempts in cookie, not very effective since cookie is stored on client side
- two factor authentication, combined of what you know (password) and what you have (phone/email), after correct password is entered, you need to comfirm on your phone or email

overdependent on md5 encryption
although you can decrypt md5, but it is possible to build a large map file, and look up the original text with the encrypted text

multistage authentication might not be as secure as one thinks
it is possible to attack between the stages to bypass some authentication
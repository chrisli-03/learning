in most web applications, session management is a fundamental safety component
it is very important when performing login, because it provides authentication after verifying user identity
because of its important, its often the target for attackers
if session management is broken, attacker can easily disguise as other users

bad session id
- transforming userid or other info with base64/ascii, attacker can easily generate his own session id
- predictable session ids, if session id has some pattern, attacker can guess what the next session id will be
- time based
- weak randomize

try to minimize lifetime of session to lower session id being used by attacker
if user does not need session anymore, provide a method to terminate session
when logging out, server should invalidate session id instead of only clearing browser cookie

preventions
- use https to send session id
- use secure if sending session id with cookie
- set session invalidate time, if user did not perform any action for a while, invalidate session
- always invalidate session after a period of time
- actual working logout
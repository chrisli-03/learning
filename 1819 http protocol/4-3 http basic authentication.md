- basic
client makes request to server
server responds with 401 status code
client sends username and password encoded in base64 (authorization header or other method)
if correct return 200, else return 401
- digest
client makes request to server
server responds with 401 and nonce
client sends back the following response array (username, realm, generate_md5_key(nonce, username, realm, URI, password_given_by_user_to_browser))
server takes username and realm (plus it knows the URI the client is requesting) and it looks up the password for that username. Then it goes and does its own version of generate_md5_key(nonce, username, realm, URI, password_I_have_for_this_user_in_my_db)
if correct return 200, else return 401
- ssl
encryption instead of plain text
- formbase
not part of http protocol
use cookie and session to maintain client status
http keep-alive, a.k.a., http persistent connection, is an instruction that allows a single TCP connection to remain open for multiple http requests/responses
http is request/response model, after server responds current http request closes
http persistent connections is actually referring to TCP persistent connections
in http/1.0, default is every request browser makes creates a http connection, closes after respond
after http/1.1, default is changed to persistent connections
non-persistent connections
create connection, transfer data, close connection ... create connection, transfer data, close connection
persistent connections
create connection, transfer data ... keeps connection ... transfer data, close connection
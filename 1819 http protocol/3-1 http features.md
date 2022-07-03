client server architecture
- client connect to server
- client send request to server
- server send response to client
client needs request type and path when sending a request
common request types are GET, HEAD, POST, etc.
HTTP protocol is simple, making transaction very fast
HTTP allows all type of data, using Content-Type to mark data type
HTTP only allow one request per request, connect will close after client receives response
HTTP is stateless, meaning it does not keep anything about client or previous request
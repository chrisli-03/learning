websocket is another protocol, created for bidirectional communication, not part of http
websocket is presistent, unlike http
websocket uses http to handshake
example of websocket request
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: ...
Sec-WebSocket-Protocol: ...
Sec-WebSocket-Version: ...
Origin: http://example.com
```

`Upgrade: websocket` and `Connection: Upgrade` tells server it is using websocket protocol
`Sec-WebSocket-Key` is a base64 encoded string for requesting authentication
`Sec-WebSocket-Protocol` is for differenciating different websockets under the same domain
`Sec-WebSocket-Version` is the version of websocket to use

example of websocket response
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: ...
Sec-WebSocket-Protocol: ...
```
`Upgrade: websocket` and `Connection: Upgrade` tells client it is using websocket protocol
`Sec-WebSocket-Accept` is authentication from server
`Sec-WebSocket-Protocol` is for differenciating different websockets under the same domain

websocket solves the issue that http request can only be send from the client to server, once a connection is established, server can send data to client without client sending a request
websocket is also not stateless like http, meaning it only needs handshake once
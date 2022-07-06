gateway can be used like a translator, it provides an abstract method of getting to a resource
gateway is a protocol converter
difference between gateway and proxy is proxy repeats the same protocol it received, but gateway can change its protocol to access some resource
(HTTP/*) server web gateway, client send http request to gateway, then gateway use another protocol to request resourse
(HTTP/HTTPS)  server security gateway, client send http request to gateway, gateway transform it to https
(HTTPS/HTTP) client security acceleration gateway, client send encrypted data to gateway, gateway decrypts and send http to other (internal) service
resource gateway, client request resource from server, server response through a gateway
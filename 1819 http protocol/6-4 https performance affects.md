extra layer increases round trip time
on top of 3 handshake to create tcp connection, https has some extra rtt
- 302 to redirect from http to https, new handshakes are required to establish connection
- rtt to check certificate
- tls handshake (not tcp handshake)
- browser compute cost, (encrypt, decrypt, check certificate, etc.)
- server compute cost
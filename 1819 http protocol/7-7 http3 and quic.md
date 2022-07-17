similar to http2 based on spdy, http3 is based on quic
http3 use udp instead of tcp
issues with http2
- head of line blocking (because its tcp)
- handshake latency
quic features
- 0 rtt to create connection
- multiplex without head of line blocking
- forward error correction
HTTP protocol is a subset of TCP/IP protocol
TCP/IP protocol is a series of rules about connection between devices on the internet
TCP/IP has several layers
1. Application layer - decides what service is provided (FTP, DNS, HTTP, etc.)
2. Transport layer - provide data transfer between devices in a network for application layer (tcp, udp)
3. Network layer - process packages transfered on the network, also decides the path to connect devices
4. Link layer - hardware to connect network devices (Network Interface Card, fiber, etc.)
Each layer encapsulates its own header to package, link layer also adds a footer, to prepare it for transfer, then decapsulates on the receiver side, each layer will remove what it added during encapsulate
TCP goes through `3 way handshake` process before sending any data
1. client sends SYN(seq=x) to server
2. server receives SYN(seq=x), sends SYN(seq=y) and ACK(ack=x+1) to client
3. client receives ACK(ack=x+1), sends ACK(ack=y+1) to server
the goal is to check the ability to send and receive package for client and server
step 1 client tells server it can send
step 2 server tells client it can receive and send
step 3 client tells server it can receive
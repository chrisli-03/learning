google announced spdy in late 2009 and deployed in 2010. spdy manipulates http traffic, with particular goals of reducing web page load latency and improving web security, although this depends on a combination of network and website deployment conditions
spdy adds a spdy layer between http and tls layer

problems with http
- single threaded
- heavy headers

spdy improvements
- multiplexing
- prioritizing
- compression of header
- enforce ssl protocol

spdy for normal users
- faster webpage loading
- safety

spdy for developers
- no need for large sprite sheets

what happened to spdy
http/2 diverged from spdy and eventually http/2 subsumed all usecases of spdy. After http/2 was ratified as a standard, major implementers, including Google, Mozilla, and Apple, deprecated spdy in favor of http/2. Since 2021, no modern browser supports spdy
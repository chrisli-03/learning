http is fast and simple, but it has some limitations
- http is based on tcp, there for it is limited by tcp limits
- since web2.0 webapps are becoming more complex with more js/css files, and mobile web is becoming more and more popular, mobile internet is not as stable as cable
- bandwidth, not a big factor like before with 4g and newer technologies
- latency, one connection can only send one request at a time, which means future requests are blocked by current request, can improve with caching
- request can only be initiated by client, client cannot accept anything except response
- request/response header are not compressed
- repeating header costs extra bandwidth
- non-forcefully compression
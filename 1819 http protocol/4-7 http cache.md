what can be cached?
static resource like js, css, image, etc. that doesnt update very frequently

some http headers related to cache
Cache-Control, decides cache behaviour and when cache expires
Expires, represent when cache expires, lower priority than Cache-Control's max-age
Last-Modified, last time resource was modified, from server to client
if-Modified-Since, last time resource was modified, from client to server
Etag, or entity tag, identifier for a specific version of a resource, from server to client
if-None-Match, identifier for a specific version of a resource, from client ot server

ways cache works
1. using Expires
when server responds a resource, it adds a Expires on header, client only request new file after Expires passed
2. on top of Expires, use Last-Modified and if-Modified-Since
server also adds a Last-Modified time in response header, after Expires passed, client request will add if-Modified-Since in request header (what server returned from Last-Modified last time), server's new modified time is same, server will return 304 Not Modified, otherwise server will return new resource
3. on top of 1 and 2, add Etag and If-None-Match and max-age instead of Expires
server will compare etag first, it has a higher priority, if etag is different, server will return new resource
4. md5/hash cache
add a md5 or hash to static file name, this solves the issue of browser cant know if resource changed bypassing expire time
5. cdn cache

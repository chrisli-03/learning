-get
request resource at an uri
-post
similar to get, but allow adding data to body instead of url, used to create new resource
-put
similar to post, used to replase a resource at uri, put is also idempotent and post is not
a request is idempotent means calling it one or many time will result in the same state
for example replacing the same resource multiple times will not have any side effect, but creating multiple new resource will result in duplicated resources
-head
similar to get, but only request the header
-delete
delete a resource at uri
-options
check what request types a resource at uri supports
-trace
performs a message loop-back test along the path to the target resource, used for debugging
-connect
starts two-way communications with the requested resource, can be used to open a tunnel
can be used in a proxy server
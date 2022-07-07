http has a header for partial transfer, Range on request header and Content-Range on response header
Range:(unit=first byte pos)-[last byte pos]
example uses
Range: bytes=0-499 // 0 to 499 bytes
Range: bytes=500-999 // 500 to 999 bytes
Range: bytes=-500 // last 500 bytes
Range: bytes=500- // all bytes after 500
Range: bytes=500-600,601-999 // accept both ranges

Content-Range includes the start&end byte and the size of entire file
Content-Range: bytes(unit first byte pos) - [last byte pos]/[entity length]

status code is also different
HTTP/1.1 200 OK (not using partial)
HTTP/1.1 206 Parital Content (using partial)

1. client downloads a 1024k file, and already downloaded 512k
2. internet disconnected, to continue need to add in http request header Range:bytes=512000-, telling server to respond from 512k position
3. server receives request, starts transfer from 512k pos, and add Content-Range:bytes 512000-/1024000 in response header, and status code will be 206 instead of 200

downloading file with multithread is similar, each thread will download a certain range
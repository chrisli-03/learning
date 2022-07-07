content negotiation is the mechanism that is used for serving different representations of a resource to the same URI to help the user agent specify which representation is best suited for the user (for example, which document language, which image format, or which content encoding)

- client driven
client makes request, server responds with a list of options, then client picks one and request again
- server driven
server checks request header to determine which option to respond
- agent drive
some agent helps client makes the decision

some headers used in content negotiation
Accept, tells server what media format
Accept-Language, tells server what language to use
Accept-Charset, tells server what charset to use
Accept-Encoding, tells server what encoding to use

some headers in response, match with request header
Content-Type
Content-Language
Content-Charset
Content-Encoding

fallback
Accept-Language: en;q=0.5,fr;q=0.0,nl;q=1.0,tr;q=0.0
this means client is willing to accept nl, if nl is not available en can be used as fallback (notice value after q=)
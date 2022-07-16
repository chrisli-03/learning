http2 derived from the earlier experimental SPDY protocol
http2 is binary instead of text
http2 introduces new binary framing layer, which dictates how the http messages are encapsulated and transferred between the client and server
http1 uses newline delimited plaintext protocol, while http2 communication is split into smaller messages and frames, each of which is encoded in binary format

to understand new binary framing mechanism which is used to exchanged data between the client and server, we need to get familiarise ourselves with the http2 terminology:
stream: A bidirectional flow of bytes within an established connection, which may carry one or more messages
message: A complete sequence of frames that map to a logical request or response message
frame: The smallest unit of communication in http2, each containing a frame header, which at a minimum identifies the stream to which the frame belongs
- all communication is performed over a single TCP connection that can carry any number of bidirectional streams
- each stream has a unique identifier and optional priority information that is used to carry bidirectional messages
- each message is a logical http message, such as a request, or response, which consists of one or more frames
- the frame is the smallest unit of communication that carries a specific type of data, e.g. http headers, message payload, and so on. Frames from different streams may be interleaved and then reassembled via the embedded stream identifier in the header of each frame

http1, client uses multiple tcp connections to make multiple parallel requests to improve performance. with http1 only one response can be delivered at a time (response queuing) per connection

http2, new binary framing layer removes these limitations, and enables full request and response multiplexing, by allowing the client and server to break down an http message into independent frames, interleave them, and then reassemble them on the other end

http2 require one connection per origin, since it does not need multiple tcp connections

another powerful new feature of http2 is the ability of the server to send multiple responses for a single client request. that is, in addition to the response to the original request, the server can push additional resources to the client without the client having to request each one explicitly

http2 allows the transmitted header fields to be encoded via a static Huffman code, which reduces their individual transfer size
it requires that both the client and server maintain and update an indexed list of previously seen header fields (in other words, it establishes a shared compression context), which is then used as a reference to efficiently encode previously transmitted values
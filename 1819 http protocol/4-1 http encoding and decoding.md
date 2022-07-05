encoding is the translation between binary to text
- character repertoire
an unordered set of characters to be encoded
- coded character set
a function that maps characters to code points, for example in ascii letter "A" is 65
- character encoding form
the mapping of code points to code units to facilitate storage in a system that represents numbers as bit sequences of fixed length

some common encodings
- ASCII, Latin letters, numbers, some symbols
- GBK, chinese
- ISO-8859-1, used throughout the Americas, Western Europe, Oceania, and much of Africa
- Unicode, information technology standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems
UTF-8, 16, 24, 32
UTF-8 requires 8, 16, 24, 32 bits to encode a Unicode character, UTF-32 always require 32 bits to encode a character

garbled text
could be because encoding and decoding is different, or the character does not exist in the encoding

url uses ASCII, there for any characters not in ASCII needs encoding
url also has some preserved characters ie. &, to use these in url it needs to be encoded
for characters not in ASCII, encode is % + unicode, for preserved characters, encode is % + ASCII
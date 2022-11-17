## I/O

#### Accessing A File

absolute path

```java
File file = new File("d:/filename");
```

relative path (relative to workspace)

```java
File file = new File("filename")
```

#### InputStream/OutputStream

Read from/write to a source

I/O stream implements `AutoClosable` interface, by declaring it as a `try/catch` block parameter, it will automatically close after try, catch, finally finishes executing.

```java
try (FileInputStream fis = new FileInputStream(filename)) {...}
```

#### DataInputStream/DataOutputStream

Read from/write to a source as primitive types.

`DataInputStream` can only read file written with `DataOutputStream`

#### InputObjectStream/OutputObjectStream

Read from/write to a source as Objects.

Objects must implement `Serializable` interface to be writter/read

Serial Version UID should change when Class' internal changes.

`OutputObjectStream.writeObject` for writting object.

`InputObjectStream.readObject` for reading object.

#### FileReader/FileWriter

Read from/write to a file with characters

#### BufferedReader/PrintWriter

Buffered reader reads a chunk and stores chunk in a buffer first, then read from buffer to reduce disk access.

Need to pass existing reader as parameter.

```java
try (
    FileReader fr = new FileReader(filename);
    BufferedReader br = new BufferedReader(fr);
 ) {...}
```

Print writer is similar, it stores data to write in a buffer, when buffer is full it writes everything in buffer to file.

Print writer can use `.flush()` to write before buffer is full.



#### Stream vs Reader/Writer

A stream is the raw method of performing operation on a resource. It access the data byte by byte without performing any kind of translation. Mainly used for image data/binary files.

A reader/writer is designed for character streams. If the information is all text, reader/writer will take care of character encoding/decoding and provide unicode characters from raw input stream. Mainly used for text files.

Changing input stream to reader

```java
Reader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
```











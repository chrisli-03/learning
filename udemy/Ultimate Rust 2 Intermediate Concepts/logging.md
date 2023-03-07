logging is not part of standard lib, but there is an official lib `log` for logging

five levels of logging

1. Error

2. Warn

3. Info

4. Debug

5. Trace

for error macro you can pass an optional target value

`warn!(target: "puzzle", "Warning")`

if a target is not set it is default to current module

application need to use a logging library so the logs are directed to somewhere. eg. stdout, cloud, etc.



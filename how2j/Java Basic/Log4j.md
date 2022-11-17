## Log4j

#### Basic Usage

```java
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;

public class TestLog4j {
    // creates the log object
    static Logger logger = Logger.getLogger(TestLog4j.class);
    public static void main(String[] args) throws Exceptions {
        // use default cosnfiguration
        BasicConfigurator.configure();
        // set logger output level
        logger.setLevel(Level.DEBUG);
        // different type of logs

        logger.trace("trace");
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");
        logger.fatal("fatal");
    }
}
```

#### Configure Log4j

Add a `log4j.properties` file under `src`

```textile
# logger level set as debug, level lower than debug won't be logged.
# logger outputs to stdout and R.
log4j.rootLogger=debug, stdout, R
 
# stdout (console).
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
# pattern to output the caller's file name and line number.
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout

log4j.appender.stdout.layout.ConversionPattern=%5p [%t] (%F:%L) - %m%n


# R (output to a file).
log4j.appender.R=org.apache.log4j.RollingFileAppender
# filename
log4j.appender.R.File=example.log
# max filesize
log4j.appender.R.MaxFileSize=100KB
# roll max 5 files
log4j.appender.R.MaxBackupIndex=5

# pattern to output the caller's file name and line number.
log4j.appender.R.layout=org.apache.log4j.PatternLayout
log4j.appender.R.layout.ConversionPattern=%p %t %c - %m%n
```

pattern explaination

%c - full name of class logging

%d - date of logging, default format ISO8601, can use custom format (ie. %d{yyy-MM-dd HH:mm:ss} -> 2002-10-18 22:10:28)

%f - class name of class logging

%l - location (line number) of where log happened

%m - message passed when logged

%n - new line character (\r\n on windows, \n on unix)

%p - level of log

%r - time took to log

%t - thread name of logger

#### .xml

log4j can also be configured with `.xml` file, put log4j.xml under `src`

```xml

```















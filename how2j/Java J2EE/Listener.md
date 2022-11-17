## Listener

#### Context Listener

`Context Listener` implements `ServletContextListener` interface.

Listens for web application start/shutdown.

```java
public class ContextListener implements ServletContextListener {
    @Override
    public void contextDestroyed(ServletContextEvent arg0) {
        // some action on web app destroyed
    }

    @Override
    public void contextInitialized(ServletContextEvent arg0) {
        // some action on web app init/startup
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.ContextListener</listener-class>
</listener>
```

#### Context Attribute Listener

`Context Attribute Listener` implements `ServletContextAttributeListener` interface.

Listenes for web application's attribute changes.

```java
public class ContextAttributeListener implements ServletContextAttributeListener {
    @Override
    public void attributeAdded(ServletContextAttributeEvent e) {
        // some action on new attribute added
    }

    @Override
    public void attributeRemoved(ServletContextAttributeEvent e) {
        // some action on attribute removed
    }

    @Overrid
    public void attributeReplaced(ServletContextAttributeEvent e) {
        // some action on attribute changed
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.ContextAttributeListener</listener-class>
</listener>
```

Attribute change example

```xml
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%
    application.setAttribute("test", 1);
    application.setAttribute("test", 2);
    application.removeAttribute("test");
%>
```

#### Session Listener

`Session Listener` implements `HttpSessionListener` interface.

Listens for session create/destroy

```java
public class SessionListener implements HttpSessionListener {
    @Override
    public void sessionCreated(HttpSessionEvent e) {
        // some action on session create
    }

    @Override
    public void sesionDestroyed(HttpSessionEvent e) {
        // some action on session destroy
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.SessionListener</listener-class>
</listener>
```

#### Session Attribute Listener

`Session Attribute Listener` implements `HttpSessionAttributeListener` interface.

Listenes for session's attribute changes.

```java
public class SessionAttributeListener implements HttpSessionAttributeListener {
    @Override
    public void attributeAdded(HttpSessionBindingEvent e) {        
        // some action on new attribute added
    }
    
    @Override
    public void attributeRemoved(HttpSessionBindingEvent e) {
        // some action on attribute removed
    }
    
    @Overrid
    public void attributeReplaced(HttpSessionBindingEvent e) {
        // some action on attribute changed
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.SessionAttributeListener</listener-class>
</listener>
```

Attribute change example

```xml
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%
    session.setAttribute("test", 1);
    session.setAttribute("test", 2);
    session.removeAttribute("test");
%>
```

#### Request Listener

`Request Listener`implements`ServletRequestListener` interface.

Listens for request create/destroy

```java
public class RequestListener implements ServletRequestListener {
    @Override
    public void requestCreated(HttpSessionEvent e) {
        // some action on request create
    }
    @Override
    public void requestDestroyed(ServletRequestEvent e) {
        // some action on request destroy
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.RequestListener</listener-class>
</listener>
```

#### Request Attribute Listener

`Request Attribute Listener` implements `ServletRequestAttributeListener` interface.

Listenes for request's attribute changes.

```java
public class RequestAttributeListener implements ServletRequestAttributeListener {
    @Override
    public void attributeAdded(ServletRequestAttributeEvent e) {
        // some action on new attribute added
    }
    @Override
    public void attributeRemoved(ServletRequestAttributeEvent e) {
        // some action on attribute removed
    }
    @Overrid
    public void attributeReplaced(ServletRequestAttributeEvent e) {
        // some action on attribute changed
    }
}
```

Add listener in `web.xml`

```xml
<listener>
    <listener-class>listener.RequestAttributeListener</listener-class>
</listener>
```

Attribute change example

```xml
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%
    request.setAttribute("test", 1);
    request.setAttribute("test", 2);
    request.removeAttribute("test");
%>
```

#### Example Usage

1. Use session listener to record number of users online.

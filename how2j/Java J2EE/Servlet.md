## Servlet

#### Requirement

import `servlet-api.jar` to use Servlet

#### Basic Usage

Create servlet class

```java
public class TestServlet extends HttpServlet {
    // handles get request
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            // writes back to client
            response.getWriter().println("<h1>Test Servlet</h1>");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

Modify `web/WEB-INF/web.xml` (create if not exist)

`web.xml` maps url to servlet, servlet-name of servlet and servlet-mapping must be equal.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app>
    <servlet>
        <servlet-name>TestServlet</servlet-name>
        <servlet-class>TestServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>TestServlet</servlet-name>
        <url-pattern>/test</url-pattern>
    </servlet-mapping>
</web-app>
```

#### Request Parameter

```java
public class TestServlet extends HttpServlet {
    // handles get request
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            // gets parameter called "name"
            request.getParameter("name");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Life Cycle

1. Received request from client

2. From `web.xml`, find mapped servlet class

3. Create instance of servlet class

4. Run doGet/doPost

#### service()

`service()` is ran before doGet/doPost, it determines whether doGet/doPost is used.

Can be overwritten.

#### Redirect

1. Server redirect, client won't be redirected
   
   ```java
   protected void service(HttpServletRequest request, HttpServletResponse response) {
       // sends the data of success.html to client
       request.getRequestDispatcher("success.html").forward(request, response);
   }
   ```

2. Client redirect.
   
   ```java
   protected void service(HttpServletRequest request, HttpServletResponse response) {
       // tell client to redirect to fail.html
       response.sendRedirect("fail.html");
   }
   ```

#### Initialization

Use `load-on-startup` in `web.xml` servlet setup to run `init()` method on server start.

```xml
<servlet>
    <servlet-name>TestServlet</servlet-name>
    <servlet-class>TestServlet</servlet-name>
    <!-- 10 is priority, lower means higher priority -->
    <load-on-startup>10</load-on-startup>
</servlet>
```

```java
public class TestServlet extends HttpServlet {
    public void init(ServletConfig config) {
        System.out.println("init of Hello Servlet");
    }
}
```

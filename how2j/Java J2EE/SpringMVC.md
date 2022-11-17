## SpringMVC

Requests are passed to `DispatcherServlet`, `DispatcherServlet` will then pick a bean (normally a controller) to handle request.

#### Basic Usage

First setup servlet

WEB-INF/web.xml

```xml
<servlet>
    <servlet-name>springmvc</servlet-name>
    <servlet-class>
        org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>springmvc</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

Then choose controller for requests

WEB-INF/springmvc-servlet.xml

.xml file name is {{ servlet-name }}.xml

```xml
<beans>
    <bean id="simpleURLHandlerMapping" class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
          <property name="mappings">
              <props>
                  <prop key="/index">indexController</prop>
              </props>
          </property>
      </bean>
      <bean id="indexController" class="controller.IndexController"></bean>
</beans>
```

IndexController class

```java
public class IndexController implements Controller {
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        // choose jsp to return, add property
        ModelAndView mav = new ModelAndView("index.jsp");
        mav.addObject("message", "Hello Spring MVC");
        return mav;
    }
}
```

index.jsp

```java
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<h1>${message}</h1>
```

#### View Resolver

Use view resolver to prepend path and append extension

springmvc-servlet.xml

```xml
<beans>
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/page/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
    <!-- url handler -->
    ...
</beans>
```

Now `new ModelAndView("index")` will return the file `WEB-INF/page/index.jsp`

#### Controller Annotation

```java
@Controller
public class IndexController {
    @RequestMapping("/index")
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mav = new ModelAndView("index");
        mav.addObject("message", "Hello Spring MVC");
        return mav;
    }
}
```

Now instead of using `SimpleUrlHandlerMapping` bean, use `<context:component-scan base-package="controller" />`

#### Parameter Injection

Product class

```java
Public class Product {
    private String productName;
    public setProductName(String productName) {
        this.productName = productName;
    }
    public getProductName() {
        return productName;
    }
}
```

Controller class

```java
@Controller
public class FormController {
    @RequestMapping("/add")
    public ModelAndView add(Product product) throws Exception {
        // ...
    }
}
```

Now request to `/add` with data `{ productName: '...' }` will be automatically injected into `product` parameter

#### Redirect

Redirect user to another url

```java
@Controller
public class IndexController {
    @RequestMapping("/redirect")
    public ModelAndView redirect() {
        ModelAndView mav = new ModelAndView("redirect:/index");
        return mav;
    }
}
```

Users trying to access `/redirect` will be redirected to `/index`

#### Session

Session can be retrieved from parameter

```java
@RequestMapping("/session")
public ModelAndView session(HttpSession session) {
    session.getAttribute(...);
    session.setAttribute(..., ...);
}
```

#### File

In order to access static resource, add this to `web.xml` before `spring mvc` servlet

```xml
<servlet-mapping>
    <servlet-name>default</servlet-name>
    <url-pattern>*.jpg</url-patter>
</servlet-mapping>
```

To process files, add `<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver"/>` to `springmvc-servlet`

Pojo for receiving file

```java
public class UploadedFile {
    MultipartFile file;
    public MultipartFile getFile() {
        return file;
    }
    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
```

Upload controller

```java
@Controller
public class UploadController {
    // file is injected automatically
    @RequestMapping("/upload")
    public ModelAndView upload(HttpServletRequest request, UploadedFile file) {
        // file name to store file
        String fileName = 'file.jpg';
        // create new file under /image directory under /web
        File newFile = new File(request.getServletContext().getRealPath("/image"), newFileName);    
        newFile.getParentFile().mkdirs();
        // transfer uploaded file to created file
        file.getIamge().transferTo(newFile);
        
        ModelAndView mov = new ModelAndView("showUploadedFile");
        return mov;
    }
}
```

#### Interceptor

```java
public class IndexInterceptor extends HandlerInterceptorAdapter {
    /*
     * executes before service executes,
     * if returns false, executes all interceptors' afterCompletion()
     *    then exit interceptor
     * if returns true, execute next interceptor until all interceptor finishes
     *   then controller executes
     *   then executes all postHandle()
     *   then executes all afterCompletion()
     */
     public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
         // some action before control executes
         return true;
     }
     
    /*
     * executes after service executes and before view is rendered
     * can add parameters to modelAndView (ie. time)
     */
     public void postHandle(HttpServletRequest request, HttpServletResposne response, Object handler, ModelAndView modelAndView) throws Exception {
         // some action before render view
     }
     
    /*
     * executes after DispatchServlet completely finishes, can be used for clean up
     * when interceptor catches an error, all afterCompletion() are executed
     */
     public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
         // some action after view renders
     }
}
```

Configuring interceptor

springmvc-servlet.xml

```xml
<!-- add after controller -->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/index"/>
        <bean class="interceptor.IndexInterceptor"/>
    </mvc:interceptor>
    <!-- when multiple interceptors are setup, run preHandles in order, then postHandle and afterCompletion in reverse order -->
</mvc:interceptors>
```

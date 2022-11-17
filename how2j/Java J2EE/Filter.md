## Filter

#### Basic Usage

Filter acts like a preprocessor between request and servlet.

Create `Filter class`

```java
public class TestFilter implements Filter {
    @Override
    public void destroy() {
        
    }
    
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        // some processing step
        chain.doFilter(request, response);
    }
    
    @Override
    public void init(FilterConfig arg0) throws ServletException {
        
    }
}
```

Add filter in `web.xml`

```xml
<filter>
    <filter-name>TestFilter</filter-name>
    <filter-class>filter.TestFilter</filter-name>
</filter>
<filter-mapping>
    <filter-name>TestFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

#### Example Usage

1. Add encoding to request. `request.setCharacterEncoding("UTF-8")`

2. Check authentication.

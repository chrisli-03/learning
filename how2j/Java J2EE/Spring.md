## Spring

#### Inversion Of Control

Instead of creating objects with `new`, the container creates the object for you.

#### Dependency Injection

A form of IoC, implementations are passed into an object through constructors/ setters/service lookups, which the object will `depend` on th behave correctly.

#### Basic Usage

Product class

```java
@Component("product")
public class Product {
    private String name;
    
    @Autowired
    private Category category;
    
    public void setName(String name) {
        this.name = name;
    }
    public void getName() {
        return name;
    }
}
```

```java
@Component("category")
public class Category {
    private String name;
    public void setName(String name) {
        this.name = name;
    }
    public void getName() {
        return name;
    }
}
```

```java
public static void main(String[] args) {
    ApplicationContext context = new ClassPathXmlApplicationContext(new String[] { "applicationContext.xml" });
    Product product = (Product) context.getBean("product");
    // action on product
}
```

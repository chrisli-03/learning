## Annotation

#### Built-in Annotation

`Override` - Rewrites a method inherited from parent

`Deprecated` - Method's that has been abandoned, shouldn't be used anymore

`SuppressWarnings` - Ignores warning raised

`SafeVarargs` - Ignores some warning raised by generic argument types

`FunctionalInterface` - Interfaces with only one abstract method (can have multiple default or static method) can have this annotation, usually used with Lambda expressions

#### Custom Annotation

Use `@interface` to define an Annotation

```java
public @interface TestAnnotation
```

Annotations can be retrieved with `class.getAnnotation`

```java
@TestAnnotation(str="123")
public class TestClass {
    public static void main(String[] args) {
        // get annotation
        TestAnnotation ta = TestClass.class.getAnnotation(TestAnnotation.class);
        // get annotation properties
        String str = ta.str();    
    }
}
```

#### Meta-Annotation

Meta-Annotations are annotations that are applied to another annotation.

`@Target` - Describe what type this annotation can be used on

```java
// this annotation can be applied to methods and types
@Target({METHOD,TYPE})
public @interface TestAnnotation
```

`@Retention` - Describe when this annotation can be retrieved during life cycle

```java
// this annotation can be retrieved during runtime
@Retention(RetentionPolicy.RUNTIME)
public @interface TestAnnotation
```

`@Inherited` - Children of class with this annotation will also be applied this annotation

```java
@Inherited
public @interface TestAnnotation

@TestAnnotation
public class TestClassA

// this class also has @TestAnnotation annotation
public class TestClassB extends TestClassA
```

`@Documented` - Write into javadoc

```java
// javadoc will include TestAnnotation
@Documented
public @interface TestAnnotation
```

`@Repeatable` - This annotation can be applied multiple times

```java
public @interface TestAnnotations {
    TestAnnotation[] value();
}

@Repeatable(TestAnnotations.class)
public @interface TestAnnotation {
    String value();
}

@TestAnnotation("a")
@TestAnnotation("b")
public void test() {
    // holds "a" and "b"
    TestAnnotation[] annotations= this.getClass().getMethod("test").getAnnotationsByType(TestAnnotation.class);
}
```



Reflection

#### Class Objects

A `Class` object contains metadata about a class of an object

How to retrieve a Class object

1. `Class.forName`

2. `ObjectA.class`

3. new ObjectA().getClass()

Where ObjectA is some defined class `public class ObjectA {}`

Retrieving a Class object will cause the Class to be initialized.

For Example

```java
public class ObjectA {
    public String name;
    static {
        System.out.println("initializing");
    }
}
```

The static block will run when Class object for ObjectA is retrieved (Except when retrieving with Class class = ObjectA.class)

### Object Creation

```java
public static void main(String[] args) {
    // object to reflect off of
    ObjectA obj1 = new ObjectA();
    try {
        // name of class
        String className = "ObjectA";
        // get class
        Class objClass = Class.forName(className);
        // get constructor
        Constructor c = objClass.getConstructor();
        // create new object
        ObjectA obj2 = (ObjectA) c.newInstance();
    }
}
```

### Object Modification

```java
public static void main(String[] args) {
    // object to change field
    ObjectA obj = new ObjectA();
    // set name field
    obj.name = "name1";
    try {
        // get class of object
        Field field = obj1.getClass.getDeclaredField("name");
        // change field of object
        field.set(obj, "name2");
    }
}
```

Note: 

`getField` can only retrieve public (including inherited from parent) fields.

`getDeclaredField` can retrieve all fields (including private) expect fields inherited from parent. In order to access `value` of private fields `setAccessible(true)` is necessary.

### Calling Class Method

Assume Class ObjectA has setter `setName`

```java
public static void main(String[] args) {
    // object to call method from
    ObjectA obj = new ObjectA();
    try {
        // get method of object
        Method method = obj.getClass().getMethod("setName", String.class);
        // invoke method to call
        method.invoke(obj, "name");
    }
}
```

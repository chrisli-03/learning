## JUnit

#### @Test

Use `@Test` to define a test case.

```java
@Test
public void test1() {
    int result = 1 + 2;
    Assert.assertEquals(result, 3)
}
```

#### @Before & @After

`@Before` is used for preparation before any test is ran, such as variable initialization.

`@After` is used for cleanup after all tests finish, such as disconnecting connections.

```java
@Before
public void before() {
    // some preparation step
}
@After
public void after() {
    // some cleanup step
}
```

#### @RunWith & @Suite

`@RunWith` will reference a new class to run test instead of using JUnit's built-in runner.

`@Suite` defines a set of tests.

These two annotations together can run multiple test files in one run.

```java
// this is one way (not the only way to work with these annotations)
@RunWith(Suite.class)
@Suite.SuiteClasses({ TestCase1.class, TestCase2.class })
public class TestSuite() {}
```



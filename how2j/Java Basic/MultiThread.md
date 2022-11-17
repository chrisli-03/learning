## MultiThread

#### Thread

A Class can extend `Thread` class and overwrite `run()` method.

Instance of such class can start a thread by running `.run()`

#### Runnable

A Class can implement `Runnable` interface and implement `run()` method.

Directly running `.run()` will not start a new thread, it must be passed as a parameter into a `Thread` Object to start a new thread.

```java
new Thread(some_runnable_instance).start();
```

#### Anonymous Thread

Rewrite run method while initializing `Thread`

```java
Thread t1 = new Thread() {
    public void run() {
        // some action here
    }
}
```

#### Thread vs Runnable

Runnable is usually the preferred way of multithreading, because it doesn't specialize the thread's behaviour but just giving it something to run which makes it the philosophically "purer" method.

ALso Runnable being an interface allows you to extend another abstract class.

#### Synchronized

Used to lock an object.

```java
// this block will only execute if thread has access to object
synchronized(object) {
    // some methods here
}
```

Can also be used as a descriptor for method

```java
public synchronized void method1() {
    // this method only executes if thread has access to object
}
```

#### Wait/Notify

wait - pause a thread until notify, must be in synchronized block.

notify - wake one thread from wait.

notifyAll - wake all threads from wait.

#### Lock

Another way of locking an object.

#### Synchronized vs Lock

Lock is an interface, synchronized is a keyword.

Lock can be acquired conditionally, and give up if unable to acquire for a while. Synchronized will wait forever. Which makes Lock easier to avoid deadlocks.

Synchronized is freed automatically, lock must be freed manually.

#### ThreadPool

A threadpool is a group of worker threads waiting for job, it reuses threads instead of creating new ones.

A group of fixed size threads are created, a service can pull a thread from threadpool and put it back after job completes.

#### Atomic CLass

Java has built in atomic classes such as `AtomicInteger`

`AtomicInterger` has thread safe methods such as `.incrementAndGet()`, only one thread can call this method at the sametime.

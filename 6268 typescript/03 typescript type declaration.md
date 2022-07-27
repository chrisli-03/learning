- type declaration
    - type declaration is a core feature of typescript
    - type declaration can setup type to variables
        ```
            // declaring variable with number type
            let a: number;
            a = 10; // ok
            a = 'string'; // error
        ```
    - automatic type declaration when assigning value during variable initialization
        ```
            // normal declaring variable and assigning value
            let b: number = 10;

            // if you dont add :number, typescript will automatically assign type number to variable
            let c = 10; // also type number
            c = 'string'; // error
        ```
    - function parameter type, javascript does not check type of function parameter, which can be very error prone
        javascript
        ```
            function sum(a, b) {
                return a + b;
            }
            sum(123, 456); // return 579, expected
            sum(123, '456'); // return '123456', not expected
        ```
        typescript
        ```
            function sum(a: number, b: number) {
                return a + b;
            }
            sum(123, 456); // ok
            sum(123, '456'); // error
            sum(123); sum(123, 456, 789); // also error because number of parameters is different
        ```
    - function return value type
        ``` 
            function add_one(a: number): number {
                return a + 1; // ok
            }
            function add_one(a: number): number {
                return a + '1'; // error, because return value should be a number, and here its a string
            }
        ```
allowJs - allow compiler to compile js file
```
compilerOptions: {
    // default value is false
    allowJs: true
}
```

checkJs - allow compiler to validate type in js file
```
compilerOptions: {
    // default value is false
    checkJs: true // when its true, compiler will throw error for type error in js file
}

let foo = 10;
foo = 'string'; // this will cause error is checkJs is true
```

removeComments - remove comments during compile
```
compilerOptions: {
    // default value is false
    removeComments: true
}
```

noEmit - if set to true compiler will not generate any file during compilation
```
compilerOptions: {
    // default value is false
    noEmit: true // compiler will not generate any file like js file
}
```

noEmitOnError - similar to noEmit, but only on error
```
compilerOptions: {
    // default value is false
    noEmitOnError: true
}
```


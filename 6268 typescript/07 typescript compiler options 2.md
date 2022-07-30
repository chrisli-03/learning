compilerOptions are configs that tells compiler how to compile ts files

target - set the version of ES the compiler will compile the file to
```
compilerOptions: {
    target: "ES3" // compiled code will be compatible with ES3
}
```

module - set what type of module the compile file should use
```
compilerOptions: {
    // other options includes commonjs, amd, umd, etc.
    module: "esnext"
}
```

lib - set the library declaration files the project uses
```
compilerOptions: {
    // for example if you used document functions include "dom", if you used promise include "es6" or "esnext"
    lib: ["dom"]
}
```

outDir - set the directory to save the compiled files
```
compilerOptions: {
    optDir: "./dist" // compiled files will be generated in dist folder
}
```

outFile - merge the compiled files to a single file
```
compilerOptions: {
    outFile: "app.js" // all compiled files will be merged into app.js file
}
```


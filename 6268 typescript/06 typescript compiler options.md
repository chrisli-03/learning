to change config for typescript compiler options, you need a `tsconfig.json` file

include - set the files to compile
```
// ** means any directory
// * means any file
include: ['./src/**/*'] // this means compile all files in src folder
```

exclude - set the files not to compile
```
// exclude has default value ["node_modules", "bower_components", "jspm_packages"]
exclude: ['./dist'] // this means don't compile files in dist folder
```

extends - inherit another config file
```
extends: "./configs/base" // this will contain all configs from /configs/base.json file
```

files - set a list of files to compile
```
files: ['file1.ts', 'file2.ts', 'file3.ts'] // this means file1.ts, file2.ts, file3.ts will be compiled
```

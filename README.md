# TypeScript- Notes
TypeScript notes Maintainer repo which will include basics to advanced concepts of typeScript along with some real world problems based on them.

## What is Typescript

- Typescript is a Javascript superset , what it means is a langauge which is built up on Javascript. It adds new feature to Javascript and provides advantages to it.
- Typescript cannot be excuted by browser, since they browers have a javascript environment. Node.js also can't execute typescript.
- Typescript is a powerful compiler to complile typescript code to javscript code. It provides a cleaner syntax to javacript code.
- Typescript adds types in javascript. Which helps in identiying errors before runtime . Provides error checking mechanism.

### Install Typescript

- Before installing typescript ,make sure to install node.js as we use npm to install typescript.<br>
  **Refer [node.js](https://nodejs.org/en/download/) on how to install node and npm**

- Once node.js is installed in your local machine , now let's carry on with typescript. 
   From the terminal execute the following command in - `npm install typescript --save-dev`
   
   Note: For mac users insert a sudo before the above command - `sudo npm install typescript --save-dev`

- Once the above command is executed, Typescript compiler will be installed in your local machine. This compiler will be used to compile typescript code to javascript code.

- To execute typescript files use `tsc` command followed by the typescript file.<br>
   Example: `tsc <file-name>.ts`
   
- Compiling typescript using `tsc` is time consuming as we will have to run that command everytime a change occurs. Instead use `--watch` or `-w` along with the       above command. Watch will make sure the file is compiled everytime a change occurs. To terminate watch mode press `ctrl+c`.<br>
  Example: `tsc <file-name>.ts --watch` or `tsc <file-name>.ts -w`

- Once the above command is executed successfully a javascript files with the sample <file-name> will be generated. <br>
  But the difference between the files is that all the types set in typescript file will not be present in javvascript file.

**Note**: To know more about typescript ,please do follow the [typescript documentation](https://www.typescriptlang.org/)


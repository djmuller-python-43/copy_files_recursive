

# copy-files-recursive &middot; 
## This program helps you to copy files from a nested folder structure eg PICS folder.


### Built With
This program is written in JavaScript using Node.JS.

The following modules are imported:
 1. [fs-extra](https://www.npmjs.com/package/fs-extra)  
 2. [path](https://nodejs.org/api/path.html) 
 3. [recursive-readdir](https://www.npmjs.com/package/recursive-readdir)  

### How it works
 
 - Lets say you have a folder and inside that folder you have some subfolders which can have files. 
 
 - Now lets say you are looking for a type of file, like in my case was '.pes'.

 - You would first then need to loop over all folders and subfolders to get the path to all the files.
 - This is where [recursive-readdir](https://www.npmjs.com/package/recursive-readdir) comes in, you pass in a source directory and it does the rest. 

 - Once you have that list of file paths, which will be an array. 

 - You need to loop through that array using the filter() method, looking for that file format eg '.pes'.

 - Then copy those files to another folder eg PES 

 - This program does all that for you. 

 - All you need to do is provide the file format in the includes('.pes'),
 - which is then filtered to only produce the files with '.pes' extension.

 - The copyFileSync() method has 2 arguments src, dest.

 - The variable fn is the source and, path.join('./PES', '/', path.basename(fn)) is destination.

## Installing / Getting started

A quick introduction of how to get up & running.

Open your terminal and type these commands in your terminal to clone repository

```shell
git clone https://github.com/djmuller-python-43/copy_files_recursive.git
cd copy_files_recursive/
```
Type the following command to install all the dependencies for project
```shell
npm install
```
To run this program there are 2 options
- Please ensure nodemon is installed globally or as a dev-dependency
```shell
npm install nodemon --globally 
```
or
```shell
npm install nodemon --save-dev
```

Option 1
- Only if nodemon is installed
```shell
npm run dev
```

Option 2
- without nodemon
```shell
node index
```







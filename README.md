# AdobeXD template project

A template project for getting started with AdobeXD plugins. 

## Overview

The purpose of this project is to enable anyone to get started quickly with an AdobeXD plugin project. Developers can quickly start working immediately in the src/main.js file and begin automatically seeing changes.

Under the hood this project uses a custom webpack plugin (soon to be published) and a fork of the typings project that is typescript compatible. 


## Getting started

1. **Clone the template project**

    Clone via HTTPS 

    ```https://github.com/tato123/xd-template-project.git```

    Clone via SSH 

    ```git@github.com:tato123/xd-template-project.git```


2. Install all the dependencies
    
    ```npm install```


## Building the project

In most cases when you are building a new plugin you will want to make a code change and see that change reflected in AdobeXD.

Build and automatically watch for changes:

```npm run watch```

After each change, in AdobeXD you will want to 

`Plugins > Development > Reload plugins` 

or more conveniently use the keyboard shortcut for your system to automatically reload. This is required because there is no live reload capability in AdobeXD.


## Publishing a plugin

Usually for a publish you will want to do a one time build

``` npm run build ```












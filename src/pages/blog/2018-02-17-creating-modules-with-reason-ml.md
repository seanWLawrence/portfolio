---
path: "/blog/creating-modules-with-reason-ml"
date: "2018-02-19"
title: "Creating modules with ReasonML"
template: "blog_post"
---

As we briefly discussed in my [previous blog post about pattern matching in ReasonML](/blog/pattern-matching-with-reason-ml), ReasonML is really powerful syntax for JavaScript with a lot of extra functionality to make your code more straightforward. One of the most important concepts to learn in ReasonML are ```modules```, which we'll be discussing today.

### What is a module?
A module in Reason is just like a module in JavaScript, a block or scope of code that you can reuse as needed. Unlike JavaScript modules, ReasonML modules and variables, types and functions within them are all accessible from every file by default. **This means that every variable, function and module can be accessed from anywhere in the app, including other files.**

By default, every file is its own module and you access variables, functions and types from that module with dot notation like you would access a value in a JavaScript object.

```reason
// file named Guitar.re

let brand = "Fender";
```

```reason
// file named index.re

Js.log(Guitar.brand); // "Fender"
```

> Note: this is a very neat and handy feature from ReasonML, though it's worth noting that because every file is imported/exported by default, you can't have two .re (Reason file name extension) files with the same name. A common convention to file prevent naming clashes with similar files is to add an additional identifier to the end of the file name, i.e. ```Guitar.re``` and ```Guitar_Electric.re```. 

### Multiple modules in the same file
Just like in JavaScript, you can create multiple modules from the same file and access them with the JavaScript object dot notation.

> Note: you can nest your modules as much as you need, though it's not neccessary to nest more than one level deep in most cases. 

```reason
// file named Guitar.re

let brand = "Fender"

module Model = {
  let name = "Stratocaster";
};
```

```reason
// file named index.re

Js.log(Guitar.brand); // "Fender"
Js.log(Guitar.Model.name); // "Stratocaster"
```

### Opening modules
You can also "open" another module to access all of the variables, functions and types in another file without having to prefix the module name first, i.e. instead of useing ```Guitar.brand```, you can simply use ```brand``` in that file. 

```reason
// file named Guitar.re

let brand = "Fender"

module Model = {
  let name = "Stratocaster";
};
```

```reason
// file named index.re

open Guitar;

Js.log(brand); // "Fender"
Js.log(Model.name); // "Stratocaster"
```

### Tip on importing/exporting types
One trick that I like to do is create a file called ```Global.re``` to hold all of the reusable types that my application uses, just like you would with a declaration file in [TypeScript](http://www.typescriptlang.org/). Then when using the type in another file, I'll use ```open``` it to keep my code cleaner and more concise. 

```reason
// file named Global.re

type guitarist = 
| JimiHendrix
| StevieRayVaughan
| JimmyPage;
```

```reason
// file named index.re

open Global;

let isPlaying = (guitarist: guitarist) =>
  switch(guitarist) {
    | JimiHendrix => "Jimi Hendrix is playing his guitar!"
    | StevieRayVaughan => "Stevie Ray Vaughan is playing his guitar!"
    | JimmyPage => "Jimmy Page is playing his guitar!"
};

Js.log(JimiHendrix |> isPlaying);

// "Jimi Hendrix is playing his guitar!"
```

### Conclusion 
ReasonML modules are a powerful and modular (get it?) tool that are built-in to make your life easier and help you focus on building applications faster and with less bugs. Mastering these simple concepts will speed up your workflow 10X or more, and it'll be another "reason" that you'll fall in love with the ReasonML syntax. **SL**
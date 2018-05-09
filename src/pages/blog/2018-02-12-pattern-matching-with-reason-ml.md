---
path: "/blog/pattern-matching-with-reason-ml"
date: "2018-02-12"
title: "Pattern matching with ReasonML"
template: "blog_post"
---

[ReasonML](https://reasonml.github.io/) is a hot new JavaScript-like syntax with types, pattern matching, functional programming patterns built-in and much, much more. It's an incredible API from the brilliant minds at Facebook and I highly recommend trying it out if you haven't already. 

### What is pattern matching?
Pattern matching is a neat way to do a switch statement, with a lot more power baked-in. Here's an example:

> The examples assume that you understand the Reason syntax, which you can learn about in their [documentation](https://reasonml.github.io/docs/en/pattern-matching.html).  

```reason
let createNewCar = (~model: string) => Js.log(model);

type car = 
| Honda
| Chevy
| Lamborghini;

let makeCar = (car: car) =>
  switch(car) {
    | Honda => createNewCar(~model="Honda")
    | Chevy => createNewCar(~model="Chevy")
    | Lamborghini => createNewCar(~model="Lamborghini")
  };

```

### Why pattern matching is useful
Besides the cooler syntax, pattern matching is a much stricter way to use a switch statement. So if you were to call the function ```makeCar``` with a value other than ```Honda```, ```Chevy``` or ```Lamborghini``` like we specified, your Reason code would not compile and the consle would give you a detailed error message.
```reason
makeCar(Honda) /* works, outputs "Honda" */

makeCar(Ford) /* doesn't work since 'Ford' was not specified in the type */
```
> Note how there are no ```""``` around the value passed into the function, i.e. ```Honda```.

### Taking it a step further
You can also add a value into the switch statement (and the type for that value) making it even more powerful. 

> Note: ReasonML is very sophisticated and can usually infer types for you, but in some cases (and what I recommend to do), you'll want to pass in the types yourself. You can learn more about types in Reason in the [documentation](https://reasonml.github.io/docs/en/type.html).

```reason
let createNewCar = (~make: string, ~model: string) => Js.log(make ++ " " ++ model);

type make = 
| Honda(string)
| Chevy(string) 
| Lamborghini(string);

let makeCar = (~make: make) => 
  switch(make) {
    | Honda(model) => createNewCar(~make="Honda", ~model)
    | Chevy(model) => createNewCar(~make="Chevy", ~model)
    | Lamborghini(model) => createNewCar(~make="Lamborghini", ~model)
  };

makeCar(~make=Honda("Civic")) /* "Honda Civic" */
```

### Adding ```when``` clauses to the output
If you have specific outputs for different values, you can simply add a ```when``` clause in the ```switch``` statement, which works the same way as a nested ```if``` statement.

```reason
let createNewCar = (~make: string, ~model: string) => Js.log(make ++ " " ++ model);
let createNewSUV = (~make: string, ~model: string) => Js.log(make ++ " " ++ model ++ " SUV");

type make = 
| Honda(string)
| Chevy(string) 
| Lamborghini(string);

let makeCar = (~make: make) => 
  switch(make) {
    | Honda(model) when model === "CR-V" => createNewSUV(~make="Honda", ~model)
    | Honda(model) => createNewCar(~make="Honda", ~model)
    | Chevy(model) => createNewCar(~make="Chevy", ~model)
    | Lamborghini(model) => createNewCar(~make="Lamborghini", ~model)
  };

makeCar(~make=Honda("CR-V")); /* "Honda CR-V SUV" */
makeCar(~make=Honda("Civic")); /* "Honda Civic" */
```

### Conclusion
You can take pattern matching much, much further than these introductory examples, such as nesting patterns inside patterns, adding a default value (which is not recommend unless *necessary*, and matching on ```exceptions```, all of which you can learn more about more on the [ReasonML documentation for pattern matching](https://reasonml.github.io/docs/en/pattern-matching.html). **SL**

---
path: "/blog/labeling-function-arguments-and-parameters-in-reason-ml.md"
date: "2018-04-02"
title: Labeling function arguments/parameters in ReasonML
template: "blog_post"
---
A common source of confusion for many people writing JavaScript applications are function arguments. Unless you use the [object as a parameter pattern](/blog/using-javascript-objects-as-function-parameters), it can get really difficult, really fast to remember how many arguments your function accepts and what order they should be passed in.

### The solution 
A great solution for this in ReasonML applications is their easy syntax for [labeling arguments](https://reasonml.github.io/docs/en/function.html#labeled-arguments). This allows you to pass arguments in any order and be more explicit with your function calling. 

```reason
let puppyName = (~firstName, ~lastName) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax", ~lastName="Max"));

/* "Jax Max" */

```
And now the same example, but with the arguments reversed.

```reason
let puppyName = (~firstName, ~lastName) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~lastName="Max", ~firstName="Jax"));

/* "Jax Max" */

```

### Using aliases
If you have long names for your label arguments, you can use aliases to make them easier to read inside of your function's logic.

> Note: when calling the function, you'll need to to use the full name of the argument. The alias can only be used inside of the function logic.

```reason
let puppyName = (~firstNameOfPuppy as first, ~lastNameOfPuppy as last) => 
  {j|$first $last|j};

Js.log(puppyName(~lastNameOfPuppy="Max", ~firstNameOfPuppy="Jax"));

/* "Jax Max" */

```

### Making labeled arguments optional
By default, ReasonML requires labeled arguments to be passed when calling the function. Adding a simple `=?` to the end of a labeled argument in ReasonML, however, makes it optional. 

>Note: one caveat of optional arguments are that they'll need to positioned before any required ones (as shown below) or you will get an error during compilation.

```reason
let puppyName = (~lastName=?, ~firstName) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax"));

/* "Jax Max" */

```

### Explicitly adding types
Just as you can with non-labeled arguments, you can easily pass a type to a labeled argument in ReasonML with the same `:` syntax.

```reason
let puppyName = (~lastName: string, ~firstName: string) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax"));

/* "Jax Max" */

```

### Adding types to optional arguments
A common pitfall for newcomers to ReasonML is passing in optional arguments with their types like this:

```reason
let puppyName = (~lastName: string=?, ~firstName: string) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax"));

/* Compilation error! 
 This pattern matches values of type
  string
but a pattern was expected which matches values of type
  'a option */
```

To fix this, you'll need to specify that the *type* is optional too, by wrapping the type in an `option()` statement.

```reason
let puppyName = (~lastName: option(string)=?, ~firstName: string) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax"));

/* "Jax Max" */
```

### Setting default values on labeled arguments
Anoher powerful feature labeled arguments provide is the option to set default values for optional values.

>Note: when setting default values on your function parameters, you don;t need to wrap your type with an `option()` statement or the `?`, but you *will* need to add the `()`, a.k.a. the `unit` type as the last parameter to the function when it's *declared* **and** when it's called or you will get a compilation error.

```reason
let puppyName = (~lastName="Max", ~firstName, ()) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax", ()));

/* "Jax Max" */
```

### Setting default values with types
As usual, you can always explicitly add your own types to the function arguments if the Reason compiler has trouble inferring the tyes on its own or if you've created your own types for them, *and* set a defaut value.

```reason
let puppyName = (~lastName: string="Max", ~firstName: string, ()) => 
  {j|$firstName $lastName|j};

Js.log(puppyName(~firstName="Jax", ()));

/* "Jax Max" */
```

### Conclusion
Named function arguments/parameters are one of my favorite features of ReasonML, in addition to [pattern matching](/blog/pattern-matching-with-reason-ml), and I highly recommend using them for functions with multiple arguments. In my opinion, it makes your functions more readable and predictable. Happy coding! **SL**
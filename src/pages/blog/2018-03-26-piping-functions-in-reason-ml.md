---
path: "/blog/piping-functions-with-reason-ml"
date: "2018-03-26"
title: "Piping functions with ReasonML"
template: "blog_post"
---
If you've read through the [ReasonML docs](https://reasonml.github.io/) before, you may have noticed that there's no too much information available on their syntax sugar for piping functions, which is one of my personal favorite features of using ReasonML. 

### The pipe operator
The pipe operator `|>` allows you to chain function calls together in a much simpler syntax than you may be used to using when using higher order functions in JavaScript. Let's see the normal/expected way of doing this.

```reason
let example = doThisLast(doThisSecond(doThisFirst(variableName))) /* hard to read */
```

and here's the same function chain with the `|>` pipe operator:

```reason
let example = variableName |> doThisFirst |> doThisSecond |> doThisLast /* much easier to read */

```

### Piping lists, arrays and more
Just like chaining built-in functions like `.map`, `.filter` and `.reduce` in JavaScript, you can use the `|>` pipe operator in ReasonML on all of their data types to accomplish the same thing. here are a few examples:

**Lists**

```reason 
let mammal = ["cat", "dog", "turtle"]
  |> List.filter(animal => animal !== "turtle")
  |> List.map(animal => "Animal type: " ++ animal);

Js.log(mammal)

/* ["Animal type: cat",["Animal type: dog",0]] */
```

> Note: a `list` in ReasonML works differently than a JavaScript array. You can learn more about the difference between lists and arrays in the [ReasonML docs].(https://reasonml.github.io/docs/en/list-and-array.html)

**Arrays**

```reason 
let mammal = [|"cat", "dog", "turtle"|]
  |> Array.append([|"human", "duck"|])
  |> Array.map(animal => "I'm a " ++ animal);

Js.log(mammal) 
/* ["I'm a human","I'm a duck","I'm a cat","I'm a dog","I'm a turtle"] */

```

**Strings**

```reason 
let man = "Johnathan";

let newManScreaming = String.sub(man, 0, 4) |> String.uppercase;

Js.log(newManScreaming);

/* "JOHN" */

```

### Conclusion
Have fun with the pipe operator `|>` syntax in ReasonML! You can use it on much more than the simple examples above, such as tuples, records, etc. It makes life much, much easier to read when manipulating data with functions and is definitely worth adding to your arsenal of tricks. Happy coding! **SL**
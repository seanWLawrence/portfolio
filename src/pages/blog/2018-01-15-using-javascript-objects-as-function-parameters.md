---
path: "/blog/using-javascript-objects-as-function-parameters"
date: "2018-01-15"
title: "Using JavaScript objects as function parameters"
template: "blog_post"

---

> TL;DR Using an object as a parameter instead of individual values can make it easier to read and call functions, especially when there are a lot of parameters.

### Without using an object as a parameter (simple example)

This is a very simple function and with no reason to use an object for passing in it's parameters.

```javascript
let getMarried = (personOne, personTwo) => 
    console.log(
        `${personOne} and ${personTwo}, I now pronounce you married!`
    )

getMarried('Jackson', 'Maxon')  

// Jackson and Maxon, I now pronounce you married!
```

### Without using an object as a parameter (more complex example)

Here's a more complex example that can get tricky to maintain, especially in a large and/or complex application so you can easily see how quickly more parameters can get out of hand.

```javascript
let sendWeddingInvitations = (personOne, personTwo, date, time, location) => 
    console.log(
        `${personOne} and ${personTwo} are getting married ${date} at ${time} in ${location}!
    )

getMarried('Williamson', 'Juanita', 'tomorrow', '3PM', 'the backyard') 

// Jackson and Maxon are getting married tomorrow at 3PM in the backyard!
```

### Using an object as a parameter

It can get really tricky to remember the order of each parameter and the exact amount of arguments to call this function with, so here's the alternative - use an object as the parameter!

```javascript

let sendWeddingInvitations = ({
    personOne, 
    personTwo, 
    date, 
    time, 
    location
}) => 
    console.log(
        `${personOne} and ${personTwo} are getting married ${date} at ${time} in ${location}!
    )

getMarried({
    personOne: 'William Williamson', 
    personTwo: 'Juanita Juanitas', 
    date: 'tomorrow', 
    time: '3PM', 
    location: 'the backyard'
}) 

// Jackson and Maxon are getting married tomorrow at 3PM in the backyard!
```

Much easier to read right, right? 

#### Passing the parameters out of order
To make things even more flexible, you can even call the function with the arguments in a different order. 

```javascript

let sendWeddingInvitations = ({
    personOne, 
    personTwo, 
    date, 
    time, 
    location
}) => 
    console.log(
        `${personOne} and ${personTwo} are getting married ${date} at ${time} in ${location}!
    )

getMarried({
    date: 'tomorrow', 
    time: '3PM', 
    location: 'the backyard'
    personOne: 'William Williamson', 
    personTwo: 'Juanita Juanitas', 
}) 

// Jackson and Maxon are getting married tomorrow at 3PM in the backyard!
```

#### Omitting parameters
You can even **omit** certain parameters in the object and the function will still call as expected:

```javascript

let sendWeddingInvitations = ({
    personOne, 
    personTwo, 
    date, 
    time, 
    location
}) => 
    console.log(
        `${personOne} and ${personTwo} are getting married ${date} at ${time} ${location}!
    )

getMarried({
    personOne: 'Williamson', 
    personTwo: 'Juanita', 
    date: 'tomorrow', 
    time: '3PM' 
}) 

// Jackson and Maxon are getting married tomorrow at 3PM!
```

### Conclusion

Not every function needs an object as a parameter, and not every function doesn't. The point is, an object is an extremely convenient way to pass values into a function - it's more flexible, easy to read, easy to remember, and an overall better API in my opinion. Think of it as another powerful tool for you to use in your toolbox. **SL**

---
date: "2018-01-15"
title: "Using JavaScript objects as function parameters"
template: "blog_post"
featuredImage: "2018-01-15.jpg"
photoCredit:
  name: Evi Radauscher
  unsplashUrl: https://unsplash.com/@eviradauscher
---

> TL;DR Using an object as a parameter instead of individual values can make it easier to read and call functions, especially when there are a lot of parameters.

### Without using an object as a parameter (simple example)

This is a very simple function and with no reason to use an object for passing in it's parameters.

```javascript
let getMarried = (personOne, personTwo) => 
  `${personOne} and ${personTwo}, I now pronounce you married!`

getMarried('Jim', 'Pam')  

// Jim and Pam, I now pronounce you married!
```

### Without using an object as a parameter (more complex example)

Here's a more complex example that can get tricky to maintain, especially in a large and/or complex application so you can easily see how quickly more parameters can get out of hand.

```javascript
let sendWeddingInvitations = (personOne, personTwo, date, time, location) => 
  `${personOne} and ${personTwo} are getting married ${date} at ${time} ${location}!

getMarried('Jim', 'Pam', 'tomorrow', '3PM', 'in the office') 

// Jim and Pam are getting married tomorrow at 3PM in the office!
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
  `${personOne} and ${personTwo} are getting married ${date} at ${time} ${location}!

getMarried({
  personOne: 'Jim', 
  personTwo: 'Pam', 
  date: 'tomorrow', 
  time: '3PM', 
  location: ' in the office'
}) 

// Jim and Pam are getting married tomorrow at 3PM in the the office!
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
  `${personOne} and ${personTwo} are getting married ${date} at ${time} ${location}!

getMarried({
  date: 'tomorrow', 
  time: '3PM', 
  location: 'in the office'
  personOne: 'Jim', 
  personTwo: 'Pam', 
}) 

// Jim and Pam are getting married tomorrow at 3PM in the offce!
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
  `${personOne} and ${personTwo} are getting married ${date} at ${time} ${location}!

getMarried({
  personOne: 'Jim', 
  personTwo: 'Pam', 
  date: 'tomorrow', 
  time: '3PM' 
}) 

// Jim and Pam are getting married tomorrow at 3PM!
```

### Conclusion

Not every function needs an object as a parameter, but it's an extremely convenient way to pass values into a function since it's much more flexible, easier to read, easier to remember, and is an overall better API in my opinion. Think of it as another powerful tool for you to use in your JavaScript toolbox. **SL**

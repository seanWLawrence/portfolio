---
date: "2018-03-19"
title: "Best practices for naming functions and variables"
template: "blog_post"
featuredImage: "2018-03-19.jpg"
photoCredit: 
  name: Jake Ingle
  unsplashUrl: https://unsplash.com/@ingle_jake
---

Naming things is hard. It's easy to remember what your functions, variables and files do/are without a good name in the moment that it's fresh in your mind, but it gets exponentially more difficult to remember as time passes by. Here are a few tricks that I've picked up that have saved me from hours of headaches.

> Note: the examples in this post are about JavaScript, but most of the concepts will apply to any programming language.

### Keep constants constant and use lets for the rest
JavaScript's new ES6 syntax allows (and encourages) the use of ```let``` and ```const``` instead of ```var```. Without going into details about what each of these do specifically, here's how I like to use them in my projects: 

- ```const``` - for values that will not change, such as ```COLOR_PRIMARY```. I also prefer to use the capitalized SNAKE_CASE to make it extremely obvious at a glance that this value should not be changed.
- ```let``` - everything else, such as variables, anonymous functions, [React stateless functional components](/blog/tips-for-creating-react-stateless-functional-components), etc.
- ```var``` - never. I don't see the need to, unless you want them to be hoisted or are using non-ES6 syntax for some reason.

### Category first, then specify
If I have more than one type of variable in the exact same category, I'll name them with the category first and then follow it with the spcific value. 

This makes it easier for me to take advantage of the Intellisense in my code editor (VS Code) and although it may look confusing at first, I feel like it makes things much neater and more logical, especially when there are a lot of names in the same category, i.e. ```colorPrimary, colorSecondary, colorTertiary, etc...```

```javascript
// constants

const COLOR_PRIMARY = 'blue'
const COLOR_SECONDARY = 'red'

// variables

let nameFirst = 'Sean'
let nameLast = 'Lawrence'

// functions

let robotHasName = () => //

let robotIsNice = () => //
```

### Boolean values start with "is" or "has"
This makes is really obvious at a glance that we're checking if something *is* or *is not*, or *has* or *has not*.

```javascript
let hasName = person => person.name !== true ? sayHello(person.name) : runAway()

let isHuman = person => person.type === 'human' ? sayHello(person.name) : null
```

#### Naming boolean props in React.js
I like to name props with a boolean value in a way that [makes them false by default](/blog/using-prop-types-with-react-js).

```javascript
let defaultProps = {
  isOutOfStock: false,
  hasPromoCode: false
}

// instead of something like

let defaultProps = {
  isInStock: true,
  doesNotHavePromo: true
}

```

This convention is one of my favorites, because it allows you to pass boolean props like this:

```javascript
<Wizard isAMuggleToo /> // isAMuggleToo is true

<Wizard /> // isAMuggleToo is false 

// instead of
<Wizard isAWizard={false} /> // more verbose
```

### Functions named after what they do
The more specific the better, but I try my best to keep them as short as possible. 

```javascript
let sayHello = name => console.log(`Hello ${name}`)

let dialPhone = phoneNumber => console.log(`Dialing ${phoneNumber}`)

let callMother = mother => {

  dialPhone(mother.phoneNumber) 
  
  return sayHello(mother.name)
}
```

### Conditionally rendering React.js components
In this example from my [post about stateless functional components in React](/blog/tips-for-creating-react-stateless-functional-components), we name the component as a function after what it does, rather than simply calling it something like "Title." I prefer this naming convention because it makes it obvious at a glance that there's a chance that this component will not be rendered.

```javascript
let displayTitle = ({text}) => {
  if (text) {
    return (
      <h1>{text}</h1>
    )
  }
}

/* Usage: 
  {
    displayTitle({
      text: 'Harry Potter and the Chamber of Beaches'
    })
  }
*/
```

### The infamous "FIXME" comment
Although I only do this when I absolutely need to, if I'm in a pinch and have to stop what I'm doing abruptly before I've had the chance to type out a descriptive name, I'll add a "FIXME" comment to the end of the function or variable and a comment where and what I need to finish.

This way, when I hop back on I can do a quick search in my text editor for "FIXME" and finish what I started before moving on to something else.

```javascript
let displayText = ({text}) => {
  if (text) {
    // JSX goes here
  }
} // FIXME - missing JSX to render

let hasCar = () => // FIXME - add if statement to check if something exists 

let unclearVariableName = "Hey!" // FIXME - make variable name more descriptive
```

### Add comments where necessary

In theory, code should be readable without any comments (except for extra features like [JSDocs](usejsdoc.org), licenses, etc.), but in reality there's sometimes no other way to get your point across without confusion. 

Just be sure to keep your comments as short and sweet as you can, and then make them shorter. Nobody wants to read a novel about how a function works. A great rule of thumb for most thigns is that if you have to write a comment to explain how it works, then it's probably not written well or can be broken down into smaller functions.

> The huge exception to this is an NPM package where you want to explain every detail for other developers to help improve it.

### Make it easy to read

The easiest code to read (in my opinion) has the following characteristics:

- *Some* type of naming convention for variables and functions. It could be like we discussed above, but what is most important is that it is _consistent across the application_.
- Small functions that focus on one thing. Large, nested and/or complex functions are a huge burden to process mentally. Several smaller functions are almost always much easier to comprehend and are exponentially easier to read when the smaller functions follow a naming convention.

### Use a naming convention with files

Files need to be clear too! Whether you name them with hyphens, camelCase, PascalCase, snake_case, or capitalized SNAKE__CASE, the most important factor is that they're consistent. I use the following naming conventions for my projects:

- PascalCase for React.js, or Reason (and ReasonReact) components, i.e. `ExampleFile.jsx` or `ExampleFile.re`
- camelCase for standard JavaScript files, i.e. `exampleFile.js`
- hyphens for Markdown files, i.e. `example-file.md`
- Capitalized SNAKE_CASE for data files that will not change, such as  a configuration file, i.e. `THEME__COLORS.yaml`
- `.jsx` file extension for React.js components
- snake_case for everything else, such as `.txt`, `.jpeg`, `.pdf`, etc. files, i.e. `profile__image.jpeg`

### Conclusion
Although it can be challenging at times and may seem like a miniscule part of your application, spending the extra time to name your variables, functions and files in a consistent way that you can remember later is almost as important and writing the application itself. If no one can read it and understand what is going on (including *you*, after being away from it for a while), then you better believe it's not going to last a very long time or improve. Happy coding! **SL**
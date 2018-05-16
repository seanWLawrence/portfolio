---
date: "2018-01-29"
title: "Tips for creating React.js stateless functional components"
template: "blog_post"
featuredImage: "2018-01-29.jpg"
photoCredit: 
  name: Kike Algarra
  unsplashUrl: https://unsplash.com/@bykike
---
Unless your component has internal state that it needs to manage, it's better to use a simpler type of component called "stateless functional components." Here are a few tips on using these in your application.

### Components without props
These are useful for breaking up larger components so you don't end up with a single, giant and deeply nested code that can be difficult to read as your app grows.

```javascript
let Title = (
  <h1>Harry Potter and the Chamber of Beaches</h1>
)

// Usage: <Title />
```

### Components with props
If your component is going to be reusable, add a "prop" value(s) to it and pass it into your JSX. 

> Notice how we're passing in the props in an object so we don't have to use ```props.text``` - we can simply use ```text```.

```javascript
let Title = ({text}) => (
  <h1>{text}</h1>
)

// Usage: <Title text='Harry Potter and the Chamber of Beaches' />
```

### Components with conditional rendering
Sometimes you want to check if a prop exists before actually rendering a component, such as one that is not neccessary for the user interface. This can lead to perfomance gains since the component is not rendered if the prop does not exist.

> Notice how we're adding a pair of ```{}``` and are ```return```ing the JSX that we're rendering, since we're adding logic to the function and not just returning JSX.

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

> Note: although it's not *required* to name a component with conditional rendering in this way, I prefer it because it makes it obvious at a glance that there's a chance that this component will not be rendered, rather than simply naming it 'Title' like you would with any other component. 

### Components with conditional rendering and error handling
Here we're adding a simple error message that will be rendered if the ```text``` prop was not passed. 

> Note: You can (and should) also use something like [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html), [Flow](https://flow.org/) or [TypeScript](http://www.typescriptlang.org/) for error messages regarding props. In most cases, using at least PropTypes (a simpler and milder version of Flow and TypeScript) is recommend as it provides documentation of what props are expected and required, and gives specific error messages in the console if the worng "type" of prop was passed, i.e. a boolean was passed instead of a number, etc.

```javascript
let displayTitle = ({text}) => {
  if (text) {
    return (
      <h1>{text}</h1>
    )
  }
  return 'Sorry, no title was given!'
}

/* Usage: 
  {
    displayTitle({
      text: 'Harry Potter and the Chamber of Beaches'
    })
  }
```

### Components that map over props
In order to keep your code **"DRY"** (a popular accornym for "do not repeat yourself") and avoid rewriting the same lines of code and functionality, you can map over your props. 

Here's an example of what **NOT** to do in *most* cases.

```javascript
let Title = ({title}) => (
  <h1>{title}</h1>
)

/* Usage:
<Title text='Harry Potter and the Chamber of Beaches' /> 
<Title text='Harry Potter and the Sorcerer's Phone' />
<Title text='Harry Potter and the Goblet of Tire' />
*/
```

And here we're going to pass in an array and map over it for a much more concise and readable example.

> Notice that we're also adding the "conditional rendering" concept from above for better error handling.


```javascript
let displayTitles = ({titles}) => {
  if (titles) {
    titles.map(title =>
      <h1>{title}</h1>
    )
  }
  return 'Sorry, no titles were given!'
}

let movieTitles = [
  `Harry Potter and the Sorcerer's Phone`,
  'Harry Potter and the Chamber of Beaches',
  'Harry Potter and the Goblet of Tire',
]

/* Usage: 
  {
    displayTitles({
      titles: movieTitles
    }) 
  }
```

### Conclusion 
You don't always need to create a class with React.js and in most cases, you **shouldn't**. Unless you have "state" to manage and absolutely need to, you can use one of the above methods to create your apps easier and faster. **SL**
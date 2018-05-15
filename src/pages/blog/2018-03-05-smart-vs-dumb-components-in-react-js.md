---
path: "/blog/smart-vs-dumb-components-in-react-js"
date: "2018-03-05"
title: "Smart vs. Dumb components in React.js"
template: "blog_post"
---

You've probably heard the term "smart" and "dumb" in React.js before. "Smart" components are written as JavaScript classes and contain things like state and lifecycle hooks (such as ```componentDidMount()```, etc.) and usually contain a variety of other components that it controls via props and state. "Dumb" components are simple functions that accept props and render them. 

While "smart" components are neccessary in any living, breathing application built with React.js, it's best to keep them at a minimum for the following reasons:

- The more complexity that you add to your application, the more chances there are for unexpected bugs and difficulty there may be for other developers to comprehend what is going on.
- Premature optimization is the root of all evil (in the programming realm), and there's no need to make a class unless you need to, which we'll discuss below).
- Why make things more difficult than they need to be? Let's keep the code as short and simple as possible so we can focus on what's most important - creating an application or website that makes people's lives better in some way.

### Dumb components
Dumb components are simple: they accept props and render them. That's it, just a simple function. You can add logic inside of them as needed, such as [checking that props exist before rendering them](/blog/tips-for-creating-react-stateless-functional-components), but other than that they're as easy as it gets.

#### Simple example

```javascript
import React from 'react'

let Title = ({title}) => (
  <h1>{title}</h1>
)

// Usage: <Title title="Harry Potter and the Sorcerer's Phone" />
```

#### With conditional rendering

```javascript
import React from 'react'

let Titles = ({titles}) => {
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

// Usage: <Titles titles={movieTitles} />
```

### Smart components
Smart components can be as simple or complex as you want them to be, but a good convention is to only use them for holding state and/or lifecycle hooks and pass the results to dumb components. Here's the same component, written as a class, without any state or lifecycle hooks.

> Note: if you need a refresher on the syntax and/or functionality of JavaScript classes, check out the doumentation on them at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

```javascript
import React, {Component} from 'react'

export default class Title extends Component {
  render() {
    let {title} = this.props
    return (
      <h1> {title} </h1>
    )
  }
}

// Usage: <Titles title="Harry Potter and the Sorceror's Phone" />
```
While is not much more code and the functionality is the same, it looks more intimidating than the dumb component and is uneccessary for what we're trying to accomplish - render titles.

### Adding state to smart components
When smart components really shine is when they require a bit more functionality than dumb components, like state. Here's a simple form that you can use to collect an email address. Anytime that the input field's value is changed, it updates the state with that value so it can be submitted later (when the submit button is clicked) and displays the input above it.

> Note: since state is just a standard JavaScript object, you can add as many key/value pairs as you need and pass them as props to the dumb components that it renders. Like everything in programming though, try your best to keep your state simple and easy to maintain. As a rule of thumb, if you're not *sure* if you need to hold a key/value in state, then you probably don't. 

```javascript
import React, { Component } from 'react'

export default class ContactForm extends Component {
  state = {
    email: ''
  }

  _handleChange = e => this.setState({ email: e.currentTarget.value })
  
  _handleSubmit = e => {
    // submits the form values via a fetch request
    // details are not shown to stay focused on *how state works*
  }

  render() {
    const {email} = this.state
    return (
      <div>
      <p>Email: {email}</p>
      <form
        method="POST"
        action="/success-page"
        onSubmit={this._handleSubmit}
      >
        <input onChange={this._handleChange} value={email} />
        <button type="submit">
          Sign up
        </button>
      </form>
      </div>
    )
  }
}
```

> Note: the ```_``` before ```handleChange``` and ```handleSubmit``` is not necessary and provides no functionality. It's just a common convention when naming "private" functions [that are only used in the class itself and are not accessible outside of it]. 

### Using lifecycle hooks
Lifecycle hooks are for adding functionality that you want to happen at a certain time, such as when the component is rendered, when it receives new props, when it's destroyed, etc. You can see and learn more about all of the lifecycle hooks in the [official React.js documentation](https://reactjs.org/docs/state-and-lifecycle.html), but we'll demonstrate a simple example of ```componentDidMount()``` below by logging in the console as soon as it is rendered:

```javascript
import React, { Component } from 'react'

export default class Titles extends Component {
  componentDidMount() {
    console.log("Look ma, I'm rendered now!")
  }
  
  render() {
    let { title } = this.props
    return (
      <h1>{ title }</h1>
    )
  }
}
```

### Conclusion 
React.js is a very powerful library for building user interfaces and there's a lot of functionality that you can use. As a rule of thumb though, it's best to keep things as simple as possible by creating your components as "dumb" stateless functional components **unless** they *need* to use lifecycle hooks or state. Happy coding! **SL**

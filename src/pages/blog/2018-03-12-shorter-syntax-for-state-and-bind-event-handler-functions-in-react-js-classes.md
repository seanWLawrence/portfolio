---
path: "/blog/shorter-syntax-for-state-and-bind-event-handler-functions-in-react-js-classes"
date: "2018-03-12"
title: "Shorter syntax for state and bind/event handler functions in React.js classes"
template: "blog_post"

---

If you've ever seen an older React.js component that contains [state](https://reactjs.org/docs/state-and-lifecycle.html) and/or an [event handler function](https://reactjs.org/docs/handling-events.html), i.e. ```handleClick```, ```handleChange```, etc. then you've probably seen the class written something like the example below:

```javascript
import React, { Component } from 'react'

export default class DirtDevil extends Component {
  constructor(props) {
    super(props)
  }

  this.state = {
    vacuumIsOn: false
  }

  this._handleClick = this._handleClick.bind(this)

  _handleClick() {
    this.setState({vacuumIsOn: !this.state.vacuumIsOn})
  }

  render() {
    let {vacuumIsOn} = this.state
    return (
      <button onClick={this._handleClick}>
        Power: {vacuumIsOn ? 'Off' : 'On'}
      </button>
    )
  }
}
```
or maybe with the ```bind``` method like this:

```javascript
import React, { Component } from 'react'

export default class DirtDevil extends Component {
  constructor(props) {
    super(props)
  }

  this.state = {
    vacuumIsOn: false
  }

  _handleClick() {
    this.setState({vacuumIsOn: !this.state.vacuumIsOn})
  }

  render() {
    let {vacuumIsOn} = this.state
    return (
      <button onClick={this._handleClick.bind(this)}>
        Power: {vacuumIsOn ? 'Off' : 'On'}
      </button>
    )
  }
}
```

### A new syntax
While there's nothing wrong with the two approaches above, there's a simpler syntax now for initiating state and binding event handler functions in React.js. All you need is to have the [class properties proposal](https://github.com/tc39/proposal-class-fields) enabled for the experimental ```state``` syntax and the [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/) enabled for the experimental ```bind``` syntax in your build tool configuration.

> Note: [Create React App](https://github.com/facebookincubator/create-react-app) has both of these syntaxes enabled by default. Also note that this syntax is **experimental** and could be changed.

```javascript
import React, { Component } from 'react'

export default class DirtDevil extends Component {
  state = {
    vacuumIsOn: false
  }

  _handleClick = () => {
    this.setState({vacuumIsOn: !this.state.vacuumIsOn})
  }

  render() {
    let {vacuumIsOn} = this.state
    return (
      <button onClick={this._handleClick}>
        Power: {vacuumIsOn ? 'Off' : 'On'}
      </button>
    )
  }
}
```

### Conclusion
The shorter syntax is a much easier and nicer looking way to initiate a React class with state and event handler functions. Enjoy and happy coding! **SL**
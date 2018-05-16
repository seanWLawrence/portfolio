---
date: "2018-02-26"
title: "Using PropTypes with React.js"
template: "blog_post"
featuredImage: "2018-02-26.jpg"
photoCredit: 
  name: Nghia Le
  unsplashUrl: https://unsplash.com/@lephunghia
---

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) are an indispensable tool for declaring the types for your React.js component's props so that when the application is running and an incorrect type is passed, you'll see an error warning in the console. 

PropTypes are highly recommended if you're not already using a static type checker like [TypeScript](http://www.typescriptlang.org/) or [Flow](https://flow.org/en/docs/getting-started/) and also work as a great form of documentation for what props your component needs to render. 

### Installation
First let's install PropTypes:
```javascript
yarn add prop-types
```
or (if you prefer using NPM):
```javascript
npm i prop-types
```
and then import it into your React file that you want to add them to:
```javascript
import PropTypes from 'prop-types'
```

### Types
The following types can be checked with PropTypes:
> Note: we're using the ```|``` operator to indicate that there are more than one example, like a [union type in TypeScript](https://www.typescriptlang.org/docs/handbook/advanced-types.html).

- ```PropTypes.array``` - i.e. ```[] | ['string1', 10]...etc.```
- ```PropTypes.boolean``` - i.e. ```true | false```
- ```PropTypes.func``` - i.e. ```() => | function callMe() {}...etc.```
- ```PropTypes.number``` - i.e. ```0 | 1 | 2...etc.```
- ```PropTypes.object``` - i.e. ```{} | {this: 'that'}...etc.```
- ```PropTypes.string``` - i.e ```"" | "I'm a string"...etc.```
- ```PropTypes.symbol``` - i.e. ```Symbol('unique string')```
- ```PropTypes.node``` - anything that can be rendered, such as numbers, strings, elements or even an array (or fragment)  contains these types - very "generic"
- ```PropTypes.element``` - a react element, i.e. ```<ComponentName />```
- ```PropTypes.oneOf([])``` - limited to specific values, like an [enum in TypeScript](https://www.typescriptlang.org/docs/handbook/enums.html), i.e. ```['this', {that: 'and this'}... etc.]```
- ```PropTypes.instanceOf()``` - instance of a class (like a specific React element), i.e. ```(ComponentName)```
- ```PropTypes.oneOfType([])``` - could be multiple types, i.e. ```[PropTypes.string, PropTypes.number...etc.]```
- ```PropTypes.arrayOf()``` - an array that contains a certain type
- ```PropTypes.objectOf()``` - an object that contains a certain type
- ```PropTypes.shape({})``` - a specific object (highly recommended to use with objects)
- ```PropTypes.any.isRequired``` - the most generic of all, can be any type, but is required to be passed
- ```.isRequired``` - add this to the end of any PropType to throw an error if the prop is **not** passed, i.e. ```PropTypes.string.isRequired```. Without this tag, PropTypes won't throw an error unless the prop is passed *and* is of the wrong type. 
- Custom prop types - learn more about these in the [PropTypes documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)

### Examples of each PropType
Although there are many different examples that can be given, in order to keep this post from turning into a book, we'll show one example of each, along with some tips along the way and a nested example. 

```javascript
let propTypes = {
  possibleWizardNames: PropTypes.array, // generic, not recommended - use arrayOf instead
  isAWizard: PropTypes.bool,
  createSpell: PropTypes.func,
  numberOfPotions: PropTypes.number,
  favoritePotionDetails: PropTypes.object, // generic, not recommended - use .objectOf or better yet, .shape instead
  muggleName: PropTypes.string,
  wizardIDNumber: PropTypes.symbol,
  favoriteSpell: PropTypes.node, // very generic, not recommended - use more specific type instead
  spell: PropTypes.element,
  house: PropTypes.oneOf(['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff']),
  nimbusModel: PropTypes.instanceOf(Broom),
  quidditchRecord: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.instanceOf(QuidditchPoint)
  ]),
  pointsBySeason: PropTypes.arrayOf(PropTypes.number),
  dormDetails: PropTypes.objectOf(PropTypes.string),
  wizardProfile: PropTypes.shape({
    signatureSpellName: PropTypes.string,
    wandType: PropTypes.shape({
      material: PropTypes.string,
      strengthLevel: PropTypes.number
    }),
    signatureQuidditchMove: PropTypes.func
  }),
  favoriteThingABoutHogwarts: PropTypes.any.isRequired // not recommended, unless you have no idea what type the prop will be, but just know that it has to be passed
}
```

### Getting started
Here's a very simple example of PropTypes in action. We first show all of the props that the component will be using - starting with the required props on top - then show the default values for the optional props and lastly, we assign the prop types and default values to the component before we export it.

```javascript
import PropTypes from 'prop-types'

// all props that the component uses and what "type" the value should be
let propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
  styles: PropTypes.objectOf(
    PropTypes.string
  )
}

// default props that the component will use if none are provided
let defaultProps = {
  styles: {}
}

// simple stateless functional component (for a reference)
let MagicWand = ({name, description, color, styles}) => (
  <div style={styles}>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

// assign the propTypes and defaultProps objects to the component to initiate the type checking
MagicWand.propTypes = propTypes
MagicWand.defaultProps = defaultProps

export default MagicWand
```

### Organization
This purely a personal preference, but I prefer to organize my file as shown above for the following reasons:

#### The component's props are obvious and the first thing you read when viewing the file.
This acts as a great form of documentation for you (and more importantly, other developers) to know what this component does and requires everytime you look at this file.

####The default props are also helpful as documentation to know what the component's default values right away.
Seeing the defaults not only reiterates that these props are not required, but also what the values will be if they're not passed into the component when you use it somehwere else.

### Using PropTypes with class components
If you have something like [Babel transform class properties](https://babeljs.io/docs/plugins/transform-class-properties/) set up in your build process, you can use a newer syntax by declaring by propTypes and defaultProps as static class property. This is a much simpler syntax and assigns them to the component more concisely.

```javascript

export default class MagicWand extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
      styles: PropTypes.objectOf(
      PropTypes.string
    )
  }

  static defaultProps = {
    styles: {}
  }

  render() {
    return (
      <div style={styles}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    )
  }
}
```


### Tips
#### Required props (PropTypes with the ```.isRequired``` suffix) should be at the top.
These are the props that **need** to be passed into the component for it to render correctly. Since they are critical for your component to render, they should be the first thing you look at.

#### Only set default props for props that are **not** required.
The ```.isRequired``` suffix is designed to alert you if a prop that is neccesary for the component to render correctly was not passed. If your prop *can* have a default value, then add it to the ```defaultProps``` object and make sure it doesn't have the ```.isRequired``` suffix on it. A common convention for default prop values are the empty of version of it.

```javascript
let propTypes = {
  house: PropTypes.string,
  isAWizard: PropTypes.bool,
  age: PropTypes.number,
  profile: PropTypes.objectOf(PropTypes.string),
  wands: PropTypes.arrayOf(PropTypes.string)
}

let defaultProps = {
  house: "",
  isAWizard: false,
  age: 0,
  profile: {},
  wands: []
}
```

#### Be as specific as possible
Instead of using ```PropTypes.object```, use something more specific like 
```javascript
PropTypes.objectOf(
  PropTypes.string // or whatever type is in the object
)
```

or even better, use ```PropTypes.shape({ ...props })```, since you can specify the exact keys that the object should hold, here's an example of how you can use it in a theoretical Wizard component:
```javascript
// Wizard.jsx

let propTypes = {
  school: Prop.types.string.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    house: PropTypes.oneOfType(['Slytherin', 'Ravenclaw', 'Hufflepuff'])
  }).isRequired
}
```

> Note: in this example, we're saying that the prop object ```profile``` and the name inside of it are required, but the ```age``` and ```house``` are not (since we did not put the ```.isRequired``` suffix on them specifically.

#### Boolean props should be false by default
This way you can simply pass the prop in *if it is needed* and not force yourself to specify that it is false. 

```javascript
<Wizard isAWizard={false} /> // bad

<Wizard /> // good, false by default, no prop is needed

<Wizard isAWizard /> // good, setting value to true is concise and easier to read
```

#### Keep props to a minimum
Chances are, if you don't *need* that prop, you should remove it. It's better to keep things simple and avoid premature optimization like the plague. If you try to have your component do too much, it will be clunky and more prone to bugs. As with everything in programming, simple functions are better. This is actually the core concept of React.js - breaking up functionality into small "components" that handle one thing really well and can be used together to accomplish things better.

#### Always check your console
The errors that PropTypes throws are always shown in your console. If you don't look, you won't see them. 

### Conclusion
This is a simple introduction to PropTypes, but contains all of the tips and tricks that I've learned over the years and wish that I was told when I first started suing React.js. I highly recommend using PropTypes to avoid simple bugs and getting your feet wet with type checking in general, which is a very helpful foundation for a syntax like [ReasonML](https://reasonml.github.io/) that takes type checking to another level.

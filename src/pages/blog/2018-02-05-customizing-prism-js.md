---
path: "/blog/customizing-prism-js"
date: "2018-02-05"
title: "Customizing Prism.js"
template: "blog_post"

---

[Prism.js](http://prismjs.com/) is a syntax highlighter for code blocks on webpages. It's what I (and most other developers) use for sharing code blocks online when it's not embedded from a service like GitHub.

### Using built-in themes

You can choose one of their built-in or extended themes to get started quickly, or you can go a step further and customize it a bit like I did for my site. Let's start with using the built-in themes:

1: First let's install it via the command line
```javascript
npm i prismjs
```

2: Then we'll import it into our index.js file
```javascript
// es6 syntax
import Prism from 'prismjs'

// es5 syntax
var Prism = require('prismjs')
```

```javascript
// your code that you want syntax highlighting on, written as a string
let code = "let testFunction = () => console.log('yo!')" 

// the formatted code with syntax highlighting
let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
```

3: Now we can customize the theme in our app's scss file. These are my settings in SCSS:
```css
$color_primary: #2D9CDB;
$color_secondary: rebeccapurple;
$color_tertiary: palevioletred;

$font_family_code: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;

code {
    font-size: 14px;
    font-weight: 400;
    font-family: $font_family_code;
    line-height: 20px;
    white-space: pre-wrap;
    word-break: break-word;
    color: #555;
  }
  
  pre.language-javascript, 
  pre.language-css {
    margin: 25px auto 50px auto;
    width: 80vw;
    max-width: 750px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  pre.language-css {
  
    .token.operator, 
    .token.entity, 
    .token.url {
      color: $color_primary;
    }

    .token.string, 
    .token.char, 
    .token.attr-value, 
    .token.regex, 
    .token.variable {
      color: $color_primary;
    }

    .token.boolean, 
    .token.number, 
    .token.function {
      color:  lighten($color_secondary, 15%);
    }

    .token.keyword {
      color: $color_primary;
    }

    .token.comment {
      color: #888;
    }

    .token.selector {
      color: $color_primary;
    }
    
    .token.punctuation, 
    .token.property {
      color: $color_secondary;
    }
  }

  pre.language-javascript {
  
    .token.operator, 
    .token.entity, 
    .token.url {
      color: #333;
    }

    .token.string, 
    .token.char, 
    .token.attr-value, 
    .token.regex, 
    .token.variable, 
    .token.property {
      color: $color_primary;
    }

    .token.boolean, 
    .token.number, 
    .token.function {
      color:  lighten($color_secondary, 15%);
    }

    .token.keyword {
      color: darken($color_tertiary, 15%);
    }

    .token.comment {
      color: #888;
    }

    .token.punctuation {
      color: #666;
    }
  }
```

### Using it in your code
For the styles to apply, you simply have to create a block like this:

> Note: here we're using JavaScript, but you can substitute it for another language if you like, such as CSS, HTML, etc. by subsituting the className with the other language, i.e. ```className="language-css"```

```javascript
// JavaScript example
<pre className="language-javascript">
  <code>
    // place your code here as a string for syntax highlighting
  </code>
</pre>
```

### Conclusion
Prism.js is an awesome tool for sharing your code with a much easier to read syntax highlighting like you see when using a text editor like [VS Code](https://code.visualstudio.com/). It's extremely easy to set up, and extra rewarding when you set up your own color scheme and start using it to share your knowledge - have fun! **SL**

---
path: "/blog/creating-a-copyright-date-that-updates-automatically"
date: "2018-04-09"
title: Creating a copyright date that updates automatically
template: "blog_post"
---
Practically every website has a footer with a copyright message at the bottom and a date for the copyright. On many of the websites that I've redesigned, there wasn't a simple function that updated the date for the copyright's year automatically. That means someone familiar with coding in HTML was having to manually edit the code each year and change the date themselves. 

This is extremely tedious and easy to forget - here's a better way.

### Option 1 - insert JavaScript snippet directly in the HTML
This is the simplest method and requires no other frameworks or coding knowledge.

> Note: the `&copy` that we include in the text will display the copyright symbol: &copy.

**1. Insert the text**

```html
<span>Copyright <span id="copyright-date"></span> &copy</span>
```

**2. Insert the JavaScript snippet at the bottom of the `</body>` HTML tag** 

```html
<script>
  var date = new Date();
  var htmlElement = document.getElementById("copyright-date");

  htmlElement.innerHTML = date.getFullYear();
</script>
```

What's happening here is the following:
- we're creating a variable to store the date and a variable to store the HTML element that will contain the date
- then, we're assigning the date variable to display inside of the HTML element so it will be shown on the page and formatting it to only show the year

**Here's a full example for some context on how it will look in your HTML code:**

```html

<body>
  <!-- HTML code for your page or layout template -->

  <footer>
    <span>Copyright <span id="copyright-date"></span> &copy</span>
  </footer>

  <script>
    var date = new Date();
    var htmlElement = document.getElementById("copyright-date");

    htmlElement.innerHTML = date.getFullYear();
  </script>
</body>
```


### Option 2 - insert it with JSX
If you're already using a library that uses JSX, such as [React.js](https://reactjs.org), then you can go about this in a simpler way that's much more readable.

```jsx
let date = new Date();
let thisYear = date.getFullYear();

let displayCopyright = () => (
  <span>
    Copyright {thisYear} &copy
  </span>
)

// Usage:

<footer>
  //... other footer code
  {displayCopyright}
</footer>
```

### Conclusion
This is a handy way to not worry about manualy updating your copyright's date in the footer of your website. Trust me, you'll thank yourself later for taking the extra 1 - 2 minutes that it takes to do this. Happy coding! **SL**
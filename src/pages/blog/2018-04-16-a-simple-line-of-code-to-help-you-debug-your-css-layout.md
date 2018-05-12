---
path: "/blog/a-simple-line-of-code-to-help-you-debug-your-css-layout"
date: "2018-04-16"
title: A simple line of code to help you debug your CSS layout
template: "blog_post"
---
As the name of the title suggests, this will be a very short post, though it's saved me countless hours of trying to see exactly where your HTML is laid out on your page.

### The code
It's as simple as it gets. This line of CSS code says "outline all of the elements on the page with a semi-thick gray border."

>Note: you can change the thickness and color of the outline as needed. `5px` and `#bbb` are just my personal favorite "settings" for debugging, since they're easy on the eyes and less obnoxious than a bright red outline like some other examples that I've seen.

```css
* {
  outline: 5px solid #bbb;
}
```

### Selecting a specific element
The next step in debugging your CSS layout will likely be to outline a specific HTML element to see how it behaves in relation to the rest of the page. For this, I recommend adding a class name to the element(s) and adding the following CSS as well.

>Note: feel free to change the class name to something else, as with the settings. Again, these are just my personal favorites.

```css
.debug {
  background-color: palevioletred!important;
}
```

### An example
Here we're tying both concepts together on a blog post page, taken from my website. We have all of the elements outlined with the light gray border, and a spcific element highlighted with the `.debug` class so we can clearly see it stand out from the rest.

Now we can see the layout of everything, *and* how the element that we're debugging fits into it.

<iframe height='265' scrolling='no' title='BxYbzd' src='//codepen.io/slawr1805/embed/preview/BxYbzd/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/slawr1805/pen/BxYbzd/'>BxYbzd</a> by Sean (<a href='https://codepen.io/slawr1805'>@slawr1805</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<h3 style="margin-top: 30px;">Caveats</h3>

#### It's only helpful for CSS layouts

This will just outline your HTML elements, so if you're having trouble with something other than the layout, this won't help you very much. But in my experience, layout in a responsive website or application is one of the most common pitfalls for developers and accounts for the vast majority of bugs and frustration.

#### You can only use this in development

Although this is pretty obvious, I'm mentioning it to make sure this post doesn't cause anyone to add this to a live site and freak out their visitors. I strongly recommend to only add this CSS code in a development environment that is only seen by the developer(s) working on the site's CSS. 

<div style="background-color: #eee; padding: 20px; margin: 20px 0; border-left: 5px solid #555; color: #444; line-height: 30px; font-weight: 100; font-size: 18px;">Make sure to comment out or remove the <code>*</code> CSS selector and remove the <code>.debug</code> class from your CSS element before deploying your site to production!</div>


### Conclusion
Simply seeing what space your HTML elements take up and how they're laid out on the page is a tremendous tool in finidng and fixing CSS bugs. Cheers to debugging your CSS, and happy coding! **SL**
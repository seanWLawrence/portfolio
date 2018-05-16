---
date: "2018-04-30"
title: Using native system fonts on your websites and applications
template: "blog_post"
featuredImage: "2018-04-30.jpg"
photoCredit: 
  name: Huyen Nguyen
  unsplashUrl: https://unsplash.com/@huyennguyen
---

Here's the native system font stack that I use for all of my projects, unless the client has a preference to something else.

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
 Helvetica, Arial, sans-serif,
 "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

### Why use this font stack?
Loading special fonts takes time to load, and sometimes leads to the dreaded flash when a website loads and the font changes - which is terrible for user experience. 

> I always recommend keeping things simple and not using special fonts "just to use them," but rather, if your brand or personal style *really* needs it. And when doing so, only load the exact font weights that you use.

In addition, this stack is really popular right now for sans-serif user interfaces, and was made famous by [GitHub](https://github.com). It loads instantly and looks great in any OS since it uses the default font for that system. 

Here's a breakdown taken from [an incredible post about GitHub's switch to system fonts](http://markdotto.com/2018/02/07/github-system-fonts/) from [Mark Otto](http://markdotto.com/), Senior Director of Design at GitHub.

- `apple-system` and `BlinkMacSystemFont` render the default fonts in Safari and Chrome on macOS and iOS.
- `Segoe UI` is for all browsers on Windows 7+. 
- `Helvetica Neue` and `Arial` are a fallback.
- `Apple Color Emoji`, `Segoe UI Emoji`, `Segoe UI Symbol` ensure that emoji's are rendered well on macOS and Windows.

### Bonus - styling for code snippets
Check out [my prism.js post for tips and my complete styles for syntax highlighting](/blog/customizing-prism-js), but below is a CSS snippet for my `<code />` styling.

```css
code {
  font-size: 14px;
  font-weight: 400;
  font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  color: #555;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
}
```

### Conclusion
Fonts are important and can really be a time-killer when you're trying to style a website or application. When in doubt, use the font below and call it a day - it's really popular and looks great on any device. And if you really *need* a special font, [Google Fonts](https://fonts.google.com/) is a great place to start. Happy coding! **SL**
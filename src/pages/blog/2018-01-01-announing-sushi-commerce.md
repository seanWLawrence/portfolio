---
path: "/blog/announcing-sushi-commerce"
date: "2018-01-01"
title: "Announcing Sushi Commerce!"
template: "blog_post"

---

> TL;DR - I'm excited to say that I'm currently working on an awesome open source project for creating free ecommerce websites! **Expected release date, June 2018**

#### Background

I designed Sushi Commerce so I could easily create and manage a simple e-commerce site for my clients to pay me with. Since I don't need a feature-rich database, analytics dashboard and about 99% of the other features included with current platforms like Shopify or want to change the minimal footprint of my website (it's a simple, static website using [Gatsby.js](https://www.gatsbyjs.org/)), I decided to use [PayPal Buttons](https://www.paypal.com/buttons) and [Coinbase Commerce](https://commerce.coinbase.com/signin) as a simple embeddable payment link on my site and let them handle the payment processing and data needed for the transaction. 

#### How it works

At its core, this project is a powerful static site generator and CMS platform that you can host for free on servcies like [GitHub](https://github.com/) and [Netlify](https://www.netlify.com/). The CMS allows you to set all of the values of the site, such as the PayPal Button and Coinbase Commerce button links, theme colors, font, home page widgets and their content, and create/edit new pages and blog posts - the majority of things that you need for managing a simple website, but with added e-commerce functionality.

#### The technology

It's built with some of the most popular and modular JavaScript packages right now like [React.js](https://reactjs.org/), [Gatsby.js](https://www.gatsbyjs.org/), [Netlify CMS](https://www.netlifycms.org/) and [Bulma.css](https://bulma.io/) for insanely easy modification to the theme and styling - though the CMS allows you to control the most important things like fonts, colors, button styles and much more without ever needing to touch the code! It also has some amazing features like Search Engine Optimization (SEO), offline functionality via service workers, optimized images and nearly instant page loading baked-in thanks to Gatsby.js!

#### What's next

There's still a lot of work to be done before I suggest anyone to start beta testing it, such as finishing the current refactor, adding tests and most importantly, a crystal-clear documentation website, but it's a very dear project to me that I hope solves a lot of problem for others like me. 

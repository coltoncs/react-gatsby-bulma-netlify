---
templateKey: blog-post
title: How I Created My Portfolio Website
date: 2020-04-15T20:47:25.495Z
description: >-
  What exactly goes into the development and upkeep of a personal portfolio
  site? In this brief post I'll be outlining the creation of this portfolio
  website and my process for developing.
featuredpost: true
featuredimage: /img/coltonsweeney-portfolio-site.png
tags:
  - self post
  - how-to
  - portfolio
  - ''
---
Hello! Today is Wednesday, April 15th, 2020, and I am currently descending into total insanity due to the so-far month-long stay-at-home order for COVID-19. While I'm fortunate enough to still have a job, I've been working from home for the past few weeks and and my office does not seem to be opening back up anytime soon, so I figured now's a better time than any to update my personal portfolio site!

For starters, let's take a look at the stack I used for my website. Running on node.js, my website is mostly powered by React with Bulma being used on the styling front. Why not Bootstrap? Everyone uses Bootstrap, be original. Where my website takes a turn is it's use of a CMS. For deployment and updating my posts, I use Netlify. Netlify is a great hosting platform that allows you to host JAMstack websites with awesome free tiers (the main reason). Using Netlify, I can host my code on a [GitHub repository](https://github.com/pizdetz/react-gatsby-bulma-netlify) and use Netlify to make more specific changes, such as the text on this webpage or any other!

In a more simplified sense, I have my code folder on my computer where I keep HTML files, SASS stylesheets, React code, etc. In that folder, I define the content placeholders where Netlify will later fill in the gaps. I push my local repo to my GitHub repo that's linked to my Netlify account. When my code get's pushed, Netlify get's notified and automatically pulls the recently pushed code and builds it on their servers to host your website. Then, I can log into my website's admin interface and add in the content, such as this blog post!

I'll more than likely update this post in the near future to provide screenshots and more detailed steps, or maybe not. I'm just REALLY bored.

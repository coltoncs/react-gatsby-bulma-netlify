---
templateKey: about-page
title: About this website
---
### Built with React and Gatsby

This website was built entirely using Gatsby, a static site generator for React. It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.

### Hosted on and powered by Netlify

I chose Netlify as hosting for this project for their unique approach and architecture that was perform for my React app. Using GitHub for hosting, I can push changes to development instantly with local commits. Furthermore, Netlify CMS provides an integrated content management experience that's simple, yet powerful. Content for the site is pulled in entirely from local markdown files, providing me with the ability to focus on the user interface as opposed to content when developing. 

### Styled with Bulma

All the SCSS styling for the website is done using the Bulma CSS framework. When nearly every website is built using Bootstrap, it's refreshing to see a different mix of styles. Bulma provides an interesting, yet effective approach for it's framework, allowing you to selectively load different components for your pages in one SASS file. It's ability to easily customize and extend the base styles for components also proved to be a major deciding factor.

## Database Who?

This website interfaces all of it's data directly from GraphQL, the data query language. While not ideal for larger, more dynamic projects, this works just perfectly for my use case. I currently use GraphQL to do things such as programmatically creating pages at build-time! Each of my blog pages (and content like the text you're reading now!) is created using Markdown files located locally. At build-time, Gatsby is configured to grab this static data and load it into GraphQL queries. Using GraphQL in this manner is great for visualizing data flow, as well as managing content at a small scale!

[![Build Status](https://travis-ci.org/underlost/underlost.net.svg?branch=master)](https://travis-ci.org/underlost/underlost.net)
[![Dependencies](https://david-dm.org/underlost/underlost.net.svg)](https://david-dm.org/underlost/underlost.net)
[![Dependency Status](https://gemnasium.com/badges/github.com/underlost/underlost.net.svg)](https://gemnasium.com/github.com/underlost/underlost.net)


# underlost.net

underlost.net is the personal site/portfolio of Tyler Rilling (that's me). It's a tiny Jekyll-based static site designed to work on Heroku, Github, and Amazon S3/CloudFront, but should work on any host you can upload the *_site* directory to.

### Usage

The site can be deployed multiple ways, and on multiple services. Since the site is Jekyll based, a simple `bundle exec jekyll serve --w` (assuming you use bundler) is only needed for local development, living at `localhost:4000/`.

For testing purposes on various devices, a Github pages branch is set up at [lab.underlost.net](http://lab.underlost.net). Grunt is used to deploy there, with `grunt deploy`

However, this setup was primarily designed to work with Heroku in mind. Upon doing a push to a heroku instance `(git push heroku master)`, it will be deployed running Unicorn as the web server. You can probably get away with using the default server to serve the site, but I wanted something that could withstand a little more traffic. The main reason behind using Heroku though, is so I can store the site's S3/cloundFront environmental variables in a safe and secure place, while still having the ability to work on the site from just about anywhere. And since the actual production site of [underlost.net](http://underlost.net) lives behind S3/CloudFront, it uses the S3_website gem for easy uploads:

`heroku run s3_website push`

Alternatively, Heroku can be bypassed completely by editing the s3_website.yml and adding the variables directly (or adding them to your `~/.bashrc`), then pushed to S3/CloudFront with:

`bundle exec s3_website push`.

And there you have it. Is this a little overkill? Probably. But I like having multiple failsafes, and it's easy to change the DNS between Heroku, Github, and Amazon S3 if needed.

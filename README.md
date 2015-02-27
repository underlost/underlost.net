## underlost.net

underlost.net is is the personal site/portfolio of Tyler Rilling. It's a tiny Jekyll-based static site designed to work on Heroku, Github, and Amazon S3.

## Usage

The site can deployed multiple ways, on multiple services. The site is jekyell based, so a simple 'bundle exec jekyll --w' is only needed.

For texting purposes on various devices, a github pages branch is set up at lab.underlost.net. Grunt is used to deploy there, with 'grunt git-deploy'

However, this setup was primarily designed to work with Heroku in mind. Upon doing a 'git push heroku master' it will be deployed to a heroku instance running Unicorn as the web server. The reason behind using Heroku is so I can safely store the site's S3/clound front environmental variables safe and secure, while still having the ability to work on the site from just about anywhere. And since the actual production site of underlost.net lives behind Cloudfront, it uses the S3_website gem for easy uploads:

'heroku run s3_website push'

And there you have it. Is this a little overkill? Probably. But I like having multiple failsafes, and it's easy to change the DNS between Heroku, Github, and Amazon S3. 

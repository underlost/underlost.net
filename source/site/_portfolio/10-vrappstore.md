---
layout: portfolio
title: VR App Store
slug: vrappstore
deck: Vue.JS based web app
color: CF202E
rgba: 207,32,46,.75
image: /assets/img/portfolio/vrappstore.jpg
permalink: /portfolio/vrappstore/
date: 2015-01-01
previous_page: ilfi
next_page: winecountry
---

I've had the opportunity to work on several Virtual Reality based projects now. The most recent being for a global electronics retailer. As a white label contractor for a creative agency, I lead development of a web based app store for the company's latest product, a high quality, low cost, VR headset for mobile devices.

I helped engineer the data structure, and build the Restful API using Django Rest Framework. The front-end was built using SCSS and Vue.JS, with Gulp to compile everything.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.vrappstore %}
<li class="col-xs-2">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

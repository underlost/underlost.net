---
layout: portfolio
title: WineCountry
slug: winecountry
deck: A CakePHP / WordPress multisite
color: 3d9fa7
rgba: 61,159,167,.75
image: /assets/img/portfolio/winecountry.jpg
permalink: /portfolio/winecountry/
date: 2015-01-01
previous_page: vrappstore
next_page: gmachina
---

WineCountry shares it's expertise in various wine country destinations across the US, educating travelers with the best places to visit, as well as partnering with various businesses to bring the best deals for vacations and activities.

I assisted with building 3 custom WordPress themes (1 parent, 2 child themes), each offering unique features, and custom shortcodes, and **visual composer** elements. The site also features a custom CakePHP backend for managing businesses, which I helped expand upon by adding a RESTful API to allow querying and integration with a [Mapbox](https://www.mapbox.com/) powered interface.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.winecountry %}
<li class="col-xs-2">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Visit WineCountry &raquo;](https://winecountry.com)

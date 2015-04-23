---
layout: portfolio
title: Jaded Gamer
slug: jadedgamer
deck: 'Video Game News Aggregator'
color: 57ad68
rgba: 87,173,104,.5
image: /assets/img/work/jaded.jpg
permalink: /portfolio/jadedgamer/
date: 2014-05-01
previous_page: replica
next_page: gamernews
---

Jaded Gamer is a view game news site aggregator, run and managed  completely in the cloud, utilizing various SAAS applications. RSS updates are pushed to the site via the pubsubhubbub protocol. New stories are then indexed immediately, and can be searched through by the elastic-search based server. For additional details, you can learn more on [Medium](https://medium.com/jaded-gamer/building-jaded-gamer-e08c6532b56d).

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.jadedgamer %}
<li class="col-xs-1">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>
[Visit Jaded Gamer &raquo;](http://jadedgamer.com/)

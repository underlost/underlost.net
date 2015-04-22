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

Jaded Gamer is a news site aggregator, run and managed  completely in the cloud, utilizing various SAAS applications. RSS updates are pushed to the site via the pubsubhubbub protocol. New stories are then indexed immediately, and can be searched through by the elastic-search based server.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.jadedgamer %}
<li class="col-xs-2">
<a href="{{image.url}}" class="thumbnail">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Visit Jaded Gamer](http://jadedgamer.com/)

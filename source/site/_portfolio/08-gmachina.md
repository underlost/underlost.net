---
layout: portfolio
title: gMachina
slug: gmachina
deck: An Indie Game
color: 005e6a
rgba: 0,94,106,.5
image: /assets/img/portfolio/gmachina.jpg
permalink: /portfolio/gmachina/
date: 2015-01-01
previous_page: ilfi
next_page: replica
---

gMachina is a small indie game I'm working on. It is a first person, psychological horror adventure game, scheduled to be released on PC, Mac, and Linux at some point. It's currently being developed in Unreal Engine 4 with the **HTC Vive**, and potentially other VR headsets, in mind.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.gmachina %}
<li class="col-xs-2">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Visit gMachina.net &raquo;](https://gmachina.net/)

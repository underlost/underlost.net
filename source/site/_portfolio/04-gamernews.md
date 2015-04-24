---
layout: portfolio
title: Gamer News
slug: gamernews
deck: 'Hacker News/ Reddit clone written in python'
color: 952067
rgba: 149,32,103,.25
image: /assets/img/work/gamernews.jpg
permalink: /portfolio/gamernews/
date: 2014-04-01
previous_page: jadedgamer
next_page: vapor
---

I wanted to learn how social news sites like Reddit and Hacker News worked, so I wrote my own. Ranking is calculated by a fairly simple algorithm: **Score = (P-1) / (T+2)^G**, with P = total points of an item (and -1 is to negate submitters vote), T = time since submission (in hours), and G = Gravity. G (Gravity) is used to speed up, or slow down, how fast submissions can rise to the top.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.gamernews %}
<li class="col-xs-1">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Github Project &raquo;](https://github.com/underlost/gamernews)
[Visit Gamer News demo &raquo;](http://news.underlost.net/)

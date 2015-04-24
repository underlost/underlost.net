---
layout: portfolio
title: Replica (CMS)
slug: replica
deck: Django/Python Content Management System
color: 919799
rgba: 145,154,153,.25
image: /assets/img/work/replica.jpg
permalink: /portfolio/replica/
date: 2014-06-01
previous_page: gmachina
next_page: undertasker
---

Replica is a content management system written in Python/django. It was originally developed for clients that found existing systems too complicated. It features a simple Markdown editor and a live preview mode. I've continued to develop it into a stand alone django application, and even adopted it for my personal blog at [A Life Well Played](http://alifewellplayed.com/).

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.replica %}
<li class="col-xs-1">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Learn more on Github &raquo;](https://github.com/underlost/Replica)

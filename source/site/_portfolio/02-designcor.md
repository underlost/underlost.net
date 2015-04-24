---
layout: portfolio
title: Designcor
slug: designcor
deck: 'Design and code for graphic and print company.'
color: 7cad00
rgba: 124,173,0,.5
image: /assets/img/work/designcor.jpg
permalink: /portfolio/designcor/
date: 2014-02-01
previous_page: vapor
next_page: mbarrington
---

The original Designcor website had been using the same design and code for nearly a decade. It didn't just need a fresh coat of paint, it required a complete overhaul.

Together we came up with a new vision for the website, where I wrote a custom WordPress theme using Twitter Bootstrap and JQuery.Designcor has since became part of another agency, however the wordpress theme is now available on Github.

<ul class="list-inline clearfix">
{% for image in site.data.screenshots.designcor %}
<li class="col-xs-1">
<a href="{{image.url}}" class="thumbnail lightbox">
  <img class="img-rounded" src="{{image.thumb}}" alt="{{ image.caption }}">
</a>
</li>
{% endfor %}
</ul>

[Github Project &raquo;](https://github.com/underlost/designcor)

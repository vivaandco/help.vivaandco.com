---
layout: default
title: Documentation and Resources
root: ./
---

## Welcome Friend.

### You are in a safe place.

This site is intended to provide resources for you to use when working with Viva & Co. as well as with the sites we produce.  If you find anything confusing please feel free to [reach out to us](http://www.vivaandco.com/information/connect/) anytime.

## List of all pages
{% for testvar in site.pages  %}
 <a href=".{{testvar.url}}">{{testvar.title}}</a>
{% endfor %}

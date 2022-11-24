---
layout: base.njk
title: Projects
---

<div class="projects-header">
    <h1 class="projects-title">Projects</h1>
</div>

<ul class="projects-grid">
{%- for post in collections.post -%}
  <li><a href="{{ post.url }}"><img src="{{post.data.featured-img}}"></a></li>
{%- endfor -%}
</ul>
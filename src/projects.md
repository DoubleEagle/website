---
layout: base.njk
title: Projects
---

<div class="projects-header">
    <h1 class="projects-title">Projects</h1>
</div>

<ul class="projects-grid">
{%- for post in collections.post -%}
    <a href="{{ post.url }}">
        <li class="project-polaroid">
            <img class="thumbnail" src="{{post.data.featured-img}}">
            <div class="project-name">
                {{ post.data.title }}
            </div>
        </li>
    </a>
{%- endfor -%}
</ul>
---
title: Notes
permalink: /notes/
---

# Notes

Short technical notes, design observations and references.

{% if site.posts.size > 0 %}
<ul class="note-list">
  {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%d/%m/%Y" }}
      </time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% else %}
No notes published yet.
{% endif %}

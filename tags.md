---
layout: page
title: Tags
---
<p>
    {% for tag in site.tags %}
    <!-- Here's a hack to generate a "tag cloud" where the size of
    the word is directly proportional to the number of posts with
    that tag. -->
    <a href="/tags/{{ tag[0] }}/">
       {{ tag[0]}}
    </a>
    {% endfor %}
</p>

<h1 class="page-title"> Categories </h1>
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li style="list-style-type: none;">{{ post.date | date: "%B %-d, %Y" }}<h3 class="archive" ><a href="{{ post.url }}">{{ post.title }}</a></h3></li>
    {% endfor %}
  </ul>
{% endfor %}
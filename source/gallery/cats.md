---
title: "猫咪相册"
date: 2023-12-04 14:07:27
---

{% gallery %}
<div class="gallery-group-main">
  <!-- 输出 cat(1).jpg 到 cat(100).jpg -->
  {% for i in range(1, 101) %}
    ![](https://ldyer.top/img/cats/cat({{ i }}).jpg)
  {% endfor %}
</div>
{% endgallery %}

---
layout: cake-video
comments: true
sign-up: false

title:  "How to make Thomas The Tank Engine cake"
date:   2019-01-24 13:33:41 +1100
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Watch how to make a cute Thomas train cake. Perfect birthday cake for a little boy."
excerpt_separator: <!--more-->

download-id: thomas-template-free
download-link: https://gumroad.com/l/hMdhq/free
download-title: DOWNLOAD THE TEMPLATE
download-desc-1: To Make Thomas The tank Engine Cake
download-desc-2: IT'S FREE!
download-btn-text: YES, I WANT THIS!
download-icon: "/assets/img/thomas/download-template.png"

images: 
  - url: /assets/img/thomas/thumb.jpg
    alt: How to make a Thomas the tank engine cake 
    title: How to make a Thomas the tank engine cake 
    pin: /assets/img/thomas/thomas-full-pin.png
    pin-desc: Watch how to make this cute Thomas train cake. Perfect birthday cake for a little boy.
    pin-id: 479914904042157110


image: /assets/img/thomas/thumb.jpg

youtube:
    url: https://youtu.be/Frt5p5SlV0k
    embed: https://www.youtube.com/embed/Frt5p5SlV0k

reviews:
  - title: Rozanna from @sweetestcakelove
    title-link: https://www.instagram.com/sweetestcakelove/
    text-img: /assets/img/thomas/reviews/Rozanna-text.png
    pictures:
      - img-url: /assets/img/thomas/reviews/Rozanna.jpg

  - title: Andrea
    text-img: /assets/img/thomas/reviews/Andrea-text.png
    pictures:
      - img-url: /assets/img/thomas/reviews/Andrea.png

  - title:
    pictures:
      - img-url: /assets/img/thomas/reviews/corkspride2.jpg
      - img-url: /assets/img/thomas/reviews/corkspride3.jpg

  - title: Siemin
    text-img: /assets/img/thomas/reviews/Siemin-text.png
    pictures:
      - img-url: /assets/img/thomas/reviews/Siemin.jpg

---


<div class="reviews-container">
  {% for review in page.reviews %}
    {% include reviews.html review = review %}
  {% endfor %}
</div>


{% include download.html %}


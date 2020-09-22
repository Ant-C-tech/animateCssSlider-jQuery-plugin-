# Animate.css Slider (jQuery-plugin)
Dmitry Lavrik course.

> Create a beautiful responsive carousel slider.
> Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.
> No matter if you are a beginner or an advanced user, starting with "Animate.css Slider" is easy - just-add-water CSS animations.
> Almost all options are responsive and include very intuitive breakpoints settings.


For more information see page: https://ant-c-tech.github.io/animateCssSlider-jQuery-plugin-/

Installation
-----------------------------------

### Include CSS.
First, include Animate.CSS it directly to your HTML head using a CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css>
```

Then include Bootstrap 4 CSS files to your HTML head using a CDN:
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```

Also you have to take into consideration that slider after its initialization automaticly add some styles to you project:
```css
body {
    overflow-x: hidden;
}

#"your container id"{
    position: relative;
    transition: all linear 0.3s;
    overflow: hidden; (optional)
}
```

### Include JS.

Yep, include jQuery 3.5.1, animateCssSlider and your own app files after your css-link to your HTML head.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="js/animateCssSlider.jquery.js"></script>
<script defer src="js/app.js"></script>
```

### Include HTML.

Create div-container with random id for every slider you need at any place of HTML you need.
For example:
```html
<div id="galery" class="container"></div>
```

### Slides collection.

Prepare some collections of slides for every slider you need. It might be an array with slides. For example, slides will be simple "img":
```js
[
"<img src='https://placem.at/things?w=350&h=190&random=70&txt=0' alt='#'></img>",
"<img src='https://placem.at/things?w=350&h=190&random=71&txt=0' alt='#'></img>",
"<img src='https://placem.at/things?w=350&h=190&random=72&txt=0' alt='#'></img>",
"<img src='https://placem.at/things?w=350&h=190&random=73&txt=0' alt='#'></img>",
"<img src='https://placem.at/things?w=350&h=190&random=74&txt=0' alt='#'></img>",
]
```
Or you can include your slides right to your container. Every first child of the container will be your slide. For example, use as slides some "div" with text:
```html
<div id="galery" class="container">
    <div>Some text</div>
    <div>Some text</div>
    <div>Some text</div>
    <div>Some text</div>
    <div>Some text</div>
</div>
```

For debugging slider contains default collection:
```js
[
"<img src='img/default/img1.jpg' alt='#'></img>",
"<img src='img/default/img2.jpg' alt='#'></img>",
"<img src='img/default/img3.jpg' alt='#'></img>",
"<img src='img/default/img4.jpg' alt='#'></img>",
"<img src='img/default/img5.jpg' alt='#'></img>",
]
```

### Call the plugin.

Now call in your app.js file the initializer function for your every slider with the same or different settings and all your sliders are ready. For example, we used a container with id="galery". Slider with default settings:
```js
$('#galery').animateCssSlider()
```

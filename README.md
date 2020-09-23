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
<script defer src="js/animateCssSlider.jquery.min.js"></script>
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

Slider settings
-----------------------------------

By default slider has next settings:
```js
{
    contentSrc: 'array',
    auto: true,
    autoplayInterval: 3500,
    animationType: 'fadeOut/fadeIn',
    animationTime: '',
    hoverAnimation: false,
    hoverAnimationType: 'pulse',
    constSliderHeight: false,
    overflowHidden: true,
    control: true,
}
```

You can change slider settings by next way:

1. **contentSrc** - specify content to generate slides - type: string:
    * "array" (default) - in case the collection of slides is some array;
    * "html" - in case the collection of slides is html content of your container.

2. **auto** - start slideshow when slider is within the user's screen (stop slideshow on hover) - type: boolean:
    * true (default);
    * false.

3. **autoplayInterval** - autoplay interval timeout - type: number (ms).
Autoplay interval have to be longer than two "animationTime".

4. **animationType** - animation by Animate.css library - type: string:
    * "fadeOut/fadeIn" (default);
    * "fadeOutInDown/fadeOutInUp";
    * "fadeOutInDownBig/fadeOutInUpBig";
    * "fadeOutInLeft/fadeOutInRight";
    * "fadeOutInLeftBig/fadeOutInRightBig";
    * "fadeOutInLeftTop/fadeOutInRightBottom";
    * "fadeOutInLeftBottom/fadeOutInRightTop";
    * "backOutInDown/backOutInUp";
    * "backOutInLeft/backOutInRight";
    * "bounceOut/bounceIn"
    * "bounceOutInDown/bounceOutInUp";
    * "bounceOutInLeft/bounceOutInRight";
    * "flipOutY/flipInY";
    * "flipOutX/flipInX";
    * "lightSpeedOutInLeft/lightSpeedOutInRight";
    * "rotateOutInDownLeft/rotateOutInUpLeft";
    * "rotateOutInDownRight/rotateOutInUpRight";
    * "hingeOut/fadeIn";
    * "bounceOut/jackInTheBox";
    * "rollOut/rollIn";
    * "zoomOut/zoomIn";
    * "zoomOutInDown/zoomOutInUp";
    * "zoomOutInLeft/zoomOutInRight";
    * "slideOutInDown/slideOutInUp";
    * "slideOutInLeft/slideOutInRight".

5. **animationTime** - you can control the speed of the animation - type: string:
    * "animate__slower" - 3s;
    * "animate__slow" - 2s;
    * "" - 1s (default);
    * "animate__fast" - 800ms;
    * "animate__faster" - 500ms.

6. **hoverAnimation** - animation effect on slide hover - type: boolean:
    * true;
    * false (default).
    * hoverAnimationType - hover animation by Animate.css library - type: string:
    * "pulse" (default);
    * "bounce";
    * "rubberBand";
    * "shakeX";
    * "shakeY";
    * "headShake";
    * "swing";
    * "tada;
    * "wobble";
    * "jello";
    * "heartBeat".

7. **constSliderHeight** - if "true" than the slider height is constant and approximately equal to the height of the largest slide - type: boolean:
    * true;
    * false (default).

8. **overflowHidden** - container css property "overflow: hidden" - specifies what happens if content overflows an element's box - type: boolean:
    * true (default);
    * false.

9. **control** - add some control elements (buttons "prev", "next") - type: boolean.
If "control: false" you can switch slide with click on it.
    * true (default);
    * false.
    
For examples see page: https://ant-c-tech.github.io/animateCssSlider-jQuery-plugin-/

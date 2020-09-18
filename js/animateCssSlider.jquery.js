(function ($) {

    $.fn.animateCssSlider = function (settings, content) {

        //========  Default  ========
        const defaultsSettings = {
            auto: true,
            autoplayInterval: 3500,
            animationType: 'fadeOut/fadeIn',
            animationTime: '',
            constSliderHeight: false,
            overflowHidden: true
        }

        // animationType:
        // fadeOut/fadeIn
        // fadeOutInDown/fadeOutInUp
        // fadeOutInDownBig/fadeOutInUpBig
        // fadeOutInLeft/fadeOutInRight
        // fadeOutInLeftBig/fadeOutInRightBig
        // fadeOutInLeftTop/fadeOutInRightBottom
        // fadeOutInLeftBottom/fadeOutInRightTop
        // backOutInDown/backOutInUp
        // backOutInLeft/backOutInRight
        // bounceOut/bounceIn
        // bounceOutInDown/bounceOutInUp
        // bounceOutInLeft/bounceOutInRight
        // flipOutX/flipInX
        // flipOutY/flipInY
        // lightSpeedOutInLeft/lightSpeedOutInRight
        // rotateOut/rotateIn

        // animationTime:
        // animate__slow	2s
        // animate__slower	3s
        // animate__fast	800ms
        // animate__faster	500ms

        const defaultContent = [
            ['img/img1.jpg', '#'],
            ['img/img2.jpg', '#'],
            ['img/img3.jpg', '#'],
            ['img/img4.jpg', '#'],
            ['img/img5.jpg', '#'],
        ]

        const options = $.extend(defaultsSettings, settings)
        const $collection = $.extend(defaultContent, content)


        //========  Variables:  ========
        const $container = $(this)

        let $images
        let $btnGroup
        let $btnPrev
        let $btnNext

        const originalName = $(this).attr("id")
        const slideName = originalName + '-slide'
        const btnPrevName = originalName + '-btnPrev'
        const btnNextName = originalName + '-btnNext'
        const btnGroupName = originalName + '-btnGroup'

        //Service variables
        let counter = 0
        let slideshowInterval
        let startSlidShowInterval
        let slideShowFlag = null

        //Disable button during animation
        let isRun = false


        //========  Create slider  ===========
        createContent()

        //Get links
        $wrappers = $(`.wrapper-${slideName}`)
        $images = $(`.${slideName}`)
        $btnGroup = $(`.${btnGroupName}`)
        $btnPrev = $(`.${btnPrevName}`)
        $btnNext = $(`.${btnNextName}`)

        addStyles()

        $images.on('load', () => {
            if (options.constSliderHeight === false) {
                resizeContainer()
            } else {
                $container.css('height', `${getMaxSlideHeight() + $btnGroup.outerHeight() * 2}px`)
            }
        })

        $(window).scroll(function () {
            var wt = $(window).scrollTop();
            var wh = $(window).height();
            var et = $container.offset().top;
            var eh = $container.outerHeight();

            if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
                if (slideShowFlag == null || slideShowFlag == false) {
                    let timer = setTimeout(() => {
                        next()
                        clearTimeout(timer)
                    }, 1000)
                    startSlideShow()
                }
                slideShowFlag = true;
            } else {
                if (slideShowFlag == null || slideShowFlag == true) {
                    clearInterval(slideshowInterval)
                    clearInterval(startSlidShowInterval)
                }
                slideShowFlag = false;
            }
        });


        $btnNext.on('click', () => {
            clearInterval(slideshowInterval)
            clearInterval(startSlidShowInterval)

            startSlidShowInterval = setTimeout(() => {
                startSlideShow()
            }, 5000)

            if (isRun) {
                return false
            }

            next()
            isRun = true
        })

        $btnPrev.on('click', () => {
            clearInterval(slideshowInterval)
            clearInterval(startSlidShowInterval)

            startSlidShowInterval = setTimeout(() => {
                startSlideShow()
            }, 5000)

            if (isRun) {
                return false
            }

            prev()
            isRun = true
        })

        $(window).resize(() => {
            if (options.constSliderHeight === false) {
                $container.eq(counter).on('transitionend', function () {
                    resizeContainer()
                })
            } else {
                $container.css('height', `${getMaxSlideHeight() + $btnGroup.outerHeight() * 2}px`)
            }
        })


        //========  Functions  ===========

        function createContent() {
            let content = ''

            for (let i = 0; i < $collection.length; i++) {
                content += `<div class="wrapper-${slideName}">
                <img class="img-fluid ${slideName} rounded" src="${$collection[i][0]}" alt="${$collection[i][1]}">
                </div>`
            }

            content += `<div class="btn-group ${btnGroupName} text-center d-block" role="group" aria-label="Button group">
                            <button class="btn btn-secondary ${btnPrevName}" type="button">Prev</button>
                            <button class="btn btn-secondary ${btnNextName}" type="button">Next</button>
                        </div>`


            $container.html(content)
        }

        function addStyles() {
            $('body').css('overflow-x', 'hidden')
            $container.css('position', 'relative').css('transition', 'all linear 0.3s')
            if (options.overflowHidden === true) {
                $container.css('overflow', 'hidden')
            }
            $wrappers.css('position', 'relative')
            $images.css('display', 'block').css('position', 'absolute').css('opacity', '0').css('top', '0')
            $images.eq(counter).css('position', 'static').css('opacity', '1').css('margin', '0 auto')
            $btnGroup.css('position', 'absolute').css('bottom', '15px').css('left', '50%')
                .css('transform', 'translateX(-50%)').css('transition', 'all linear 0.5s')
        }

        function resizeContainer() {
            $container.css('height', getContainerHeight() + 'px')
        }

        function getContainerHeight() {
            return $images.eq(counter).parent().outerHeight()
        }

        function startSlideShow() {
            if (options.auto) {
                slideshowInterval = setInterval(() => next(), options.autoplayInterval)
            }
        }

        function next() {
            getNextAnimationFunction()
        }

        function prev() {
            getPrevAnimationFunction()
        }

        function counterInc() {
            counter++
            if (counter >= $images.length) {
                counter = 0
            }
        }

        function counterDec() {
            counter--
            if (counter < 0) {
                counter = $images.length - 1
            }
        }

        function getNextAnimationFunction() {
            switch (true) {
                case (options.animationType === 'fadeOut/fadeIn'):
                    return sliderAnimation('animate__fadeOut', counterInc, 'animate__fadeIn')
                case (options.animationType === 'fadeOutInDown/fadeOutInUp'):
                    return sliderAnimation('animate__fadeOutDown', counterInc, 'animate__fadeInDown')
                case (options.animationType === 'fadeOutInDownBig/fadeOutInUpBig'):
                    return sliderAnimation('animate__fadeOutDownBig', counterInc, 'animate__fadeInDownBig')
                case (options.animationType === 'fadeOutInLeft/fadeOutInRight'):
                    return sliderAnimation('animate__fadeOutLeft', counterInc, 'animate__fadeInRight')
                case (options.animationType === 'fadeOutInLeftBig/fadeOutInRightBig'):
                    return sliderAnimation('animate__fadeOutLeftBig', counterInc, 'animate__fadeInRightBig')
                case (options.animationType === 'fadeOutInLeftTop/fadeOutInRightBottom'):
                    return sliderAnimation('animate__fadeOutTopLeft', counterInc, 'animate__fadeInBottomRight')
                case (options.animationType === 'fadeOutInLeftBottom/fadeOutInRightTop'):
                    return sliderAnimation('animate__fadeOutBottomLeft', counterInc, 'animate__fadeInTopRight')
                case (options.animationType === 'backOutInDown/backOutInUp'):
                    return sliderAnimation('animate__backOutDown', counterInc, 'animate__backInDown')
                case (options.animationType === 'backOutInLeft/backOutInRight'):
                    return sliderAnimation('animate__backOutLeft', counterInc, 'animate__backInRight')
                case (options.animationType === 'bounceOut/bounceIn'):
                    return sliderAnimation('animate__bounceOut', counterInc, 'animate__bounceIn')
                case (options.animationType === 'bounceOutInDown/bounceOutInUp'):
                    return sliderAnimation('animate__bounceOutDown', counterInc, 'animate__bounceInDown')
                case (options.animationType === 'bounceOutInLeft/bounceOutInRight'):
                    return sliderAnimation('animate__bounceOutLeft', counterInc, 'animate__bounceInRight')
                case (options.animationType === 'flipOutX/flipInX'):
                    return sliderAnimation('animate__flipOutX', counterInc, 'animate__flipInX')
                case (options.animationType === 'flipOutY/flipInY'):
                    return sliderAnimation('animate__flipOutY', counterInc, 'animate__flipInY')
                case (options.animationType === 'lightSpeedOutInLeft/lightSpeedOutInRight'):
                    return sliderAnimation('animate__lightSpeedOutLeft', counterInc, 'animate__lightSpeedInRight')
                case (options.animationType === 'rotateOut/rotateIn'):
                    return sliderAnimation('animate__rotateOut', counterInc, 'animate__rotateIn')

            }
        }

        function getPrevAnimationFunction() {
            switch (true) {
                case (options.animationType === 'fadeOut/fadeIn'):
                    return sliderAnimation('animate__fadeOut', counterDec, 'animate__fadeIn')
                case (options.animationType === 'fadeOutInDown/fadeOutInUp'):
                    return sliderAnimation('animate__fadeOutUp', counterDec, 'animate__fadeInUp')
                case (options.animationType === 'fadeOutInDownBig/fadeOutInUpBig'):
                    return sliderAnimation('animate__fadeOutUpBig', counterDec, 'animate__fadeInUpBig')
                case (options.animationType === 'fadeOutInLeft/fadeOutInRight'):
                    return sliderAnimation('animate__fadeOutRight', counterDec, 'animate__fadeInLeft')
                case (options.animationType === 'fadeOutInLeftBig/fadeOutInRightBig'):
                    return sliderAnimation('animate__fadeOutRightBig', counterDec, 'animate__fadeInLeftBig')
                case (options.animationType === 'fadeOutInLeftTop/fadeOutInRightBottom'):
                    return sliderAnimation('animate__fadeOutBottomRight', counterDec, 'animate__fadeInTopLeft')
                case (options.animationType === 'fadeOutInLeftBottom/fadeOutInRightTop'):
                    return sliderAnimation('animate__fadeOutTopRight', counterDec, 'animate__fadeInBottomLeft')
                case (options.animationType === 'backOutInDown/backOutInUp'):
                    return sliderAnimation('animate__backOutUp', counterDec, 'animate__backInUp')
                case (options.animationType === 'backOutInLeft/backOutInRight'):
                    return sliderAnimation('animate__backOutRight', counterDec, 'animate__backInLeft')
                case (options.animationType === 'bounceOut/bounceIn'):
                    return sliderAnimation('animate__bounceOut', counterDec, 'animate__bounceIn')
                case (options.animationType === 'bounceOutInDown/bounceOutInUp'):
                    return sliderAnimation('animate__bounceOutUp', counterDec, 'animate__bounceInUp')
                case (options.animationType === 'bounceOutInLeft/bounceOutInRight'):
                    return sliderAnimation('animate__bounceOutRight', counterDec, 'animate__bounceInLeft')
                case (options.animationType === 'flipOutX/flipInX'):
                    return sliderAnimation('animate__flipOutX', counterDec, 'animate__flipInX')
                case (options.animationType === 'flipOutY/flipInY'):
                    return sliderAnimation('animate__flipOutY', counterDec, 'animate__flipInY')
                case (options.animationType === 'lightSpeedOutInLeft/lightSpeedOutInRight'):
                    return sliderAnimation('animate__lightSpeedOutRight', counterDec, 'animate__lightSpeedInLeft')
                case (options.animationType === 'rotateOut/rotateIn'):
                    return sliderAnimation('animate__rotateOut', counterDec, 'animate__rotateIn')
            }
        }

        function hideCurrentSlide() {
            $images.eq(counter).css('position', 'absolute').css('opacity', '0').css('top', '0').css('left', '0')
        }

        function showCurrentSlide() {
            $images.eq(counter).css('position', 'static').css('opacity', '1').css('margin', '0 auto')
        }

        function getMaxSlideHeight() {
            let maxSlideHeight = 0

            for (let i = 0; i < $images.length; i++) {
                if ($images.eq(i).outerHeight() > maxSlideHeight) {
                    maxSlideHeight = $images.eq(i).outerHeight()
                }
            }

            return maxSlideHeight
        }


        //========  Function of animation  ===========

        function sliderAnimation(animationCurrentClass, counterFunc, animationNextClass) {
            $images.eq(counter).addClass(`animate__animated ${animationCurrentClass} ${options.animationTime}`)

            $images.eq(counter).one('animationend', function () {
                $images.eq(counter).removeClass(`animate__animated ${animationCurrentClass} ${options.animationTime}`)
                hideCurrentSlide()
                counterFunc()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $images.eq(counter).addClass(`animate__animated ${animationNextClass} ${options.animationTime}`)
                $images.eq(counter).one('animationend', function () {
                    $images.eq(counter).removeClass(`animate__animated ${animationNextClass} ${options.animationTime}`)
                    isRun = false
                })
            })
        }


        return this
    }

})(jQuery)
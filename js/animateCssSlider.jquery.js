(function ($) {

    $.fn.animateCssSlider = function (settings, content) {

        //========  Default  ========
        const defaultsSettings = {
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

        // ====  contentSrc:  ====
        // array
        // html

        // ====  animationType:  ====
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
        // rotateOutInDownLeft/rotateOutInUpLeft
        // rotateOutInDownRight/rotateOutInUpRight
        // hingeOut/fadeIn
        // bounceOut/jackInTheBox
        // rollOut/rollIn
        // zoomOut/zoomIn
        // zoomOutInDown/zoomOutInUp
        // zoomOutInLeft/zoomOutInRight
        // slideOutInDown/slideOutInUp
        // slideOutInLeft/slideOutInRight

        // ====  animationTime:  ====
        // animate__slow	2s
        // animate__slower	3s
        // animate__fast	800ms
        // animate__faster	500ms

        // ====  hoverAnimationType: ====
        // pulse
        // bounce
        // rubberBand
        // shakeX
        // shakeY
        // headShake
        // swing
        // tada
        // wobble
        // jello
        // heartBeat

        const defaultContent = [
            "<img src='img/default/img1.jpg' alt='#'></img>",
            "<img src='img/default/img2.jpg' alt='#'></img>",
            "<img src='img/default/img3.jpg' alt='#'></img>",
            "<img src='img/default/img4.jpg' alt='#'></img>",
            "<img src='img/default/img5.jpg' alt='#'></img>",
        ]

        const $container = $(this)

        const options = $.extend(defaultsSettings, settings)
        let $collection = $.extend(defaultContent, content)


        //========  Variables:  ========

        let $slides
        let $btnGroup
        let $btnPrev
        let $btnNext

        const originalName = $(this).attr("id")
        const slideName = originalName + '-slide'
        const btnPrevName = originalName + '-btnPrev'
        const btnNextName = originalName + '-btnNext'
        const btnGroupName = originalName + '-btnGroup'
        const controlElements = `<div class="btn-group ${btnGroupName} text-center d-block" role="group" aria-label="Button group">
                                <button class="btn btn-secondary ${btnPrevName}" type="button">Prev</button>
                                <button class="btn btn-secondary ${btnNextName}" type="button">Next</button>
                                </div>`

        //Service variables
        let counter = 0
        let slideshowInterval
        let slideShowFlag = null

        //Disable button during animation
        let isRun = false


        //========  Create slider  ===========
        getCreateContentMethod()

        //Get links
        $wrappers = $(`.wrapper-${slideName}`)
        $wrappers.children().addClass(`${slideName}`)

        $slides = $(`.${slideName}`)
        $btnGroup = $(`.${btnGroupName}`)
        $btnPrev = $(`.${btnPrevName}`)
        $btnNext = $(`.${btnNextName}`)

        addStyles()

        if (options.constSliderHeight === true) {
            $container.css('height', `${getMaxSlideHeight() + $btnGroup.outerHeight() * 2}px`)
        }

        $slides.on('load', () => {
            if (options.constSliderHeight === false) {
                resizeContainer()
            } else {
                $container.css('height', `${getMaxSlideHeight() + $btnGroup.outerHeight() * 2}px`)
            }
        })

        $(window).ready(startSlideShowOnFocus)
        $(window).blur(function () {
            clearInterval(slideshowInterval)
            slideShowFlag = null
        })
        $(window).focus(startSlideShowOnFocus)
        $(window).scroll(startSlideShowOnFocus)

        $container.hover(() => {
            clearInterval(slideshowInterval)
            slideShowFlag = false
            if (options.hoverAnimation === true) {
                getHoverAnimationFunction()
            }
        }, () => {
            startSlideShow()
            if (options.hoverAnimation === true) {
                getHoverAnimationClearClass()
            }
        })


        $btnNext.on('click', () => {
            clearInterval(slideshowInterval)

            if (isRun) {
                return false
            }

            next()
            isRun = true
        })

        $btnPrev.on('click', () => {
            clearInterval(slideshowInterval)

            if (isRun) {
                return false
            }

            prev()
            isRun = true
        })

        if (options.control === false) {
            $container.on('click', () => {
                clearInterval(slideshowInterval)

                if (isRun) {
                    return false
                }

                next()
                isRun = true
            })
        }

        $(window).resize(() => {
            if (options.constSliderHeight === false) {
                resizeContainer()
            } else {
                $container.css('height', `${getMaxSlideHeight() + $btnGroup.outerHeight() * 2}px`)
            }
        })


        //========  Functions  ===========

        function getCreateContentMethod() {
            switch (true) {
                case (options.contentSrc === 'array'):
                    return createContentArray()
                case (options.contentSrc === 'html'):
                    return createContentHtml()
            }
        }

        function createContentArray() {
            let content = ''
            for (let i = 0; i < $collection.length; i++) {
                content += `<div class="wrapper-${slideName}">${$collection[i]}</div>`
            }
            if (options.control === true) {
                content += controlElements
            }
            $container.html(content)
        }

        function createContentHtml() {
            $container.children().wrap(`<div class="wrapper-${slideName}"></div>`)
            if (options.control === true) {
                $container.append(controlElements)
            }
        }


        function addStyles() {
            $('body').css('overflow-x', 'hidden')
            $container.css('position', 'relative').css('transition', 'all linear 0.3s')
            if (options.overflowHidden === true) {
                $container.css('overflow', 'hidden')
            }
            $wrappers.css('position', 'relative')
            $slides.addClass('img-fluid')
            $slides.css('display', 'block').css('position', 'absolute').css('opacity', '0').css('top', '0')
            $slides.eq(counter).css('position', 'static').css('opacity', '1').css('margin', '0 auto')
            $btnGroup.css('position', 'absolute').css('bottom', '15px').css('left', '50%')
                .css('transform', 'translateX(-50%)').css('transition', 'all linear 0.5s')
        }

        function resizeContainer() {
            $container.css('height', getContainerHeight() + 'px')
        }

        function getContainerHeight() {
            return $slides.eq(counter).parent().outerHeight()
        }

        function startSlideShow() {
            if (options.auto && (slideShowFlag === null || slideShowFlag === false)) {
                slideshowInterval = setInterval(() => next(), options.autoplayInterval)
                slideShowFlag = true
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
            if (counter >= $slides.length) {
                counter = 0
            }
        }

        function counterDec() {
            counter--
            if (counter < 0) {
                counter = $slides.length - 1
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
                case (options.animationType === 'rotateOutInDownLeft/rotateOutInUpLeft'):
                    return sliderAnimation('animate__rotateOutDownLeft', counterInc, 'animate__rotateInDownLeft')
                case (options.animationType === 'rotateOutInDownRight/rotateOutInUpRight'):
                    return sliderAnimation('animate__rotateOutDownRight', counterInc, 'animate__rotateInDownRight')
                case (options.animationType === 'hingeOut/fadeIn'):
                    return sliderAnimation('animate__hinge', counterInc, 'animate__fadeIn')
                case (options.animationType === 'bounceOut/jackInTheBox'):
                    return sliderAnimation('animate__bounceOut', counterInc, 'animate__jackInTheBox')
                case (options.animationType === 'rollOut/rollIn'):
                    return sliderAnimation('animate__rollOut', counterInc, 'animate__rollIn')
                case (options.animationType === 'zoomOut/zoomIn'):
                    return sliderAnimation('animate__zoomOut', counterInc, 'animate__zoomIn')
                case (options.animationType === 'zoomOutInDown/zoomOutInUp'):
                    return sliderAnimation('animate__zoomOutDown', counterInc, 'animate__zoomInDown')
                case (options.animationType === 'zoomOutInLeft/zoomOutInRight'):
                    return sliderAnimation('animate__zoomOutLeft', counterInc, 'animate__zoomInRight')
                case (options.animationType === 'slideOutInDown/slideOutInUp'):
                    return sliderAnimation('animate__slideOutDown', counterInc, 'animate__slideInDown')
                case (options.animationType === 'slideOutInLeft/slideOutInRight'):
                    return sliderAnimation('animate__slideOutLeft', counterInc, 'animate__slideInRight')
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
                case (options.animationType === 'rotateOutInDownLeft/rotateOutInUpLeft'):
                    return sliderAnimation('animate__rotateOutUpLeft', counterDec, 'animate__rotateInUpLeft')
                case (options.animationType === 'rotateOutInDownRight/rotateOutInUpRight'):
                    return sliderAnimation('animate__rotateOutUpRight', counterDec, 'animate__rotateInUpRight')
                case (options.animationType === 'hingeOut/fadeIn'):
                    return sliderAnimation('animate__hinge', counterDec, 'animate__fadeIn')
                case (options.animationType === 'bounceOut/jackInTheBox'):
                    return sliderAnimation('animate__bounceOut', counterDec, 'animate__jackInTheBox')
                case (options.animationType === 'rollOut/rollIn'):
                    return sliderAnimation('animate__rollOut', counterDec, 'animate__rollIn')
                case (options.animationType === 'zoomOut/zoomIn'):
                    return sliderAnimation('animate__zoomOut', counterDec, 'animate__zoomIn')
                case (options.animationType === 'zoomOutInDown/zoomOutInUp'):
                    return sliderAnimation('animate__zoomOutUp', counterDec, 'animate__zoomInUp')
                case (options.animationType === 'zoomOutInLeft/zoomOutInRight'):
                    return sliderAnimation('animate__zoomOutRight', counterDec, 'animate__zoomInLeft')
                case (options.animationType === 'slideOutInDown/slideOutInUp'):
                    return sliderAnimation('animate__slideOutUp', counterDec, 'animate__slideInUp')
                case (options.animationType === 'slideOutInLeft/slideOutInRight'):
                    return sliderAnimation('animate__slideOutRight', counterDec, 'animate__slideInLeft')
            }
        }

        function hideCurrentSlide() {
            $slides.eq(counter).css('position', 'absolute').css('opacity', '0').css('top', '0').css('left', '0')
        }

        function showCurrentSlide() {
            $slides.eq(counter).css('position', 'static').css('opacity', '1').css('margin', '0 auto')
        }

        function getMaxSlideHeight() {
            let maxSlideHeight = 0

            for (let i = 0; i < $slides.length; i++) {
                if ($slides.eq(i).outerHeight() > maxSlideHeight) {
                    maxSlideHeight = $slides.eq(i).outerHeight()
                }
            }

            return maxSlideHeight
        }

        function startSlideShowOnFocus() {
            var wt = $(window).scrollTop()
            var wh = $(window).height()
            var et = $container.offset().top
            var eh = $container.outerHeight()

            if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
                if (slideShowFlag == null || slideShowFlag == false) {
                    startSlideShow()
                }
            } else {
                if (slideShowFlag == null || slideShowFlag == true) {
                    clearInterval(slideshowInterval)
                }
                slideShowFlag = false
            }
        }

        //========  Slider main animation  ===========

        function sliderAnimation(animationCurrentClass, counterFunc, animationNextClass) {
            $slides.eq(counter).addClass(`animate__animated ${animationCurrentClass} ${options.animationTime}`)

            $slides.eq(counter).one('animationend', function () {
                $slides.eq(counter).removeClass(`animate__animated ${animationCurrentClass} ${options.animationTime}`)
                hideCurrentSlide()
                counterFunc()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $slides.eq(counter).addClass(`animate__animated ${animationNextClass} ${options.animationTime}`)
                $slides.eq(counter).one('animationend', function () {
                    $slides.eq(counter).removeClass(`animate__animated ${animationNextClass} ${options.animationTime}`)
                    isRun = false
                })
            })
        }

        //========  Slider "on hover" animation  ===========

        function getHoverAnimationFunction() {
            switch (true) {
                case (options.hoverAnimationType === 'pulse'):
                    return hoverAnimation('animate__pulse')
                case (options.hoverAnimationType === 'bounce'):
                    return hoverAnimation('animate__bounce')
                case (options.hoverAnimationType === 'rubberBand'):
                    return hoverAnimation('animate__rubberBand')
                case (options.hoverAnimationType === 'shakeX'):
                    return hoverAnimation('animate__shakeX')
                case (options.hoverAnimationType === 'shakeY'):
                    return hoverAnimation('animate__shakeY')
                case (options.hoverAnimationType === 'headShake'):
                    return hoverAnimation('animate__headShake')
                case (options.hoverAnimationType === 'swing'):
                    return hoverAnimation('animate__swing')
                case (options.hoverAnimationType === 'tada'):
                    return hoverAnimation('animate__tada')
                case (options.hoverAnimationType === 'wobble'):
                    return hoverAnimation('animate__wobble')
                case (options.hoverAnimationType === 'jello'):
                    return hoverAnimation('animate__jello')
                case (options.hoverAnimationType === 'heartBeat'):
                    return hoverAnimation('animate__heartBeat')
            }
        }

        function getHoverAnimationClearClass() {
            switch (true) {
                case (options.hoverAnimationType === 'pulse'):
                    return hoverAnimationClearClass('animate__pulse')
                case (options.hoverAnimationType === 'bounce'):
                    return hoverAnimationClearClass('animate__bounce')
                case (options.hoverAnimationType === 'rubberBand'):
                    return hoverAnimationClearClass('animate__rubberBand')
                case (options.hoverAnimationType === 'shakeX'):
                    return hoverAnimationClearClass('animate__shakeX')
                case (options.hoverAnimationType === 'shakeY'):
                    return hoverAnimationClearClass('animate__shakeY')
                case (options.hoverAnimationType === 'headShake'):
                    return hoverAnimationClearClass('animate__headShake')
                case (options.hoverAnimationType === 'swing'):
                    return hoverAnimationClearClass('animate__swing')
                case (options.hoverAnimationType === 'tada'):
                    return hoverAnimationClearClass('animate__tada')
                case (options.hoverAnimationType === 'wobble'):
                    return hoverAnimationClearClass('animate__wobble')
                case (options.hoverAnimationType === 'jello'):
                    return hoverAnimationClearClass('animate__jello')
                case (options.hoverAnimationType === 'heartBeat'):
                    return hoverAnimationClearClass('animate__heartBeat')
            }
        }

        function hoverAnimation(hoverAnimationClass) {
            $slides.addClass(`animate__animated ${hoverAnimationClass}`)
        }

        function hoverAnimationClearClass(hoverAnimationClass) {
            $slides.on('animationend', function () {
                $slides.removeClass(`${hoverAnimationClass}`)
            })
        }

        return this
    }

})(jQuery)
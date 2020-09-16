(function ($) {

    $.fn.animateCssSlider = function (settings, content) {

        //========  Default  ========
        const defaultsSettings = {
            auto: false,
            autoplayInterval: 3500,
            animationType: 'fadeDown/fadeUp',
            animationTime: '',
            constSliderHeight: true,
        }

        // animationType:
        // fadeOut/fadeIn
        // fadeDown/fadeUp

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

        startSlideShow()

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
            $container.css('position', 'relative').css('overflow', 'hidden').css('transition', 'all linear 0.3s')
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
                    return nextSlideFadeOutFadeIn()
                case (options.animationType === 'fadeDown/fadeUp'):
                    return nextSlideFadeDownFadeUp()

            }
        }

        function getPrevAnimationFunction() {
            switch (true) {
                case (options.animationType === 'fadeOut/fadeIn'):
                    return prevSlideFadeOutFadeIn()
                case (options.animationType === 'fadeDown/fadeUp'):
                    return prevSlideFadeDownFadeUp()
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


        //========  Functions of animation  ===========

        //FadeOutFadeIn
        function nextSlideFadeOutFadeIn() {
            $images.eq(counter).addClass(`animate__animated animate__fadeOut ${options.animationTime}`)

            $images.eq(counter).one('animationend', function () {
                $images.eq(counter).removeClass(`animate__animated animate__fadeOut ${options.animationTime}`)
                hideCurrentSlide()
                counterInc()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $images.eq(counter).addClass(`animate__animated animate__fadeIn ${options.animationTime}`)
                $images.eq(counter).one('animationend', function () {
                    $images.eq(counter).removeClass(`animate__animated animate__fadeIn ${options.animationTime}`)
                    isRun = false
                })
            })
        }

        function prevSlideFadeOutFadeIn() {
            $images.eq(counter).addClass(`animate__animated animate__fadeOut ${options.animationTime}`)

            $images.eq(counter).one('animationend', function () {
                $images.eq(counter).removeClass(`animate__animated animate__fadeOut ${options.animationTime}`)
                hideCurrentSlide()
                counterDec()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $images.eq(counter).addClass(`animate__animated animate__fadeIn ${options.animationTime}`)
                $images.eq(counter).one('animationend', function () {
                    $images.eq(counter).removeClass(`animate__animated animate__fadeIn ${options.animationTime}`)
                    isRun = false
                })
            })
        }

        //FadeDownFadeUp
        function nextSlideFadeDownFadeUp() {
            $images.eq(counter).addClass(`animate__animated animate__fadeOutDown ${options.animationTime}`)

            $images.eq(counter).one('animationend', function () {
                $images.eq(counter).removeClass(`animate__animated animate__fadeOutDown ${options.animationTime}`)
                hideCurrentSlide()
                counterInc()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $images.eq(counter).addClass(`animate__animated animate__fadeInDown ${options.animationTime}`)
                $images.eq(counter).one('animationend', function () {
                    $images.eq(counter).removeClass(`animate__animated animate__fadeInDown ${options.animationTime}`)
                    isRun = false
                })
            })
        }

        function prevSlideFadeDownFadeUp() {
            $images.eq(counter).addClass(`animate__animated animate__fadeOutUp ${options.animationTime}`)

            $images.eq(counter).one('animationend', function () {
                $images.eq(counter).removeClass(`animate__animated animate__fadeOutUp ${options.animationTime}`)
                hideCurrentSlide()
                counterDec()
                showCurrentSlide()
                if (options.constSliderHeight === false) {
                    resizeContainer()
                }
                $images.eq(counter).addClass(`animate__animated animate__fadeInUp ${options.animationTime}`)
                $images.eq(counter).one('animationend', function () {
                    $images.eq(counter).removeClass(`animate__animated animate__fadeInUp ${options.animationTime}`)
                    isRun = false
                })
            })
        }



        return this
    }

})(jQuery)
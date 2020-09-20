'use strict'

$(function () {

    $('#galery26').animateCssSlider({
        contentSrc: 'html',
        auto: true,
        autoplayInterval: 7500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    })
})
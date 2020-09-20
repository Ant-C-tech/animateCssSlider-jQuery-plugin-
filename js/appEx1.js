'use strict'

$(function () {

    $('#galery1').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 7500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery2').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInDownBig/fadeOutInUpBig',
        animationTime: 'animate__fast',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/550' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/550' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/550' alt='#'></img>",
    ])

    $('#galery3').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeft/fadeOutInRight',
        animationTime: 'animate__faster',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/560/550' alt='#'></img>",
        "<img src='https://picsum.photos/561/550' alt='#'></img>",
        "<img src='https://picsum.photos/562/550' alt='#'></img>",
        "<img src='https://picsum.photos/563/550' alt='#'></img>",
        "<img src='https://picsum.photos/564/550' alt='#'></img>",
    ])

    $('#galery4').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4500,
        animationType: 'fadeOutInLeftBig/fadeOutInRightBig',
        animationTime: 'animate__faster',
        hoverAnimation: true,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/565/550' alt='#'></img>",
        "<img src='https://picsum.photos/566/550' alt='#'></img>",
        "<img src='https://picsum.photos/567/550' alt='#'></img>",
        "<img src='https://picsum.photos/568/550' alt='#'></img>",
        "<img src='https://picsum.photos/569/550' alt='#'></img>",
    ])

    $('#galery5').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'fadeOutInLeftTop/fadeOutInRightBottom',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/571/550' alt='#'></img>",
        "<img src='https://picsum.photos/572/550' alt='#'></img>",
        "<img src='https://picsum.photos/573/550' alt='#'></img>",
        "<img src='https://picsum.photos/574/550' alt='#'></img>",
        "<img src='https://picsum.photos/575/550' alt='#'></img>",
    ])

    $('#galery6').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeftBottom/fadeOutInRightTop',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/576/550' alt='#'></img>",
        "<img src='https://picsum.photos/577/550' alt='#'></img>",
        "<img src='https://picsum.photos/578/550' alt='#'></img>",
        "<img src='https://picsum.photos/579/550' alt='#'></img>",
        "<img src='https://picsum.photos/580/550' alt='#'></img>",
    ])

    $('#galery7').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4500,
        animationType: 'backOutInDown/backOutInUp',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery8').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4500,
        animationType: 'backOutInLeft/backOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'bounce',
        constSliderHeight: true,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/450' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/450' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/450' alt='#'></img>",
    ])

    $('#galery9').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'bounceOut/bounceIn',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery10').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4500,
        animationType: 'bounceOutInDown/bounceOutInUp',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/550' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/550' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/550' alt='#'></img>",
    ])

    $('#galery11').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 7500,
        animationType: 'bounceOutInLeft/bounceOutInRight',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'rubberBand',
        constSliderHeight: false,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/560/550' alt='#'></img>",
        "<img src='https://picsum.photos/561/550' alt='#'></img>",
        "<img src='https://picsum.photos/562/550' alt='#'></img>",
        "<img src='https://picsum.photos/563/550' alt='#'></img>",
        "<img src='https://picsum.photos/564/550' alt='#'></img>",
    ])

    $('#galery12').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 6000,
        animationType: 'flipOutX/flipInX',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/565/550' alt='#'></img>",
        "<img src='https://picsum.photos/566/550' alt='#'></img>",
        "<img src='https://picsum.photos/567/550' alt='#'></img>",
        "<img src='https://picsum.photos/568/550' alt='#'></img>",
        "<img src='https://picsum.photos/569/550' alt='#'></img>",
    ])

    $('#galery13').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 6500,
        animationType: 'flipOutY/flipInY',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery14').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'lightSpeedOutInLeft/lightSpeedOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'shakeX',
        constSliderHeight: false,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/550' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/550' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/550' alt='#'></img>",
    ])

    $('#galery15').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'rotateOut/rotateIn',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/560/550' alt='#'></img>",
        "<img src='https://picsum.photos/561/550' alt='#'></img>",
        "<img src='https://picsum.photos/562/550' alt='#'></img>",
        "<img src='https://picsum.photos/563/550' alt='#'></img>",
        "<img src='https://picsum.photos/564/550' alt='#'></img>",
    ])

    $('#galery16').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownLeft/rotateOutInUpLeft',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'shakeY',
        constSliderHeight: true,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/565/550' alt='#'></img>",
        "<img src='https://picsum.photos/566/550' alt='#'></img>",
        "<img src='https://picsum.photos/567/550' alt='#'></img>",
        "<img src='https://picsum.photos/568/550' alt='#'></img>",
        "<img src='https://picsum.photos/569/550' alt='#'></img>",
    ])

    $('#galery17').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownRight/rotateOutInUpRight',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery18').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 6500,
        animationType: 'hingeOut/fadeIn',
        animationTime: 'animate__slower',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/550' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/550' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/550' alt='#'></img>",
    ])

    $('#galery19').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 6000,
        animationType: 'bounceOut/jackInTheBox',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'headShake',
        constSliderHeight: true,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/560/550' alt='#'></img>",
        "<img src='https://picsum.photos/561/550' alt='#'></img>",
        "<img src='https://picsum.photos/562/550' alt='#'></img>",
        "<img src='https://picsum.photos/563/550' alt='#'></img>",
        "<img src='https://picsum.photos/564/550' alt='#'></img>",
    ])

    $('#galery20').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rollOut/rollIn',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'swing',
        constSliderHeight: true,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/565/550' alt='#'></img>",
        "<img src='https://picsum.photos/566/550' alt='#'></img>",
        "<img src='https://picsum.photos/567/550' alt='#'></img>",
        "<img src='https://picsum.photos/568/550' alt='#'></img>",
        "<img src='https://picsum.photos/569/550' alt='#'></img>",
    ])

    $('#galery21').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 4500,
        animationType: 'zoomOut/zoomIn',
        animationTime: 'animate__fast',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

    $('#galery22').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 6000,
        animationType: 'zoomOutInDown/zoomOutInUp',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'wobble',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/555/550' alt='#'></img>",
        "<img src='https://picsum.photos/556/550' alt='#'></img>",
        "<img src='https://picsum.photos/557/550' alt='#'></img>",
        "<img src='https://picsum.photos/558/550' alt='#'></img>",
        "<img src='https://picsum.photos/559/550' alt='#'></img>",
    ])

    $('#galery23').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'zoomOutInLeft/zoomOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'tada',
        constSliderHeight: true,
        overflowHidden: false,
        control: true,
    }, [
        "<img src='https://picsum.photos/560/550' alt='#'></img>",
        "<img src='https://picsum.photos/561/550' alt='#'></img>",
        "<img src='https://picsum.photos/562/550' alt='#'></img>",
        "<img src='https://picsum.photos/563/550' alt='#'></img>",
        "<img src='https://picsum.photos/564/550' alt='#'></img>",
    ])

    $('#galery24').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 7500,
        animationType: 'slideOutInDown/slideOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: true,
        hoverAnimationType: 'jello',
        constSliderHeight: false,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/565/550' alt='#'></img>",
        "<img src='https://picsum.photos/566/550' alt='#'></img>",
        "<img src='https://picsum.photos/567/550' alt='#'></img>",
        "<img src='https://picsum.photos/568/550' alt='#'></img>",
        "<img src='https://picsum.photos/569/550' alt='#'></img>",
    ])

    $('#galery25').animateCssSlider({
        contentSrc: 'array',
        auto: true,
        autoplayInterval: 5500,
        animationType: 'slideOutInLeft/slideOutInRight',
        animationTime: 'animate__fast',
        hoverAnimation: true,
        hoverAnimationType: 'heartBeat',
        constSliderHeight: true,
        overflowHidden: true,
        control: true,
    }, [
        "<img src='https://picsum.photos/550/550' alt='#'></img>",
        "<img src='https://picsum.photos/551/550' alt='#'></img>",
        "<img src='https://picsum.photos/552/550' alt='#'></img>",
        "<img src='https://picsum.photos/553/550' alt='#'></img>",
        "<img src='https://picsum.photos/554/550' alt='#'></img>",
    ])

})
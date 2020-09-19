'use strict'

$(function () {

    $('#galery').animateCssSlider({}, [])

    $('#galery1').animateCssSlider({
        auto: true,
        autoplayInterval: 7500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
        ['https://picsum.photos/555/550', '#'],
    ])

    $('#galery2').animateCssSlider({
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInDownBig/fadeOutInUpBig',
        animationTime: 'animate__fast',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/556/550', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/558/550', '#'],
        ['https://picsum.photos/559/550', '#'],
        ['https://picsum.photos/560/550', '#'],
    ])

    $('#galery3').animateCssSlider({
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeft/fadeOutInRight',
        animationTime: 'animate__faster',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/561/550', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/550', '#'],
        ['https://picsum.photos/564/550', '#'],
        ['https://picsum.photos/565/550', '#'],
    ])

    $('#galery4').animateCssSlider({
        auto: true,
        autoplayInterval: 4500,
        animationType: 'fadeOutInLeftBig/fadeOutInRightBig',
        animationTime: 'animate__faster',
        hoverAnimation: true,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/566/550', '#'],
        ['https://picsum.photos/567/550', '#'],
        ['https://picsum.photos/568/550', '#'],
        ['https://picsum.photos/569/550', '#'],
        ['https://picsum.photos/570/550', '#'],
    ])

    $('#galery5').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'fadeOutInLeftTop/fadeOutInRightBottom',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/571/550', '#'],
        ['https://picsum.photos/572/550', '#'],
        ['https://picsum.photos/573/550', '#'],
        ['https://picsum.photos/574/550', '#'],
        ['https://picsum.photos/575/550', '#'],
    ])

    $('#galery6').animateCssSlider({
        auto: true,
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeftBottom/fadeOutInRightTop',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/576/550', '#'],
        ['https://picsum.photos/577/550', '#'],
        ['https://picsum.photos/578/550', '#'],
        ['https://picsum.photos/579/550', '#'],
        ['https://picsum.photos/580/550', '#'],
    ])

    $('#galery7').animateCssSlider({
        auto: true,
        autoplayInterval: 4500,
        animationType: 'backOutInDown/backOutInUp',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/550', '#'],
        ['https://picsum.photos/551', '#'],
        ['https://picsum.photos/552', '#'],
        ['https://picsum.photos/553', '#'],
        ['https://picsum.photos/554', '#'],
    ])

    $('#galery8').animateCssSlider({
        auto: true,
        autoplayInterval: 4500,
        animationType: 'backOutInLeft/backOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'bounce',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/555/550', '#'],
        ['https://picsum.photos/506/450', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/518/450', '#'],
        ['https://picsum.photos/519/550', '#'],
    ])

    $('#galery9').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'bounceOut/bounceIn',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/550/550', '#'],
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
    ])

    $('#galery10').animateCssSlider({
        auto: true,
        autoplayInterval: 4500,
        animationType: 'bounceOutInDown/bounceOutInUp',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/555/550', '#'],
        ['https://picsum.photos/556/550', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/558/550', '#'],
        ['https://picsum.photos/559/550', '#'],
    ])

    $('#galery11').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'bounceOutInLeft/bounceOutInRight',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'rubberBand',
        constSliderHeight: false,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/560/550', '#'],
        ['https://picsum.photos/561/550', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/550', '#'],
        ['https://picsum.photos/564/550', '#'],
    ])

    $('#galery12').animateCssSlider({
        auto: true,
        autoplayInterval: 6000,
        animationType: 'flipOutX/flipInX',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/565/550', '#'],
        ['https://picsum.photos/566/550', '#'],
        ['https://picsum.photos/567/550', '#'],
        ['https://picsum.photos/568/550', '#'],
        ['https://picsum.photos/569/550', '#'],
    ])

    $('#galery13').animateCssSlider({
        auto: true,
        autoplayInterval: 6500,
        animationType: 'flipOutY/flipInY',
        animationTime: 'animate__slow',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/550/550', '#'],
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
    ])

    $('#galery14').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'lightSpeedOutInLeft/lightSpeedOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'shakeX',
        constSliderHeight: false,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/555/550', '#'],
        ['https://picsum.photos/556/550', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/558/550', '#'],
        ['https://picsum.photos/559/550', '#'],
    ])

    $('#galery15').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'rotateOut/rotateIn',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/560/550', '#'],
        ['https://picsum.photos/561/550', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/550', '#'],
        ['https://picsum.photos/564/550', '#'],
    ])

    $('#galery16').animateCssSlider({
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownLeft/rotateOutInUpLeft',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'shakeY',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/565/550', '#'],
        ['https://picsum.photos/566/550', '#'],
        ['https://picsum.photos/567/550', '#'],
        ['https://picsum.photos/568/550', '#'],
        ['https://picsum.photos/569/550', '#'],
    ])

    $('#galery17').animateCssSlider({
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownRight/rotateOutInUpRight',
        animationTime: '',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/550/550', '#'],
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
    ])

    $('#galery18').animateCssSlider({
        auto: true,
        autoplayInterval: 6500,
        animationType: 'hingeOut/fadeIn',
        animationTime: 'animate__slower',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/555/550', '#'],
        ['https://picsum.photos/556/550', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/558/550', '#'],
        ['https://picsum.photos/559/550', '#'],
    ])

    $('#galery19').animateCssSlider({
        auto: true,
        autoplayInterval: 6000,
        animationType: 'bounceOut/jackInTheBox',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'headShake',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/560/550', '#'],
        ['https://picsum.photos/561/550', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/550', '#'],
        ['https://picsum.photos/564/550', '#'],
    ])

    $('#galery20').animateCssSlider({
        auto: true,
        autoplayInterval: 5000,
        animationType: 'rollOut/rollIn',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'swing',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/565/550', '#'],
        ['https://picsum.photos/566/550', '#'],
        ['https://picsum.photos/567/550', '#'],
        ['https://picsum.photos/568/550', '#'],
        ['https://picsum.photos/569/550', '#'],
    ])

    $('#galery21').animateCssSlider({
        auto: true,
        autoplayInterval: 4500,
        animationType: 'zoomOut/zoomIn',
        animationTime: 'animate__fast',
        hoverAnimation: false,
        hoverAnimationType: 'pulse',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/550/550', '#'],
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
    ])

    $('#galery22').animateCssSlider({
        auto: true,
        autoplayInterval: 6000,
        animationType: 'zoomOutInDown/zoomOutInUp',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'wobble',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/555/550', '#'],
        ['https://picsum.photos/556/550', '#'],
        ['https://picsum.photos/557/550', '#'],
        ['https://picsum.photos/558/550', '#'],
        ['https://picsum.photos/559/550', '#'],
    ])

    $('#galery23').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'zoomOutInLeft/zoomOutInRight',
        animationTime: '',
        hoverAnimation: true,
        hoverAnimationType: 'tada',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        ['https://picsum.photos/560/550', '#'],
        ['https://picsum.photos/561/500', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/500', '#'],
        ['https://picsum.photos/564/550', '#'],
    ])

    $('#galery24').animateCssSlider({
        auto: true,
        autoplayInterval: 7500,
        animationType: 'slideOutInDown/slideOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: true,
        hoverAnimationType: 'jello',
        constSliderHeight: false,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/565/550', '#'],
        ['https://picsum.photos/566/550', '#'],
        ['https://picsum.photos/567/550', '#'],
        ['https://picsum.photos/568/550', '#'],
        ['https://picsum.photos/569/550', '#'],
    ])

    $('#galery25').animateCssSlider({
        auto: true,
        autoplayInterval: 5500,
        animationType: 'slideOutInLeft/slideOutInRight',
        animationTime: 'animate__fast',
        hoverAnimation: true,
        hoverAnimationType: 'heartBeat',
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/550/550', '#'],
        ['https://picsum.photos/551/550', '#'],
        ['https://picsum.photos/552/550', '#'],
        ['https://picsum.photos/553/550', '#'],
        ['https://picsum.photos/554/550', '#'],
    ])
})
'use strict'

$(function () {

    $('#galery').animateCssSlider({}, [])

    $('#galery1').animateCssSlider({
        auto: true,
        autoplayInterval: 7500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__slower',
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
        constSliderHeight: true,
        overflowHidden: true,
    }, [
        ['https://picsum.photos/560/550', '#'],
        ['https://picsum.photos/561/550', '#'],
        ['https://picsum.photos/562/550', '#'],
        ['https://picsum.photos/563/550', '#'],
        ['https://picsum.photos/564/550', '#'],
    ])

})
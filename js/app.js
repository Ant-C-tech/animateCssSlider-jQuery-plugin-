'use strict'

$(function () {

    $('#galery').animateCssSlider({}, [])

    $('#galery2').animateCssSlider({
        auto: true,
        autoplayInterval: 3000,
        animationType: 'fadeDown/fadeUp',
        animationTime: 'animate__fast',
        constSliderHeight: false,
    }, [
        ['https://picsum.photos/651', '#'],
        ['https://picsum.photos/652', '#'],
        ['https://picsum.photos/653', '#'],
        ['https://picsum.photos/654', '#'],
        ['https://picsum.photos/655', '#'],
    ])

})
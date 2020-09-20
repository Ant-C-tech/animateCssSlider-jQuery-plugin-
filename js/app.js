'use strict'

$(function () {

    $('#mainpage1').animateCssSlider({
        autoplayInterval: 2500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__fast',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/191/190' alt='#'></img>",
        "<img src='https://picsum.photos/192/190' alt='#'></img>",
        "<img src='https://picsum.photos/193/190' alt='#'></img>",
        "<img src='https://picsum.photos/194/190' alt='#'></img>",
        "<img src='https://picsum.photos/195/190' alt='#'></img>",
    ])

    $('#mainpage2').animateCssSlider({
        autoplayInterval: 3500,
        animationType: 'bounceOut/bounceIn',
        animationTime: 'animate__fast',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/196/190' alt='#'></img>",
        "<img src='https://picsum.photos/197/190' alt='#'></img>",
        "<img src='https://picsum.photos/198/190' alt='#'></img>",
        "<img src='https://picsum.photos/199/190' alt='#'></img>",
        "<img src='https://picsum.photos/200/190' alt='#'></img>",
    ])

    $('#mainpage3').animateCssSlider({
        autoplayInterval: 3200,
        animationType: 'flipOutY/flipInY',
        animationTime: '',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/201/190' alt='#'></img>",
        "<img src='https://picsum.photos/202/190' alt='#'></img>",
        "<img src='https://picsum.photos/203/190' alt='#'></img>",
        "<img src='https://picsum.photos/204/190' alt='#'></img>",
        "<img src='https://picsum.photos/205/190' alt='#'></img>",
    ])

    $('#mainpage4').animateCssSlider({
        autoplayInterval: 2500,
        animationType: 'rollOut/rollIn',
        animationTime: 'animate__fast',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/206/190' alt='#'></img>",
        "<img src='https://picsum.photos/207/190' alt='#'></img>",
        "<img src='https://picsum.photos/208/190' alt='#'></img>",
        "<img src='https://picsum.photos/209/190' alt='#'></img>",
        "<img src='https://picsum.photos/210/190' alt='#'></img>",
    ])

    $('#mainpage5').animateCssSlider({
        autoplayInterval: 2500,
        animationType: 'fadeOutInLeft/fadeOutInRight',
        animationTime: 'animate__fast',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/211/190' alt='#'></img>",
        "<img src='https://picsum.photos/212/190' alt='#'></img>",
        "<img src='https://picsum.photos/213/190' alt='#'></img>",
        "<img src='https://picsum.photos/214/190' alt='#'></img>",
        "<img src='https://picsum.photos/215/190' alt='#'></img>",
    ])

    $('#mainpage6').animateCssSlider({
        autoplayInterval: 2500,
        animationType: 'zoomOutInLeft/zoomOutInRight',
        animationTime: '',
        overflowHidden: true,
        control: false,
    }, [
        "<img src='https://picsum.photos/216/190' alt='#'></img>",
        "<img src='https://picsum.photos/217/190' alt='#'></img>",
        "<img src='https://picsum.photos/218/190' alt='#'></img>",
        "<img src='https://picsum.photos/219/190' alt='#'></img>",
        "<img src='https://picsum.photos/220/190' alt='#'></img>",
    ])
})
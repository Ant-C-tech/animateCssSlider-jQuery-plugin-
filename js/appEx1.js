'use strict'

$(function () {

    $('#galery1').animateCssSlider({
        autoplayInterval: 7500,
        animationType: 'fadeOutInDown/fadeOutInUp',
        animationTime: 'animate__slower',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=1&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=2&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=3&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=4&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=5&txt=0' alt='#'></img>",
    ])

    $('#galery2').animateCssSlider({
        autoplayInterval: 4000,
        animationType: 'fadeOutInDownBig/fadeOutInUpBig',
        animationTime: 'animate__fast',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=6&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=7&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=8&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=9&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=10&txt=0' alt='#'></img>",
    ])

    $('#galery3').animateCssSlider({
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeft/fadeOutInRight',
        animationTime: 'animate__faster',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=11&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=12&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=13&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=14&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=15&txt=0' alt='#'></img>",
    ])

    $('#galery4').animateCssSlider({
        autoplayInterval: 4500,
        animationType: 'fadeOutInLeftBig/fadeOutInRightBig',
        animationTime: 'animate__faster',
        hoverAnimation: true,
        hoverAnimationType: 'pulse',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=16&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=17&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=18&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=19&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=20&txt=0' alt='#'></img>",
    ])

    $('#galery5').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'fadeOutInLeftTop/fadeOutInRightBottom',
        animationTime: 'animate__slow',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=21&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=22&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=23&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=24&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=25&txt=0' alt='#'></img>",
    ])

    $('#galery6').animateCssSlider({
        autoplayInterval: 4000,
        animationType: 'fadeOutInLeftBottom/fadeOutInRightTop',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=26&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=27&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=28&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=29&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=30&txt=0' alt='#'></img>",
    ])

    $('#galery7').animateCssSlider({
        autoplayInterval: 4500,
        animationType: 'backOutInDown/backOutInUp',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=31&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=450&random=32&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=33&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=450&random=34&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=35&txt=0' alt='#'></img>",
    ])

    $('#galery8').animateCssSlider({
        autoplayInterval: 4500,
        animationType: 'backOutInLeft/backOutInRight',
        hoverAnimation: true,
        hoverAnimationType: 'bounce',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=36&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=37&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=38&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=39&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=40&txt=0' alt='#'></img>",
    ])

    $('#galery9').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'bounceOut/bounceIn',
        animationTime: 'animate__slow',
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=41&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=42&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=43&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=44&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=45&txt=0' alt='#'></img>",
    ])

    $('#galery10').animateCssSlider({
        autoplayInterval: 4500,
        animationType: 'bounceOutInDown/bounceOutInUp',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=46&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=47&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=48&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=49&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=50&txt=0' alt='#'></img>",
    ])

    $('#galery11').animateCssSlider({
        autoplayInterval: 7500,
        animationType: 'bounceOutInLeft/bounceOutInRight',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'rubberBand',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=51&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=52&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=53&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=54&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=55&txt=0' alt='#'></img>",
    ])

    $('#galery12').animateCssSlider({
        autoplayInterval: 6000,
        animationType: 'flipOutX/flipInX',
        animationTime: 'animate__slow',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=56&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=57&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=58&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=59&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=60&txt=0' alt='#'></img>",
    ])

    $('#galery13').animateCssSlider({
        autoplayInterval: 6500,
        animationType: 'flipOutY/flipInY',
        animationTime: 'animate__slow',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=61&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=62&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=63&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=64&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=65&txt=0' alt='#'></img>",
    ])

    $('#galery14').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'lightSpeedOutInLeft/lightSpeedOutInRight',
        hoverAnimation: true,
        hoverAnimationType: 'shakeX',
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=66&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=67&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=68&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=69&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=70&txt=0' alt='#'></img>",
    ])

    $('#galery15').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'rotateOut/rotateIn',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=71&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=72&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=73&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=74&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=75&txt=0' alt='#'></img>",
    ])

    $('#galery16').animateCssSlider({
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownLeft/rotateOutInUpLeft',
        hoverAnimation: true,
        hoverAnimationType: 'shakeY',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=76&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=77&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=78&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=79&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=80&txt=0' alt='#'></img>",
    ])

    $('#galery17').animateCssSlider({
        autoplayInterval: 5000,
        animationType: 'rotateOutInDownRight/rotateOutInUpRight',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=81&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=82&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=83&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=84&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=85&txt=0' alt='#'></img>",
    ])

    $('#galery18').animateCssSlider({
        autoplayInterval: 6500,
        animationType: 'hingeOut/fadeIn',
        animationTime: 'animate__slower',
        constSliderHeight: true,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=86&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=87&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=88&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=89&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=90&txt=0' alt='#'></img>",
    ])

    $('#galery19').animateCssSlider({
        autoplayInterval: 6000,
        animationType: 'bounceOut/jackInTheBox',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'headShake',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=91&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=92&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=93&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=94&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=95&txt=0' alt='#'></img>",
    ])

    $('#galery20').animateCssSlider({
        autoplayInterval: 5000,
        animationType: 'rollOut/rollIn',
        hoverAnimation: true,
        hoverAnimationType: 'swing',
        constSliderHeight: true,
        overflowHidden: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=96&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=97&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=98&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=99&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=100&txt=0' alt='#'></img>",
    ])

    $('#galery21').animateCssSlider({
        autoplayInterval: 4500,
        animationType: 'zoomOut/zoomIn',
        animationTime: 'animate__fast',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=101&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=102&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=103&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=104&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=105&txt=0' alt='#'></img>",
    ])

    $('#galery22').animateCssSlider({
        autoplayInterval: 6000,
        animationType: 'zoomOutInDown/zoomOutInUp',
        animationTime: 'animate__slow',
        hoverAnimation: true,
        hoverAnimationType: 'wobble',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=106&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=107&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=108&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=109&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=110&txt=0' alt='#'></img>",
    ])

    $('#galery23').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'zoomOutInLeft/zoomOutInRight',
        hoverAnimation: true,
        hoverAnimationType: 'tada',
        constSliderHeight: true,
        overflowHidden: false,
        control: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=111&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=112&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=113&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=114&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=115&txt=0' alt='#'></img>",
    ])

    $('#galery24').animateCssSlider({
        autoplayInterval: 7500,
        animationType: 'slideOutInDown/slideOutInUp',
        animationTime: 'animate__slower',
        hoverAnimation: true,
        hoverAnimationType: 'jello',
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=116&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=117&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=118&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=119&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=120&txt=0' alt='#'></img>",
    ])

    $('#galery25').animateCssSlider({
        autoplayInterval: 5500,
        animationType: 'slideOutInLeft/slideOutInRight',
        animationTime: 'animate__fast',
        hoverAnimation: true,
        hoverAnimationType: 'heartBeat',
        constSliderHeight: true,
        control: false,
    }, [
        "<img src='https://placem.at/places?w=550&h=550&random=121&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=122&txt=0' alt='#'></img>",
        "<img src='https://placem.at/people?w=550&h=550&random=123&txt=0' alt='#'></img>",
        "<img src='https://placem.at/places?w=550&h=550&random=124&txt=0' alt='#'></img>",
        "<img src='https://placem.at/things?w=550&h=550&random=125&txt=0' alt='#'></img>",
    ])

})
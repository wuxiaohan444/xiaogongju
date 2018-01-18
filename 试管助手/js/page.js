/**
 * Created by Administrator on 2016/11/25.
 */
setTimeout(function () {

    let n = 0;

    let u, end, start, g, g2;

    let w0 = 50;

    let w1 = 10.4;

    let w2 = 52;

    let heightVal = $("div[data-page='profile1']").find(".row").eq(1).find(".number").attr("initial-value"); //150-140

    let widthVal = $("div[data-page='profile1']").find(".row").eq(2).find(".number").attr("initial-value"); //550-300 /2.5 /10 ±£Áô×îºóÒ»ÃÇÐ¡Êý

    let ageVal = $("div[data-page='profile1']").find(".row").eq(0).find(".number").attr("initial-value"); //30-18
    let mouVal = $("div[data-page='profil']")


    $('.ruler .main').eq(0).css({
        '-webkit-transform': 'translateX(-' + Math.ceil(parseInt(ageVal * w0)) + 'px)'
    }).attr('value', Math.ceil(ageVal * w0));

    $('.ruler .main').eq(1).css({
        '-webkit-transform': 'translateX(-' + parseInt(heightVal * w1) + 'px)'
    }).attr('value', heightVal * w1);

    $('.ruler .main').eq(2).css({
        '-webkit-transform': 'translateX(-' + parseInt(widthVal * w2) + 'px)'
    }).attr('value', widthVal * w2);


    for (let i = 0; i < $('.ruler').length; i++) {
        let liW = $('.ruler').eq(i).find("li").width();
        let size = $('.ruler').eq(i).find('li').size();
    }

    $('body').on('touchcancel,touchend,touchmove,touchstart', function (e) {
        e.preventDefault();
    })

    $('.selectize li').on('touchstart', function () {
        $(this).addClass("hover").siblings("li").removeClass("hover");
    })

    $('.selectize li').on('touchsend', function () {
        $(this).removeClass("hover");
    })


    $('.ruler ul').on("touchstart", function (e) {
        let initial = $(this).attr('data-initial');
        e.stopPropagation();
        v = parseInt($(this).parent(".main").attr('value'));

        if ($(this).closest('.ruler').hasClass("ruler-weight")) {
            start = 0;
            end = '-1458';
            g = 52;
        } else if ($(this).closest('.ruler').hasClass("ruler-age")) {
            start = 0;
            end = '-1600';
            g = 50;

        } else {
            start = 0;
            end = '-623';
            g = 10.4;
        }


        if (initial == 'true') {
            startX = e.originalEvent.changedTouches[0].pageX + v;
            $(this).attr('data-initial', 'false');
        } else {
            startX = e.originalEvent.changedTouches[0].pageX - v;
        }
    });


    $('.ruler ul').on("touchmove", function (e) {

        let number = parseInt($(this).closest(".row").find('.number').attr('value'));

        moveX = e.originalEvent.changedTouches[0].pageX;

        X = moveX - startX;

        if (X > 0) {
            let vv = $(this).parent(".main").attr('value');

            if (vv >= start) {

                start = X > start ? start : X;

                $(this).parent(".main").css({
                    '-webkit-transform': 'translateX(' + start + 'px)'
                }).attr('value', start);
            } else {
                $(this).parent(".main").css({
                    '-webkit-transform': 'translateX(' + X + 'px)'
                }).attr('value', X);
            }

            if ($(this).closest('.ruler').hasClass("ruler-weight")) {
                let val = (number - 20 + Math.abs(vv / g) / 0.4).toFixed(1);//.replace('.0','');
                $(this).closest(".row").find('.number').text(val);
            } else {
                $(this).closest(".row").find('.number').text(Math.ceil(number - (vv / g) - 10));

                if ($(this).closest('.ruler').hasClass("ruler-age")) {
                    let ageVal = $(this).closest(".row").find('.number').text();
                    $(this).closest(".row").find('.number').text(parseInt(ageVal - 2))
                }
            }

        } else {

            let vv = $(this).parent(".main").attr('value');

            if ($(this).parent(".main").attr('value') <= end) {
                end = X < end ? end : X;
                $(this).parent(".main").css({
                    '-webkit-transform': 'translateX(' + end + 'px)'
                }).attr('value', end);
            } else {
                $(this).parent(".main").css({
                    '-webkit-transform': 'translateX(' + X + 'px)'
                }).attr('value', X);
            }

            if ($(this).closest('.ruler').hasClass("ruler-weight")) {

                let val = (number - 20 + Math.abs(vv / g) / 0.4).toFixed(1);

                if (val === '100.1') {
                    val = 100;
                }

                $(this).closest(".row").find('.number').text(val);

            } else {
                $(this).closest(".row").find('.number').text(Math.ceil(number + Math.abs(vv / g) - 10));

                if ($(this).closest('.ruler').hasClass("ruler-age")) {
                    let ageVal = $(this).closest(".row").find('.number').text();
                    $(this).closest(".row").find('.number').text(parseInt(ageVal - 2))
                }
            }
        }
        e.preventDefault();
    });


    $('.ruler ul').on("touchend", function (e) {

        e.stopPropagation();

        moveEndX = e.originalEvent.changedTouches[0].screenX;

        X = moveEndX - startX;

        let arr = new Array();

        if ($(this).closest('.ruler').hasClass("ruler-age")) {

            let value = Math.abs($(this).parent(".main").attr("value"));

            let value2 = Math.round(Math.abs(value) / 100) * 100;

            if (value > value2) {
                value2 += 50;
            }

            $(this).parent(".main").css({
                '-webkit-transform': 'translateX(-' + value2 + 'px)'
            }).attr('value', '-' + value2);
        }


        $(this).closest(".page").find(".number").each(function () {
            let txt = $(this).text();
            arr.push(txt);
        });

        let arrayJoin = arr.join('##');

        $(this).closest(".page").find('input[type="hidden"]').val(arrayJoin);

    });

}, 100);


let flag = false;
let disX = disY = 0;

// 第一项年龄
let age = document.querySelector(".age");
age.onmousedown = function (event) {
    flag = true;
    disX = event.clientX - age.offsetLeft;
    return false
};
document.querySelector(".ruler-age").onmousemove = function (event) {
    // console.log(1);
    if (!flag)
        return;
    let iL = event.clientX - disX;
    if (iL < -1000) {
        iL = -1000
    }
    if (iL > 600) {
        iL = 600
    }
    age.style.left = iL + "px";
    if (iL < 0) {
        let i = 30 + Math.round(Math.abs(iL / 50));
        $(".age-num").html(i);
    }
    if (iL > 0) {
        let i = 30 - Math.round(Math.abs(iL / 50));
        $(".age-num").html(i);
    }

    return false
};
document.onmouseup = function () {
    flag = false;
};

// 第二项身高
let height = document.querySelector(".height");
height.onmousedown = function (event) {
    flag = true;
    disX = event.clientX - height.offsetLeft;
    return false
};
document.querySelector(".ruler-height").onmousemove = function (event) {
    if (!flag)
        return;
    let iL = event.clientX - disX;

    if (iL < -520) {
        iL = -520
    }
    if (iL > 198) {
        iL = 198
    }
    height.style.left = iL + "px";
    if (iL < 0) {
        let i = 150 + Math.round(Math.abs(iL / 10.4));
        $(".height-num").html(i);
    }
    if (iL > 0) {
        let i = 150 - Math.round(Math.abs(iL / 10.4));
        $(".height-num").html(i);
    }

    return false
};
document.onmouseup = function () {
    flag = false;
};
// 第三项体重
let weight = document.querySelector(".weight");
weight.onmousedown = function (event) {
    flag = true;
    disX = event.clientX - weight.offsetLeft;
    return false
};
document.querySelector(".ruler-weight").onmousemove = function (event) {
    if (!flag)
        return;
    let iL = event.clientX - disX;
    if (iL < -1042) {
        iL = -1042
    }
    if (iL > 516) {
        iL = 516
    }
    weight.style.left = iL + "px";
    if (iL < 0) {
        let i = (50 + (Math.abs(iL / 20.83))).toFixed(1);
        $(".width-num").html(i);
    }
    if (iL > 0) {
        let i = (50 - (Math.abs(iL / 20.83))).toFixed(1);
        $(".width-num").html(i);
    }

    return false
};
document.onmouseup = function () {
    flag = false;
};

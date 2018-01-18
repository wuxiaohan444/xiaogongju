$(function () {
    let num = 0;
    setInterval(function () {
        num += 10;
        $(".left").css({
            transform: "rotate(" + num + "deg)"
        });
        $(".right").css({
            transform: "rotate(" + (-num) + "deg)"
        })
    }, 100);

    // 降价促销
    for (let i = 0; i < $(".project li").length; i++) {
        $(".project li").eq(i).click(function () {
            if (i === 0) {
                $(".drop .price .min").html(7000);
                $(".drop .price .max").html(17000);
            }
            if (i === 1) {
                $(".drop .price .min").html(7000);
                $(".drop .price .max").html(17000);
            }
            if (i === 2) {
                $(".drop .price .min").html(8000);
                $(".drop .price .max").html(18500);
            }
            if (i === 3) {
                $(".drop .price .min").html(8000);
                $(".drop .price .max").html(17000);
            }
            if (i === 4) {
                $(".drop .price .min").html(2000);
                $(".drop .price .max").html(10000);
            }
            if (i === 5) {
                $(".drop .price .min").html(500);
                $(".drop .price .max").html(2000);
            }
        })
    }


    let min = 0;
    let max = 0;
    for (let i = 0; i < $(".content .photo").length; i++) {
        $(".content .click").eq(i).click(function () {
            $(".content .photo").eq(i).toggleClass("icon");
            if ($(".content .photo").eq(i).hasClass("icon")) {
                if ($(".content .photo2").hasClass("icon")) {
                    min = +$(".click .price .min").eq(i).html() + min;
                    max = +$(".click .price .max").eq(i).html() + max;
                    $(".top .min").html(min + (+$(".drop .price .min").html()));
                    $(".top .max").html(max + (+$(".drop .price .max").html()));
                    console.log(1);
                } else {
                    min = +$(".click .price .min").eq(i).html() + min;
                    max = +$(".click .price .max").eq(i).html() + max;
                    $(".top .min").html(min);
                    $(".top .max").html(max);
                }
            }
            else {
                if ($(".content .photo2").hasClass("icon")) {
                    min = min - $(".click .price .min").eq(i).html();
                    max = max - $(".click .price .max").eq(i).html();
                    $(".top .min").html(min + (+$(".drop .price .min").html()));
                    $(".top .max").html(max + (+$(".drop .price .max").html()));
                    console.log(1);
                } else {
                    min = min - $(".click .price .min").eq(i).html();
                    max = max - $(".click .price .max").eq(i).html();
                    $(".top .min").html(min);
                    $(".top .max").html(max);
                }
            }
        });

        let count = 0;
        $(".content .drop").click(function () {
            count++;
            if (count % 2 === 0) {
                $(".content .photo2").removeClass("icon");
                $(".top .min").html(min);
                $(".top .max").html(max);
            } else {
                $(".content .photo2").addClass("icon");
                $(".top .min").html(+$(".drop .price .min").html() + min);
                $(".top .max").html(+$(".drop .price .max").html() + max);
            }
        });
        for (let i = 0; i < $(".project li").length; i++) {
            $(".project li").eq(i).click(function () {
                if (count % 2 === 0) {
                    console.log(1);
                } else {
                    $(".top .min").html(min + (+$(".drop .price .min").html()));
                    $(".top .max").html(max + (+$(".drop .price .max").html()));
                }
            })
        }
    }

    // 点击tab栏切换
    for (let i = 0; i < $(".tab ul li").length; i++) {
        $(".tab ul li").eq(i).click(function () {
            $(".resultCon .column").eq(i).show().siblings().hide();
            $(".tab li").eq(i).children().addClass("now").parent().siblings().children().removeClass("now");
            if (i > 0) {
                $(".resultBox").hide();
            }
            if (i === 0) {
                let top = $(".resultBox").outerHeight();
                $(".resultBox").show();
                setTimeout(function () {
                    let count = 0;
                    let timer = setInterval(function () {
                        count++;
                        $(window).scrollTop(top * (count / 50));
                        if (count === 50) {
                            clearInterval(timer);
                        }
                    }, 16)
                }, 100)

            }
            // 判断屏幕滚动高度
            if(i === 2){
                let top = $(".cost .top").outerHeight(true);
                let win=$(window);
                let sc=$(document);
                win.scroll(function () {
                    if(sc.scrollTop() >= top) {
                        $(".cost .fixed").show().css({
                            top: 0
                        })
                    } else {
                        $(".cost .fixed").hide().css({
                            top:"80rem/@num"
                        })
                    }
                    $(".fixed .min").html($(".top .min").html());
                    $(".fixed .max").html($(".top .max").html());
                })
            }
        })
    }

    //问号弹出
    for (let i = 0; i < $(".help").length; i++) {
        $(".help").eq(i).click(function () {
            $(".question").eq(i).toggleClass("hide");
            console.log(1);
        })
    }

// 弹出选择项
    for (let i = 0; i < $(".fa .select").length; i++) {
        $(".fa .select").eq(i).click(function () {
            $(".mod").eq(i).show();
            $(".no").eq(i).click(function () {
                $(".mod").eq(i).hide();
            })
            for (let j = 0; j < $(".mod").eq(i).find("li").length; j++) {
                $(".mod").eq(i).find("li").eq(j).click(function () {
                    let text = $(this).html();
                    $(".fa .select .text").eq(i).html(text);
                    $(this).addClass("now").siblings().removeClass("now");
                    $(".mod").eq(i).hide();
                })

            }

        })
    }


    for (let i = 0; i < $(".procedureBox").length; i++) {
        $(".procedureBox .ic").eq(i).click(function () {
            $(this).toggleClass("now");
            $(".procedureBox").eq(i).find(".oneLine,.complete").toggle();
        })
    }
})
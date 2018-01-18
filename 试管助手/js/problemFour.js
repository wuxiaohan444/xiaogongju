$(function () {
    $(".one .select").click(function () {
        $(".one .hide").show();
        let one = template("tpl", {data: data});
        let two = template("tpl2", {data: data[0]});
        $(".right").html(two);
        $(".left").html(one);
        for (let i = 0; i < $(".left li").length; i++) {
            $(".left li").eq(i).click(function () {
                $(".one .select .province").html($(this).html());
                $(this).addClass("bg").siblings().removeClass("bg");
                // 渲染二级
                let two = template("tpl2", {data: data[i]});
                $(".right").html(two);
                for (let i = 0; i < $(".right li").length; i++) {
                    $(".right li").eq(i).click(function () {
                        $(".one .select .town").html($(this).html());
                        $(this).addClass("now").siblings().removeClass("now");
                        $(".one .hide").hide();
                        $(".one .select").addClass("size");
                        if ($(".item ul .now").length ===4) {
                            $(".next").addClass("now");
                        }
                    })
                }
            });
        }
    })

    $(".two .select").click(function () {
        $(".two .hide").show();
        for (let i = 0; i < $(".two ul li").length; i++) {
            $(".two ul li").eq(i).click(function () {
                $(".two .select .text").html($(this).html());
                $(this).addClass("now").siblings().removeClass("now");
                $(".two .hide").hide();
                $(".two .select").addClass("size");
                if ($(".item ul .now").length ===4) {
                    $(".next").addClass("now");
                }
            })
        }
        $(".two .no").click(function () {
            $(".two .hide").hide();
        });
    })

    $(".three .select").click(function () {
        $(".three .hide").show();
        for (let i = 0; i < $(".three ul li").length; i++) {
            $(".three ul li").eq(i).click(function () {
                $(".three .select .text").html($(this).html());
                $(this).addClass("now").siblings().removeClass("now");
                $(".three .hide").hide();
                $(".three .select").addClass("size");
                if ($(".item ul .now").length ===4) {
                    $(".next").addClass("now");
                }
            })
        }
        $(".three .no").click(function () {
            $(".three .hide").hide();
        });
    })
    $(".four .select").click(function () {
        $(".four .hide").show();
        for (let i = 0; i < $(".four ul li").length; i++) {
            $(".four ul li").eq(i).click(function () {
                $(".four .select .text").html($(this).html());
                $(this).addClass("now").siblings().removeClass("now");
                $(".four .hide").hide();
                $(".four .select").addClass("size");
                if ($(".item ul .now").length ===4) {
                    $(".next").addClass("now");
                }
            })
        }
        $(".four .no").click(function () {
            $(".four .hide").hide();
        });
    })

})
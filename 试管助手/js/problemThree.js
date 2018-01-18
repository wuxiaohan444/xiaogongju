$(function () {
    $(".one .select").click(function () {
        $(".one .hide").show();
        for (let i = 0; i < $(".one ul li").length; i++) {
            $(".one ul li").eq(i).click(function () {
                $(".one .select .text").html($(this).html());
                $(this).addClass("now").siblings().removeClass("now");
                $(".one .hide").hide();
                $(".one .select").addClass("size");
                if ($(".item ul .now").length ===2) {
                    $(".next").addClass("now");
                }
            })
        }
        $(".one .no").click(function () {
            $(".one .hide").hide();
        });
    })


    $(".two .select").click(function () {
        $(".two .hide").show();
        for (let i = 0; i < $(".two ul li").length; i++) {
            $(".two ul li").eq(i).click(function () {
                $(".two .select .text").html($(this).html());
                $(this).addClass("now").siblings().removeClass("now");
                $(".two .hide").hide();
                $(".two .select").addClass("size");
                if ($(".item ul .now").length ===2) {
                    $(".next").addClass("now");
                }
            })
        }
        $(".two .no").click(function () {
            $(".two .hide").hide();
        });
    })

})
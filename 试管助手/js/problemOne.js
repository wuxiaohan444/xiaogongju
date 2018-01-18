$(function () {
    let num;
    for (let i = 0; i < $(".item span").length; i++) {
        $(".item span").eq(i).click(function () {
            $(".item span").eq(i).toggleClass("now");
            if(i == 0){
                $(this).siblings().removeClass("now");
                $(this).parents(".problem").find(".itemTwo").children("span").removeClass("now");
            }
            if (i > 0) {
                $(".item span").eq(0).removeClass("now");
            }
            if ($(".item .now").length > 0){
                $(".next").addClass("now");
            }else{
                $(".next").removeClass("now");
            }

                if ($(".item .now").length > 6) {
                    $(".item span").eq(i).toggleClass("now");
                    $(".model").show();
                }
        })
    }

    $(".item span").eq(8).click(function () {
       $(".suggest").toggleClass("show");
    });

    $(".item span").eq(4).click(function () {
        $(".input").toggleClass("show");
    })

    $(".model button").click(function () {
        $(".model").hide();
    })

})

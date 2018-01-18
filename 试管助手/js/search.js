$(function () {
    let num = 1;
    let bg = 0;
   setInterval(function () {
       num+=5;
       bg+=5;
       $(".animate").css({
            transform : "rotate("+num+"deg)"
       })
   },100)

    setTimeout(function () {
        $(window).attr('location','result.html');
    },4000)
})
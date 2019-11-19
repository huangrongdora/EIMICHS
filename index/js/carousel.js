var arr = ["./img/index_slider.png",
    "./img/index_slider.png",
    "./img/index_slider.png"
];
var i = 0;

$(".carousel button").click(function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (!$(".carousel img").is(":animated")) {
        if ($(target).html() == "&gt;") {
            i++;
            if (i == arr.length) {
                i = 0
            }
            //创建right新的图片，并压入页面
            var $rimg = $(`<img src='${arr[i]}' class="rimg" />`);
            $(".carosel").append($rimg);

            $($(".carousel img")[0]).animate({
                "left": "-100%"
            }, 1000, function () {
                $($(".carousel img")[0]).remove();
            })
            $($(".carousel img")[1]).animate({
                "left": 0
            }, 1000)

            $($(".carousel li")[i]).addClass("active");
            $($(".carousel li")[i]).siblings().removeClass()
        } else {
            i--;
            if (i == -1) {
                i = arr.length - 1
            }
            //创建left新的图片，并压入页面
            var $limg = $(`<img src='${arr[i]}' class="limg" />`);
            $(".carosel").append($limg);
            $($(".carousel img")[0]).animate({
                "left": "100%"
            }, 1000, () => {
                $($(".carousel img")[0]).remove();
            });
            $($(".carousel img")[1]).animate({
                "left": 0
            }, 1000)
            $($("li")[i]).addClass("active");
            $($("li")[i]).siblings().removeClass()
        }
    }
})


$("li").click(function (e) {
    if (!$(".carousel img").is(":animated")) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var oldi = $(".active").index();
        i = $(target).index();
        //console.log(i, oldi)
        $(target).addClass("active")
        $(target).siblings().removeClass()
        if (i < oldi) {
            var $limg = $(`<img src='${arr[i]}' class="limg" />`);
            $(".carosel").append($limg);
            $($(".carousel img")[0]).animate({
                "left": "100%"
            }, 1000, () => {
                $($(".carousel img")[0]).remove();
            });
            $($(".carousel img")[1]).animate({
                "left": 0
            }, 1000)
            $($("li")[i]).addClass("active");
            $($("li")[i]).siblings().removeClass()
        } else {
            var $rimg = $(`<img src='${arr[i]}' class="rimg" />`);
            $(".carosel").append($rimg);

            $($(".carousel img")[0]).animate({
                "left": "-100%"
            }, 1000, function () {
                $($(".carousel img")[0]).remove();
            })
            $($(".carousel img")[1]).animate({
                "left": 0
            }, 1000)

            $($("li")[i]).addClass("active");
            $($("li")[i]).siblings().removeClass()
        }
    }
})

$(".carosel").mouseover(() => {
    clearInterval(time);
})
// // $(".carosel").mouseout(() => {
//     setInterval(timer)
// })
timer()

function timer() {
    time = setInterval(function () {
        i++;
        if (i == 3) {
            i = 0
        }
        //创建right新的图片，并压入页面
        var $rimg = $(`<img src='${arr[i]}' class="rimg" />`);
        $(".carosel").append($rimg);

        $($(".carousel img")[0]).animate({
            "left": "-100%"
        }, 1000, function () {
            $($("img")[0]).remove();
        })
        $($(".carousel img")[1]).animate({
            "left": 0
        }, 1000)

        $($("li")[i]).addClass("active");
        $($("li")[i]).siblings().removeClass()
    }, 2000)
}
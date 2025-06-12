$(document).ready(function(){
    let box = $(".box"),
        original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        temp = original,
        x = [],
        sec = 0,
        date1, date2,
        moves = 0,
        mm = 0,
        ss = 0,
        upIMG,
        images = ["https://preview.ibb.co/kMdsfm/kfp.png", "https://preview.ibb.co/kWOEt6/minion.png", "https://preview.ibb.co/e0Rv0m/ab.jpg"];
    img = 0;

    $('.me').css({"background-image": 'url(' + images[0] + ')'});

    $(".start").click(function () {
        $(".start").addClass('prevent_click');
        $(".start").delay(100).slideUp(500);
        $(".full").hide();
        $(".pre_img").addClass("prevent_click");

        date1 = new Date();
        Start();
        return 0;
    });

    function Start(){
        randomTitle();
        changeBG(img);
        let count = 0,
            a, b, A, B;
        $(".me").click(function(){
            count++;
            if(count === 1){
                a = $(this).attr("data-bid");
                $('.me_' + a).css({"opacity": ".65"});
            } else {
                b = $(this).attr("data-bid");
                $('.me_' + a).css({"opacity": "1"});
                if (a === b) {}
                else {
                    $(".me_" + a)
                        .addClass("me_" + b)
                        .removeClass("me_" + a);
                    $(this)
                        .addClass("me_" + a)
                        .removeClass("me_" + b);
                    $(".me_" + a).attr("data-bid", a);
                    $(".me_" + b).attr("data-bid", b);
                }
                moves++;
                swapping(a,b);
                checkCorrect(a);
                checkCorrect(b);
                a = b = count = A = B = 0;
            }
            if (arraysEqual(x)) {
                data2 = new Date();
                timeDifference();
                showScore();
                return 0;
            }
        });
        return 0;
    }

    function randomTitle(){
        let i;
        for (i = original.length - 1; i >= 0; i--) {
            const flag = getRandom(0, i);
            x[i] = temp[flag];
            temp[flag] = temp[i];
            temp[i] = x[i];
        }
        for (i = 0; i < original.length; i++) {
            box.append(
                '<div class = "me me_' + x[i] + ' title" data-bid="' + x[i] + '"></div>'
            );
            if ((i + 1) % 6 === 0) box.append("<br>")
        }
        i = 17;
        return 0;
    }

    function arraysEqual(arr) {
        let i;
        for (i = original.length - 1; i >= 0; i--) {
            if (arr[i] !== i) return false;
        }
        return true;
    }

    function checkCorrect(N1) {
        const pos = x.indexOf(parseInt(N1, 10));
        if (pos !== N1) {
            return;
        }
        $(".me_" + N1).addClass("correct, prevent_click ");
        return;
    }

    function swapping(N1, N2) {
        const first = x.indexOf(parseInt(N1, 10)),
            second = x.indexOf(parseInt(N2, 10));
        x[first] = parseInt(N2, 10);
        x[second] = parseInt(N1, 10);
        return 0;
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function timeDifference() {
        let msec = date2 - date1;
        const hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        return 0;
    }

    function changeBG(img) {
        if (img !== 3){
            $('.me').css({
                "background-image": "url(" + images[img] + ")"
            });

        } else {
            $('.me').css({"background-image": "url(" + upIMG + ")"});
        }
    }

    $('.pre_img li').hover(function () {
        img = $(this).attr("data-bid");
        changeBG(img);
    });

    function showScore() {
        $('#min').html(mm);
        $('#sec').html(ss);
        $('.moves').html(moves);
        setTimeout(function () {
            $('.cover').slideDown(350);
        }, 1050);
        return 0;
    }

    $('.Ok').click(function () {
        $('.cover').slideUp(350);
    });

    $('.reset').click(function () {
        $(".title").remove();
        $("br").remove();
        $(".full").show();
        $(".start").show();
        $("pre_img, .start").removeClass("prevent_click");

        temp = original;
        x = [];
        moves = ss = mm = 0;
        return 0;
    });

    $("#upfile1").click(function () {
        $("#file1").trigger('click');
    });

    $("#file1").change(function () {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = e.target.result;
            img = 3;
            changeBG(3);
        }
        reader.readAsDataURL(input.files[0]);
    }
});
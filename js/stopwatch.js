let time = 0;
let isStop = false;
$(document).ready(function(){
    $(".time").text('00:00:00');
});

$(function(){
    $(".start").click(function(){
        if(!isStop){
            isStop = true;
            $(".start").addClass("clicked");
            $(".stop").removeClass("clicked");
            count = setInterval(function(){
                time++;
                let second = time % 60;
                let minute = Math.floor(time / 60);
                let hour = Math.floor(minute / 60);
                second = String(second).padStart(2, "0");
                minute = String(minute).padStart(2, "0");
                hour = String(hour).padStart(2, "0");
                $(".time").text(`${hour}:${minute}:${second}`);
            }, 1000);
        }
    });

    $(".stop").click(function(){
        $(".stop").addClass("clicked");
        $(".start").removeClass("clicked");
        if(time !== 0){
            clearInterval(count);
        }
        isStop = false;
    });

    $(".clear").on("click", function(){
        $(".clear").addClass("clicked");
        $(".stop").removeClass("clicked");
        $(".start").removeClass("clicked");
        clearInterval(count);
        $(".time").text('00:00:00');
        isStop = false;
        time = 0;
        let duration = 0;
        d = setInterval(function(){
            duration++;
            if(duration == 2){
                $(".clear").removeClass("clicked");
                clearInterval(d);
            }
        }, 1000);
    });
})
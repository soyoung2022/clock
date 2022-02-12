$(document).ready(function(){
    $(".left-time").text("00:00:00");
});

$(function(){
    let hour, minute, second, tot = 0;
    $(".input-form").on("submit", function(event){
        event.preventDefault();
        hour = $("#inputHour").val();
        minute = $("#inputMinute").val();
        second = $("#inputSecond").val();
    });
    // $(".set-hour").on("submit", function(event){
    //     event.preventDefault();
    //     hour = $("#inputHour").val();
    // });

    // $(".set-minute").on("submit", function(event){
    //     event.preventDefault();
    //     minute = $("#inputMinute").val();
    // });

    // $(".set-second").on("submit", function(event){
    //     event.preventDefault();
    //     second = $("#inputSecond").val();
    // });


    $(".start").on("click", function(){
        $("#inputHour").val('');
        $("#inputMinute").val('');
        $("#inputSecond").val('');
        $(".start").addClass("clicked");
        $(".stop").removeClass("clicked");
        $(".clear").removeClass("clicked");
        tot = (parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second));
        let hourStr = String(hour).padStart(2, "0");
        let minuteStr = String(minute).padStart(2, "0");
        let secondStr = String(second).padStart(2, "0");
        $(".left-time").text(`${hourStr}:${minuteStr}:${secondStr}`);
        count = setInterval(function(){
            tot--;
            if(tot === 0){
                clearInterval(count);
            }
            hour = Math.floor(tot / 3600);
            minute = Math.floor((tot-hour*3600) / 60);
            second = (tot-hour*3600) % 60;
            hourStr = String(hour).padStart(2, "0");
            minuteStr = String(minute).padStart(2, "0");
            secondStr = String(second).padStart(2, "0");
            $(".left-time").text(`${hourStr}:${minuteStr}:${secondStr}`);
        }, 1000);
    });

    $(".stop").on("click", function(){
        $(".start").removeClass("clicked");
        $(".stop").addClass("clicked");
        $(".clear").removeClass("clicked");
        if(tot !== 0){
            clearInterval(count);
        }
    });

    $(".clear").on("click", function(){
        $(".start").removeClass("clicked");
        $(".stop").removeClass("clicked");
        $(".clear").addClass("clicked");
        clearInterval(count);
        tot = 0;
        hour = 0;
        minute = 0;
        second = 0;
        $(".left-time").text("00:00:00");
    });
});
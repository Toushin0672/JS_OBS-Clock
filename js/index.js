//LIVE文字
var text_live = document.getElementsByClassName('Text_LIVE');
//現在のLIVE文字の見た目
var now_view_text = "normal";
//現在のLIVE文字の回転状態
var nowTextRoll = 'off';

setInterval("showClock()", 1000);

//時計の表示が1桁の場合2桁し、揃える。
function set2flg(num){
    var ret;
    if(num < 10){
        ret = "0" + num;
    }else{
        ret = num;
    }
    return ret;
}

//時計
function showClock(){
    var nowTime = new Date();

    //土曜日と日曜日のみ時計色を赤に変更
    var dayOfweek = nowTime.getDay();
    if(dayOfweek == '6' || dayOfweek == '0'){
        var clock = document.getElementById("Clock").style;
        clock.cssText = 
            'color: red;\
            text-shadow: 0 0 10px red';
    }

    var nowHour = set2flg(nowTime.getHours());
    var nowMin  = set2flg(nowTime.getMinutes());
    var nowSec  = set2flg(nowTime.getSeconds());
    var view_text = nowHour + ":" + nowMin + ":" + nowSec;
    
    document.getElementById('Clock').innerHTML = view_text;
}

//LIVE文字変更
function Change_LIVE(value){
    for(var i=0; i < text_live.length; i++){
        switch(value){
            case 'white':
                if(nowTextRoll == 'off'){
                    text_live[i].style.cssText = 'color:white;';
                }else{
                    text_live[i].style.cssText =
                        'color:white;\
                        animation: rotate 5s linear infinite;';
                }
                now_view_text = 'normal';
                break;
            case 'gaming':
                if(nowTextRoll == 'off'){
                    text_live[i].style.cssText = 'animation:rainbow 10s infinite;';
                }else{
                    text_live[i].style.cssText =
                        'animation:rainbow 10s infinite, rotate 5s linear infinite;';
                }                
                now_view_text = 'gaming';
                break;
        }   
    }
}

//LIVE文字の回転
function TextRoll(value){
    for(var i=0; i < text_live.length; i++){
        switch(value){
            case 'ON':
                if(now_view_text != 'gaming'){
                    text_live[i].style.cssText = 'animation: rotate 5s linear infinite;';
                }else{
                    text_live[i].style.cssText = 'animation: rotate 5s linear infinite, rainbow 10s infinite;';
                }
                nowTextRoll = 'on';
                break;
            case 'OFF':
                if(now_view_text != 'gaming'){
                    text_live[i].style.cssText = '';
                }else{
                    text_live[i].style.cssText = 'animation: rainbow 10s infinite;';
                }
                nowTextRoll = 'off';
                break;
        }
    }
}
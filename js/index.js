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
            'font-family: "Share Tech Mono", monospace;\
            font-size: 36px;\
            color: red;\
            text-shadow: 0 0 10px red,0 0 15px red;\
            line-height: 1.2;\
            text-align: center;';
    }

    var nowHour = set2flg(nowTime.getHours());
    var nowMin  = set2flg(nowTime.getMinutes());
    var nowSec  = set2flg(nowTime.getSeconds());
    var view_text = nowHour + ":" + nowMin + ":" + nowSec;
    
    document.getElementById('Clock').innerHTML = view_text;
}

//LIVE文字変更
function Change_LIVE(value){
    var text_live = document.getElementById('Text_LIVE');
    switch(value){
        case 'white':
            text_live.style.cssText = 
                'color:white; font-size:36px; font-weight: 200; padding-right: 20px;  display:inline-block; width: fit-content; animation: rotate 5s linear infinite;';
            break;
        case 'gaming':
            text_live.style.cssText = 'font-size: 36px; padding-right: 20px; animation:rainbow 10s infinite,rotate 5s linear infinite;';
            break;
    }
}

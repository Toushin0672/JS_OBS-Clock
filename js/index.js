var id_base = 'RealtimeClockArea-';
var id_type = ["gaming", "digital"];

//時計の表示が9以下の時0を足して2桁にする
function set2fig(num) {
    var ret;
    if(num < 10){
        ret = "0" + num;
    }else{
        ret = num;
    }
    return ret;
}

//時計を表示
function showClock() {
    var nowTime = new Date();
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var msg2 = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById('RealtimeClockArea-digital').innerHTML = msg2;
 }

//「Live」文字の見た目変更
function radio_func3(value){
    var text_live = document.getElementById('text-color');
    switch(value){
        case 'white':
            text_live.style.cssText = 'color:white; font-size:36px; font-weight: 200;';
        break;
        case 'gaming':
            text_live.style.cssText = 'font-size: 36px; animation:rainbow 10s infinite;';
        break;
    }
}

setInterval('showClock()',1000);
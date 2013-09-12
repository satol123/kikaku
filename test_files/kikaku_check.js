// Returns the number of bytes in a string
function strLenB(str)
{
    var length = str.length
    var result = 0

    var a;
    for (var i = 0; i < length; i++) {
        a = str.charCodeAt(i);
        if (0 <= a && a < 256)
            result += 1
        else
            result += 2
    }

    return result
}


// 入力は半角英数かどうかチェックする関数(2010/01/19Yamazaki ドットの許可)
function isAlphabet(obj){
    if (obj.length == 0) return false
    for (var i=0; i< obj.length; i++){
    if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.".indexOf(obj.charAt(i))== -1){
        return false;
    }
    }
    return true;
}


// 文字が半角数値であるかチェック
function isNumber(obj) {
    if (obj.length == 0) return false
    for (var i=0; i< obj.length; i++){
    if ("0123456789()-".indexOf(obj.charAt(i))== -1){
        return false;
    }
    }
    return true;
}

// 日付項目入力チェエク
function checkDate(data) {

    var str = data;
    if(str == "")   return 0;

    if(( str.substring(0,1) < "0" || str.substring(0,1) > "9") ||
       ( str.substring(1,2) < "0" || str.substring(1,2) > "9") ||
       ( str.substring(2,3) < "0" || str.substring(2,3) > "9") ||
       ( str.substring(3,4) < "0" || str.substring(3,4) > "9") ||
       ( str.substring(4,5) != "/" ) ||
       ( str.substring(5,6) < "0" || str.substring(5,6) > "1") ||
       ( str.substring(6,7) < "0" || str.substring(6,7) > "9") ||
       ( str.substring(7,8) != "/" ) ||
       ( str.substring(8,9) < "0" || str.substring(8,9) > "3") ||
       ( str.substring(9,10) < "0" || str.substring(9,10) > "9"))
    {
        return 1;       //error
    }
    if( str.substring(0,10) < "2000/01/01" || str.substring(0,10) > "2100/12/31" )
    {
        return 1;       //error
    }

    // 正規表現による書式チェック
    if(!str.match(/^\d{4}\/\d{2}\/\d{2}$/)){
        return false;
    }
    var vYear = str.substr(0, 4) - 0;
    var vMonth = str.substr(5, 2) - 1; // Javascriptは、0-11で表現
    var vDay = str.substr(8, 2) - 0;
    // 月,日の妥当性チェック
    if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){
        var vDt = new Date(vYear, vMonth, vDay);
        if(isNaN(vDt)){
            return 1;
        }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){
            return 0;
        }else{
            return 1;
        }
    }else{
        return 1;
    }

    return 0;
}

// 文字列中のシングルクオート、アンパサンド(半角)、カンマを検出する
// 戻り値：両方無=True
//             両方またはどちらか有=False
function checkErrMoji(strValue) {
   if( strValue.match( /[\'&,<>\"]+/ ) ) {
      return false;
   }
   return true;

}

// 半角数字とハイフンのチェック
function numberCheck2(data) {
   var str = data;
   if( str.match( /[^0-9-]+/ ) ) {
      return 1;
   }
   return 0;
}

/* 半角英数字チェック、「.-」の許可 */
function hankakuCheck(data) {
   var str = data;
   if( str.match( /[^0-9A-Za-z\s.-]+/ ) )
   {
      return 1;
   }
   return 0;
}

/* 指定文字列のサイズを返す */
function checkStrLen(chkstr){
    var count = 0;
    for (var i=0;i<chkstr.length;i++){
       //'を含む場合全角変換がある為、考慮が必要
       if( chkstr.charAt(i).match("'") ) {
            count+=2;
        } else {
            //既存の文字列制御
            (chkstr.charAt(i).match(/[ｱ-ﾝｦｧｨｩｪｫｬｭｮｯ]/) || escape(chkstr.charAt(i)).length< 4)?count++:count+=2;
        }
    }
    return count;
}

/* 指定日付文字列の値を保存する */
var mstrSaveFieldValue;
function SaveFieldValue(pobjObject) {
 mstrSaveFieldValue = pobjObject.value;
}
/* 日付項目入力チェエク、失敗の場合、前回の値を設定する */
function CheckInputText(obj)
{
   var nowyear = new Date;
   var str = EmpTrim(obj.value);
   obj.value = str;
   if (str == '') return;
   var y, m, d;
   var new_y, new_m, new_d;
   if (str.match(/^(([0-9]{4})\/|)([0-9]{1,2})\/([0-9]{1,2})$/)){
       y = RegExp.$2;
       m = RegExp.$3;
       d = RegExp.$4;
       if (y == ''){
           y = nowyear.getFullYear();
       }
       if (IsDate(y, RegExp.$3, RegExp.$4)){
           new_y = ('0000' + y); new_y = new_y.substring(new_y.length-4);
           new_m = ('00' + m);   new_m = new_m.substring(new_m.length-2);
           new_d = ('00' + d);   new_d = new_d.substring(new_d.length-2);
           obj.value = new_y + '/' + new_m + '/' + new_d;
           return;
       }
       else
       {
           obj.value = mstrSaveFieldValue;
       }
   }
   else
   {
       obj.value = mstrSaveFieldValue;
   }
}
function EmpTrim(pstrVal) {
     pstrVal = pstrVal.replace(/^[ 　]+/, '');
     pstrVal = pstrVal.replace(/[ 　]+$/, '');
     return(pstrVal);
}
function IsDate(y,m,d){
    var wblnTemp = false;
    var mday = new Array (31,28,31,30,31,30,31,31,30,31,30,31);
    if ((y % 100 == 0) && (y % 400 != 0)) {
        wblnTemp = false;
    } else if (y % 4 == 0){
        wblnTemp = true;
    }
    if (wblnTemp) mday[1] = 29;
    if ((y < 1) || (y > 9999)) return false;
    if ((m < 1) || (m > 12)) return false;
    if ((d < 1) || (d > mday[m-1])) return false;
    return true;
}

(function($) {
    $.fn.registUploadFile = function() {
        return this.each(function() {

            var self = this;

            var filename = $('<input class="uploadfile">')
                             .addClass($(self).attr("class"))
                             .css({
                                 "display": "inline",
                                 "width": "200px"
                             });
            var wrapper = $("<div>")
                            .css({
                                "display": "inline",
                                "position": "absolute",
                                "overflow": "hidden",
                                "cursor": "pointer",
                                "width": "54px",
                                "height":"22px"

                            });
            if ($.browser.mozilla) {
                $(wrapper).css("margin-left", "12px");
            } else {
                $(wrapper).css("margin-left", "11");
            }
            $(self).wrap($(wrapper));

            $(self).css({
                         "display": "inline",
                         "width": "200px",
                         "height":"22px",
                         "position": "relative",
                         "cursor": "pointer",
                         "hidefocus":"true",
                         "opacity": "0"
                     });

            if ($.browser.mozilla) {
                if (/Win/.test(navigator.platform)) {
                    $(self).css("margin-left", "-142px");
                } else {
                    $(self).css("margin-left", "-168px");
                };
            } else {
                $(self).css("margin-left", "-148px");

            };
        });
    };
})(jQuery);
$(function() {
    $("input.uploadfile").registUploadFile();
});

/***************************************************************************
 *  処理中画面用 :　submit後、メッセージの表示
 *  name   :  カラム名
 **********************************begin************************************/
var iIntervalId;
function refreshWin(){
    var obj = document.getElementById("baseTable");
    var obj2 = document.getElementById("waitTable");
    if (obj == null || obj == undefined
        || obj2 == null || obj2 == undefined) {
    } else {
        if (window.document.readyState == null
            || window.document.readyState == 'complete') {
            clearInterval(iIntervalId);
            obj.style.display="block";
            obj2.style.display="none";
            iIntervalId = null;
        } else {
            obj.style.display="none";
            obj2.style.display="block";
        }
    }
}

function setWaitDspWin(){
    var obj = document.getElementById("baseTable");
    var obj2 = document.getElementById("waitTable");
    if (obj == null || obj == undefined
        || obj2 == null || obj2 == undefined) {
        return;
    }
    document.getElementById("baseTable").style.display="block";
    document.getElementById("waitTable").style.display="none";
    iIntervalId= setInterval(refreshWin, 10);
}
/**********************************End************************************* */
function getRandomInt() {
    var randomInt = Math.floor(Math.random()*100000+1);
    return randomInt;
}
function setSelectValue(code, name){
    var w = masterWindow();
    var panelName = document.getElementById("popupCompnentName").value;
    var codePanelName = panelName + 'PopupReturnCode';
    var namePanelName = panelName + 'PopupReturnName';
    var linkPanelName = panelName + 'PageSubmit';
    w.document.getElementById(codePanelName).value = code;
    w.document.getElementById(namePanelName).value = name;
    w.document.getElementById(linkPanelName).click();
    window.close();
}


var weekArray = new Array("(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)");

function getWeekDayName(strdate){
    var dayArray = new Array();
    var imWeedDayName = "";
    var imDate;
    var imWeekday;

    //日付値チェック
    var isdate = strdate.match(/((^((1[8-9]\d{2})|([2-9]\d{3}))(\/)(10|12|0?[13578])(\/)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(\/)(11|0?[469])(\/)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(\/)(0?2)(\/)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(\/)(0?2)(\/)(29)$)|(^([3579][26]00)(\/)(0?2)(\/)(29)$)|(^([1][89][0][48])(\/)(0?2)(\/)(29)$)|(^([2-9][0-9][0][48])(\/)(0?2)(\/)(29)$)|(^([1][89][2468][048])(\/)(0?2)(\/)(29)$)|(^([2-9][0-9][2468][048])(\/)(0?2)(\/)(29)$)|(^([1][89][13579][26])(\/)(0?2)(\/)(29)$)|(^([2-9][0-9][13579][26])(\/)(0?2)(\/)(29)$))/);

    if(isdate == null)
    {
        return imWeedDayName;
    }
    dayArray = 	strdate.split("/");
    //日付作成
    imDate = new Date(dayArray[0],dayArray[1]-1,dayArray[2]);
    //曜日取得
    imWeekday = imDate.getDay();
    //曜日名前を戻る
    imWeedDayName = weekArray[imWeekday];
    return imWeedDayName;
}

(function($) {

    // カスタムチェック登録
    $.fn.registWeekDayName = function() {
        $(this).each(function(){
            $(this).displayWeekDayName();
            $(this).bind("blur",$.fn.displayWeekDayName);
        });
        return this;
    };

    // カスタムチェック描画更新
    $.fn.displayWeekDayName = function() {
    $strId = $(this).attr("id");
    $weekdayName = getWeekDayName($(this).val());
    $("#"+$strId).parent("span").html($("#"+$strId));
    $("#"+$strId).after($weekdayName);
    $(this).bind("blur",$.fn.displayWeekDayName);

    };

})(jQuery);

$(function() {
    $("input.date").registWeekDayName();
});

/***************************************************************************
 *  一覧選択コンポーネント用
 ***************************************************************************/
function  releaseLinkClick(name, code, viewName, initCd, initNm, changeFlg,submitFlg){

    if (document.getElementById(viewName) != null && document.getElementById(viewName) != undefined) {
        document.getElementById(viewName).innerHTML = document.getElementById(initNm).value;
        document.getElementById(viewName).className = "";
    }

    document.getElementById(name).value = document.getElementById(initNm).value;
    document.getElementById(code).value = document.getElementById(initCd).value;

    if (document.getElementById(changeFlg) != null && document.getElementById(changeFlg) != undefined) {
        document.getElementById(changeFlg).style.display ="none";
    }
    if (document.getElementById(viewName) != null && document.getElementById(viewName) != undefined) {
        if ("未指定" == document.getElementById(viewName).innerHTML) {
            $("#"+viewName).parent("span").attr('class', 'checked-gre');
        } else {
            $("#"+viewName).parent("span").attr('class', 'checked');
        }
    }
    if (submitFlg == 'true'){
        document.forms[0].submit();
    }

    return;
}
/***************************************************************************
 *  一覧選択コンポーネント用
 ***************************************************************************/
function  releaseLinkClickInfoSet(name, code, viewName, initCd, initNm, changeFlg, submitFlg, jsFlg, memberCode){

        if(jsFlg == '1') {
            if (!confirm("会員を切り替えると現在の入力内容は破棄されます。\nよろしいですか？")) {
                return;
            }
        }

    if (document.getElementById(viewName) != null && document.getElementById(viewName) != undefined) {
        document.getElementById(viewName).innerHTML = document.getElementById(initNm).value;
    }

    document.getElementById(name).value = document.getElementById(initNm).value;
    document.getElementById(code).value = document.getElementById(initCd).value;
	document.getElementById(viewName).className = "";

    if (document.getElementById(changeFlg) != null && document.getElementById(changeFlg) != undefined) {
        document.getElementById(changeFlg).style.display ="none";
    }
    if (submitFlg == 'true'){
		if(document.getElementById("form_hf_0")){
			document.getElementById("form_hf_0").value="";
		}
        document.forms[0].submit();
    }

    return;
}
function  releaseAreaLinkClick(name, code, viewName, initCd, initNm, changeFlg, submitFlg, selectGroupCdId){

    if (document.getElementById(viewName) != null && document.getElementById(viewName) != undefined) {
        document.getElementById(viewName).innerHTML = document.getElementById(initNm).value;
        document.getElementById(viewName).className = "";
    }

    document.getElementById(name).value = document.getElementById(initNm).value;
    document.getElementById(code).value = document.getElementById(initCd).value;
    document.getElementById(selectGroupCdId).value = "";

    if (document.getElementById(changeFlg) != null && document.getElementById(changeFlg) != undefined) {
        document.getElementById(changeFlg).style.display ="none";
    }
    if (submitFlg == 'true'){
        document.forms[0].submit();
    }

    return;
}

function  releaseAreaLinkClickInfoSet(name, code, viewName, initCd, initNm, changeFlg, submitFlg, selectGroupCdId){

    if (document.getElementById(viewName) != null && document.getElementById(viewName) != undefined) {
        document.getElementById(viewName).innerHTML = document.getElementById(initNm).value;
        document.getElementById(viewName).className = "";
    }

    document.getElementById(name).value = document.getElementById(initNm).value;
    document.getElementById(code).value = document.getElementById(initCd).value;
    document.getElementById(selectGroupCdId).value = "";
	document.getElementById(viewName).className = "";

    if (document.getElementById(changeFlg) != null && document.getElementById(changeFlg) != undefined) {
        document.getElementById(changeFlg).style.display ="none";
    }
    if (submitFlg == 'true'){
		if(document.getElementById("form_hf_0")){
			document.getElementById("form_hf_0").value="";
		}
        document.forms[0].submit();
    }

    return;
}

$(function() {
	var __urlStr = location.href;
	var __qstrPos = __urlStr.indexOf("?");
	if (__qstrPos != -1) {
	    __urlStr = __urlStr.slice(0, __qstrPos);
	}
	var __isDispA = __urlStr.match(/\/stock\/stock_prod_all\.pagex/) ? true : false;
	if(!__isDispA){
	    $(this).find("input:checked").each(function(){
	        $(this).parent("span").parent(".cstm-check-grp").find(".checked").removeClass("checked");
	    });

	    $(this).find("input:not(:checked)").each(function(){
	        $(this).parent("span").parent(".cstm-check-grp").find(".checked").removeClass("checked");
	    });
	    return this;
    }

});

/** 入力メッセージエリア用配列 */
var errorMessageArray= new Array();

/**
 * メッセージスタックにメッセージを追加する。
 * message メッセージ文言
 */
function addMessage(message){
    var msgCount = errorMessageArray.length;
    errorMessageArray[msgCount] = message;
}

function jsIgnoreString(v){
    var cpy = v;
    cpy = cpy.replace(/[\t%^*\(\)'\[\]<>",]+/g,"");
    return cpy;
}

function jsIgnoreString2(v){
	var cpy = v;
    cpy = cpy.replace(/[\t%^*\(\)'\[\]<>",]+/,"");
	return cpy;
}

function Trim(str){
    str = str.replace(/^[ 　]+/,"");
    str = str.replace(/[ 　]+$/,"");
    return str;
}

/**
 * メッセージエリアを表示し、メッセージを出す。
 *
 */
function outputMessage() {
    if (errorMessageArray.length <= 0) {
        return true;
    }
    document.getElementById("errorArea").style.display="block";
    var message = "";
    for(var i = 0; i < errorMessageArray.length; i++){
        message = message + errorMessageArray[i] + "<BR>";
    }
    document.getElementById("errorMsg").innerHTML=message;
    errorMessageArray= new Array();
    return false;
}

$.fn.placeHolder = function( options ){
var settings = {
    targetAttr: "title"
};
if(options){ jQuery.extend(settings, options); };

this.each(function(){
    var $this = $(this);
    $this.example(function () {
        return $this.attr(settings.targetAttr);
    });
});
};

$.fn.setSimpleBln = function () {
return this.each(function () {
    var $this = $(this),
        $tooltip = $($this.attr('rel')).hide();
    if(!$this.css('display').match(/block/) && $this.css('display') != 'none'){
        $this.css('display','inline-block');
    }
    $this.hover(function () {
        $.calcPosAndShow($(this),$tooltip,0);
        $tooltip.css({
            position: 'absolute',
            zIndex: 10
        });
    },function(){
        $tooltip.hide();
    }).click(function (e) {
        e.preventDefault();
    });
});
};

$.fn.toggleHiddenTable = function( options ){
var settings = {
    hiddenClass: "hidden-table"
};
if(options){ jQuery.extend(settings, options); };

this.change(function(){
    var $this = $(this),
        $hidden = $('.' + settings.hiddenClass);
    if ($this.is(':checked')) {
        $hidden.show();
    } else {
        $hidden.hide();
    }
});
};

function setRollovers(opts) {

if (!opts) opts = {};
opts.rolloverClass               = opts.rolloverClass              || 'imgover';
opts.defaultRolloverImageSuffix  = opts.defaultRolloverImageSuffix || '-ov';

var targetImageIdSuffixRe = new RegExp('_' + opts.rolloverClass + '$'); // 'id_imgover'

setRolloversByTagName('img',   function(image) {return (true);                 });
setRolloversByTagName('input', function(input) {return (input.type == 'image');});

function setRolloversByTagName(targetTag, isRolloverObject) {
	var aImages = document.getElementsByTagName(targetTag); //like 'img', 'input',...
	for (var i = 0, n = aImages.length; i < n; i++) {
		var image = aImages[i];
		if (!image.className) continue;
		if (!getRolloverClass(image)) continue;
		if (!isRolloverObject(image)) continue;
		if (image.useMap) { // case of clickable map
			setRolloversClickableMap(image);
			continue; // next image
		}
		setRollover(image);
	}
}

function getRolloverClass(anObject) {
	var rolloverClassRe = new RegExp('^(' + opts.rolloverClass + ')(.*)');
	if (!anObject.className) return null;
	var classNames = anObject.className.split(' ');
	for (var i = 0, n = classNames.length; i < n; i++) {
		var classNameElements = classNames[i].match(rolloverClassRe);
		if (classNameElements) return classNameElements;
		// returns an array [class_full, class_base, class_extension]
	}
	return null;
}

function setRolloversClickableMap(image) {
	var mapId = image.useMap.match(/^\#(.*)/)[1]; // cut off the initial "#"
	var areas = document.getElementsByName(mapId).item(0).areas;
	for (var i = 0, n = areas.length; i < n; i++) {
		if (getRolloverClass(areas[i])) {
			setRollover(image, areas[i]);
		}
	}
}

function setRollover(targetImage, eventCaptureObject) {
	// if eventCaptureObject catch some mouseover/mouseout event,
	// then replace the image source of targetImage.
	var src = targetImage.src;
	var targetImageId = targetImage.getAttribute('id') || '';
	var eventCaptureId = (targetImageId.match(targetImageIdSuffixRe))
		? targetImageId.replace(targetImageIdSuffixRe, '')
		: '';

	eventCaptureObject
		= document.getElementById(eventCaptureId)
		|| eventCaptureObject
		|| targetImage;

	var rolloverImageSuffix = opts.defaultRolloverImageSuffix || getRolloverClass(eventCaptureObject)[2];

	var ftype = src.substring(src.lastIndexOf('.'), src.length);
	var hsrc = src.replace(ftype, rolloverImageSuffix + ftype);
	var mouseoverImage = new Image();
	var mouseoutImage  = new Image();

	mouseoverImage.src = hsrc;	// preload mouseover image
	mouseoutImage.src  = src;	// save as mouseout image

	eventCaptureObject.onmouseover = function() {
		targetImage.src = hsrc;
	}

	eventCaptureObject.onmouseout = function() {
		targetImage.src = src;
	}

	eventCaptureObject.onclick = function() {
		targetImage.src = hsrc;
	}

}
} // /setRollover

(function ($) {
    // =============================== Main Routine - Initialize Screen Parts
    $(function () {
        // クエリ文字列を除去したURLを取得
        var __urlStr = location.href;
        var __qstrPos = __urlStr.indexOf("?");
        if (__qstrPos != -1) {
            __urlStr = __urlStr.slice(0, __qstrPos);
        }
        // パターンA判定 [棚卸商品一括設定] or [棚卸入力（在庫数量入力）]
        var __isDispA = (__urlStr.match(/\/stock\/stock_prod_all\.pagex/) || __urlStr.match(/\/stock\/stock_close_by_item\.pagex/)) ? true : false;
        $('input.has-placeholder-black').placeHolder();
        if (!__isDispA) {
            setRollovers();
            $('a.ctrl-bln-simple').setSimpleBln();
            $('.toggle-hidden-table').toggleHiddenTable();
        }
    });
})(jQuery);

// JavaScript Document
$(function() {
    // 「選択」リンク
    $(".menu-pulldown-r li,.menu-pulldown-l li").hover(function() {
        $(this).children('ul').show();
    }, function() {
        $(this).children('ul').hide();
    });
});

$(function() {
    // 表示中の一覧を全て選択
    $('a.pd-selectAllCheckBoxlink').bind('click', function() {
      $("input:checkbox.pd-checkbox").each(function() {
               if(this.disabled == false){
                this.checked=true;
                $(this).parents(".slip-summary-a").addClass('selected');
               }
        });
    });
    // 表示中の選択を全て解除
    $('a.pd-unSelectAllCheckBoxlink').bind('click', function() {
      $('input:checkbox.pd-checkbox').each(function() {
             if(this.disabled == false){
                this.checked=false;
                $(this).parents(".slip-summary-a").removeClass('selected');
             }
        });
    });
});

$(function() {
    // 「選択」リンク
    $("li.menu-pulldown-li02").click(function() {
        $(this).parent().hide();
    });
});

$(function() {
	// TEXTAREA文字のサイズ入力チェエク
    $("textarea").keyup(function(event) {
        if ($(this).val().length >= 4000) {
            if (event.which != "8") {
            	$(this).val($(this).val().substring(0,4000));
                return false;
            }
        }
    });
});


function setViewName(viewNm, hidNm, lnkAll){
    var iInterval;
    iInterval = setInterval(function(){
        if (modals.length < 1) {
            if (document.getElementById(hidNm).value != document.getElementById(viewNm).innerHTML
                && document.getElementById(hidNm).value != "") {
                  document.getElementById(viewNm).innerHTML = document.getElementById(hidNm).value;
                  if (document.getElementById(hidNm).value != "全て") {
                      document.getElementById(viewNm).className = "tx-b";
                      document.getElementById(lnkAll).style.display="inline";
                  } else {
                      document.getElementById(viewNm).className = "";
                      document.getElementById(lnkAll).style.display="none";
                  }
            }
            clearInterval(iInterval);
        }
    }, 10);
}

 function masterWindow(){
     return getPrePage();
}

function keyWordOnEnter(elementId){
    $('#'+elementId).click();
    return false;
}

function printWindow(){
	window.print();
}

/***************************
*    Enterキーで検索実行
*    modify(doEnter=>doEnterKeyDown) by zhangying at 2013/03/05 for kikaku
****************************/
function doEnterKeyDown(e,txtId,lnkId) {
	//firefox,opera,IE,FF
	var currKey = 0,e = e || event;
	currKey = e.keyCode || e.which || e.charCode;
	 //Enterキーが押された場合
	if (currKey == 13) {
		 //setTimeout($("#"+lnkId).focus(),0);
	    $("#"+lnkId).focus();
		 $("#"+lnkId).click();
	 }else{
		 return 0;
	 }
}

function showMailAttention(){
	 openModal("/web2/jp/attention/mail_attention.html");
}

function showMachineDependentCharacters(){
	 openModal("/web2/jp/attention/machine_dependent_characters.html");
}

//変更追加 #15754 「各種保存ボタンのご注意」を追加する 2013/02/25 add by Zhoujianfeng START
function showSaveAttention(){
	 openModal("/web2/jp/attention/save_attention.html");
}
//変更追加 #15754 「各種保存ボタンのご注意」を追加する 2013/02/25 add by Zhoujianfeng END

//規格書B票 #16270 【規格書Ｐ２】バルーンガイド 文言修正 2013/04/02 add by ZhangChuanHong START
function showAttentionAuth(){
	 openModal("/web2/jp/attention/attention_auth.html");
}
//規格書B票 #16270 【規格書Ｐ２】バルーンガイド 文言修正 2013/04/02 add by ZhangChuanHong END

//規格書B票 #16394 【規格書Ｐ２】担当者編集 権限ガイド画面の修正 2013/04/07 add by BaoGuangming START
function showAttentionAuthSeller(){
	 openModal("/web2/jp/attention/attention_auth_1.html");
}
function showAttentionAuthBuyer(){
	 openModal("/web2/jp/attention/attention_auth_2.html");
}
function showAttentionAuthOroshi(){
	 openModal("/web2/jp/attention/attention_auth_3.html");
}
//規格書B票 #16394 【規格書Ｐ２】担当者編集 権限ガイド画面の修正 2013/04/07 add by BaoGuangming END

//変更追加 #16125 「3321_再提出依頼_ボタンのガイド」を追加する 2013/03/21 add by WuJing START
function showSellerActionAttention(){
	 openModal("/web2/jp/attention/attention_action_1.html");
}
function showOroshiActionAttention(){
	 openModal("/web2/jp/attention/attention_action_2.html");
}
//変更追加 #16125 「3321_再提出依頼_ボタンのガイド」を追加する 2013/03/21 add by WuJing END
//変更追加 #16011 add by Ichikawa Start
function showMenuSaveAttention(){
	 openModal("/web2/jp/attention/save_menu_attention.html");
}
//変更追加 #16011 add by Ichikawa End

function showMailDeleteAttention(){
	 openModal("/web2/jp/attention/mail_delete_attention.html");
}
/***************************************************************************************************
機　能　：プレミアム版規格書詳細ウィンドウ（=/search/DispDetail.asp）をオープンします．
引　数　：1. [I  ] - string p_url - パラメータ付けURL
　　　　　2. [I  ] - string p_item_cd - 品番
***************************************************************************************************/
function DispWindowPB(p_url , p_item_cd ) {
    var win_name = p_item_cd.replace(/-/g, "");
    window.open(p_url,win_name, 'scrollbars=yes,resizable=yes,left=20,top=20,width=1200,height=800');
}

/***************************************************************************************************
機　能　：規格書詳細ウィンドウ（子画面用）をオープンします．
引　数　：1. [I  ] - string p_url - パラメータ付けURL
　　　　　2. [I  ] - string p_item_cd - 品番
***************************************************************************************************/
function DispWindowO(p_url , p_item_cd ) {
	var longTime = new Date().getTime();
    var win_name = p_item_cd.replace(/-/g, "")+longTime;
    window.open(p_url,win_name, 'scrollbars=yes,resizable=yes,left=20,top=20,width=1200,height=800');
}
var dateArray = new Array();
	function validatorSubmit(){
	dateArray.push(new Date());
	var dateLen = dateArray.length;
	if(dateLen>1 && ((dateArray[dateLen-1].getTime()-dateArray[dateLen-2].getTime())<1000)){
		return false;
	}
	return true;
}
//////////////////////////////////////////////////////////////////////////////
// jQuery拡張
(function($) {

    $.extend({

        // 単位選択プルダウンを閉じる
        closePulldownUnit: function() {

            $("html").die("click", $.onClickOuterPulldownUnit);

            $("#pulldown-unit").dialog("close");
        },

        // 単位選択プルダウン及び起動要素以外をクリックした時のイベントハンドラ
        onClickOuterPulldownUnit: function(event) {

            if ($(event.target).hasClass("pulldown-unit") || $(event.target).hasClass("date-unit") || $(event.target).hasClass("dateMD-unit")) {
                return;
            }
            $.closePulldownUnit();
        }

    });

})(jQuery);


//////////////////////////////////////////////////////////////////////////////
// jQueryプラグイン
(function($) {

    // 単位選択プルダウン登録
    $.fn.registPulldownUnit = function() {
        $(this).click(function(){
            $(this).openPulldownUnit2();
        });

        return this;
    };

    var windowHeight1;
    var offsetRect1;
    var settings1;
    $.fn.registPulldownUnitByFocus = function() {
        $(this).mouseup(function(){
        	if($(this).attr("disabled") == "disabled") return;
            $(this).openPulldownUnit();
            var $DateText = $(this);
            $("#pulldown-unit").load(function(){
//            	var thisheight = $(this).contents().find("body")[0].scrollHeight;
//            	thisheight = thisheight < 185 ? 185 : thisheight;
            	thisheight = settings1.pulldownHeight;
            	var nameUA = navigator.userAgent.toLowerCase();
            	var isIe = nameUA.match(/ie/) ? true : false;
				var viewMode;
				var obj;
            	if (isIe) {
            		obj = window.frames['pulldown-unit'].document.getElementById("pickerHeight");
            		//viewMode = document.frames('pulldown-unit').document.getElementById("viewMode");
            		viewMode = window.frames['pulldown-unit'].document.getElementById("viewMode");
            		if (window.frames['pulldown-unit'].document.getElementById("sel_order_to") != null) {
                		thisheight = thisheight + 20;
                	}
                	if (window.frames['pulldown-unit'].document.getElementById("msg") != null) {
                		thisheight = thisheight + 45;
                	}
            	}
            	else {
            		obj = $("#pulldown-unit")[0].contentDocument.getElementById("pickerHeight");
            		viewMode = $("#pulldown-unit")[0].contentDocument.getElementById("viewMode");
            		if ($("#pulldown-unit")[0].contentDocument.getElementById("sel_order_to") != null) {
            			thisheight = thisheight + 20;
            		}
            		if ($("#pulldown-unit")[0].contentDocument.getElementById("msg") != null) {
            			thisheight = thisheight + 45;
            		}
            	}

            	//
            	var pulldownWidth;
            	var pulldownHeight = 288;
            	if (viewMode!=null && viewMode.value == 2) {
            		pulldownWidth = 472;
            	} else {
            		pulldownWidth = 236;
            	}

            	var pickerHeight;
            	if (obj!=null) {
            		pickerHeight = obj.value;
            	}
            	if (pickerHeight == "1") {
            		pulldownHeight = 178;
            	};
            	if (pickerHeight == "2") {
            		pulldownHeight = 242;
            	};
            	if (pickerHeight == "3") {
            		pulldownHeight = 208;

            	};
            	if (pickerHeight == "4") {
            		pulldownHeight = 265;
            	};
            	$(this).height(pulldownHeight);
            	$(".infoCal").width(pulldownWidth);

//            	if (((windowHeight1 - offsetRect1.bottom) < settings1.pulldownHeight) && (settings1.pulldownHeight < offsetRect1.top)) {
//            		$('.ui-dialog').css("top", offsetRect1.top + $(window).scrollTop() - thisheight - 5);
//
//                }
                // ブラウザのスクロール量を取得
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                //var scrollTop = 0;
                //var scrollLeft = 0;

                // クリック要素のオフセット位置情報を取得
            	var targetOffset = $DateText.offset();
            	var offsetRect = {
            			top: targetOffset.top - scrollTop,
            			left: targetOffset.left - scrollLeft,
            			right: targetOffset.left + $DateText.width() - scrollLeft,
            			bottom: targetOffset.top + $DateText.height() - scrollTop
            	};
            	offsetRect1 = offsetRect;

			    // ブラウザの表示領域を取得
            	var windowWidth = $(window).width();
            	var windowHeight = $(window).height();
            	windowHeight1 = windowHeight;

                // 水平位置を決定
            	var pulldownLeft = offsetRect.left;
            	// ターゲットの右にプルダウン幅が無く、かつ左にはある場合のみ、左に出す。
            	if (((windowWidth - offsetRect.left) < pulldownWidth) && (pulldownWidth < offsetRect.left)) {
            		pulldownLeft = offsetRect.right - pulldownWidth;
            	}

		        // 垂直位置を決定
            	var pulldownTop = offsetRect.bottom + 5;
            	// ターゲットの下にプルダウン高さが無く、かつ上にはある場合のみ、上に出す。
            	if (((windowHeight - offsetRect.bottom) < pulldownHeight) && (pulldownHeight < offsetRect.top)) {
            		pulldownTop = offsetRect.top - pulldownHeight + scrollTop;
            	} else {
            		pulldownTop = pulldownTop + scrollTop;
            	}
                $(".ui-dialog").css({ "top": pulldownTop, "left": pulldownLeft });
                //
                $(".ui-dialog").show();


            });
            setTimeout("$(this).focus()", 0);
        });

        return this;
    };

    // Calendarプルダウン表示
    $.fn.openPulldownUnit = function(options) {
        // デフォルトパラメータ設定
        var settings = $.extend({
//            url: "/test.page",
            pulldownWidth: 480,
            pulldownHeight: 210
        }, options||{});

        settings1 = settings;

        // 表示中の場合はクローズして処理を終了
        if (0 !== $("#pulldown-unit").length) {
            $.closePulldownUnit();
            return this;
        }

        // ブラウザのスクロール量を取得
//        var scrollTop = $(window).scrollTop();
//        var scrollLeft = $(window).scrollLeft();

        var $this = $(this);
//        // クリック要素のオフセット位置情報を取得
//        var targetOffset = $this.offset();
//        var offsetRect = {
//            top: targetOffset.top - scrollTop,
//            left: targetOffset.left - scrollLeft,
//            right: targetOffset.left + $this.width() - scrollLeft,
//            bottom: targetOffset.top + $this.height() - scrollTop
//        };
//        offsetRect1 = offsetRect;
//
//        // ブラウザの表示領域を取得
//        var windowWidth = $(window).width();
//        var windowHeight = $(window).height();
//        windowHeight1 = windowHeight;

        // 水平位置を決定
//        var pulldownLeft = offsetRect.left;
//        // ターゲットの右にプルダウン幅が無く、かつ左にはある場合のみ、左に出す。
//        if (((windowWidth - offsetRect.left) < settings.pulldownWidth) && (settings.pulldownWidth < offsetRect.left)) {
//            pulldownLeft = offsetRect.right - settings.pulldownWidth;
//        }
//
//        // 垂直位置を決定
//        var pulldownTop = offsetRect.bottom + 5;
//        // ターゲットの下にプルダウン高さが無く、かつ上にはある場合のみ、上に出す。
//        if (((windowHeight - offsetRect.bottom) < settings.pulldownHeight) && (settings.pulldownHeight < offsetRect.top)) {
//            pulldownTop = offsetRect.top - settings.pulldownHeight;
//        }

        // jQuery UI dialogを表示する
        var url = $this.attr("url");
		if ($this.hasClass("dateMD-unit")) {
			var hidObj = "#hid-" + $this.attr('id');
			url = url + "&i_date=" + $(hidObj).val();
		} else {
			url = url + "&i_date=" + $this.val();
		}
        var dialogElem = "<iframe src='" + url + "' name='" + $this.attr("id") + "' id='pulldown-unit' style='border: none;' frameborder='0'>";
        var dialogObj = $(dialogElem).dialog({
            autoOpen: false,
            open: function(){                        // openイベントハンドラ
                $(this).css('width', '99%');        // iframeを利用する際のスクロールバー調整
                $(this).parent().hide();
            },
            close: function(event){                    // closeイベントハンドラ
                var ifrm = dialogObj.parent().find("iframe");
				if(ifrm.length>0){
					var el=ifrm.get(0);
					el.contentWindow.document.write('');
					el.contentWindow.close();
					ifrm.attr('src',"about:blank");
					ifrm.remove();
				}
                $(this).dialog('destroy');            // 生成したdialogを破棄する
                $(event.target).remove();            // 生成したDOM要素を削除する
            },
            resizable: false,                        // リサイズ
            modal: false,                            // モーダル
            width: settings.pulldownWidth,            // 幅
            height: settings.pulldownHeight        // 高さ
            //position: [pulldownLeft, pulldownTop]    // 位置
        });
        //
        dialogObj.parent().addClass("infoCal");
        var styleVal =  dialogObj.parent().attr("style") + " background:#fff;";
        dialogObj.parent().attr("style", styleVal);
        // タイトルバーを非表示にする
        dialogObj.siblings("div.ui-dialog-titlebar").hide();

        // ダイアログをオープンする
        dialogObj.dialog("open");

        // ダイアログ以外のクリックで閉じるイベントハンドラを登録する
        $("html").live("click", $.onClickOuterPulldownUnit);

        return this;
    };


    $.fn.registPulldownUnitByClick = function() {
        $(this).click(function(){
            $(this).openPulldownUnit2();
            $("#pulldown-unit").load(function(){
            	var nameUA = navigator.userAgent.toLowerCase();
            	var isIe = nameUA.match(/ie/) ? true : false;
            	var colNo;
            	var colwidth;
            	var doc;
//            	if (isIe) {
//            		colNo = document.frames('pulldown-unit').document.getElementById("colwidth");
//            	}
//            	else {
//            		colNo = $("#pulldown-unit")[0].contentDocument.getElementById("colwidth");
//            	}
//            	colwidth = colNo.value * 100;
//            	$(this).width(colwidth);
//            	$('.ui-dialog').css("width", colwidth);

            	if (isIe) {
					// ↓↓↓ 2012/08/20 IE9対応 Infomart S.Tokuyama ↓↓↓
					if (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") != -1) {
						doc = $("#pulldown-unit")[0].contentDocument;
					} else {
            			doc = document.frames('pulldown-unit').document;
					}
					// ↑↑↑ 2012/08/20 IE9対応 Infomart S.Tokuyama ↑↑↑
            	}
            	else {
            		doc = $("#pulldown-unit")[0].contentDocument;
            	}

				$(this).css("width", 513);
				$('.ui-dialog').css("width", 513);

				if(doc.body.offsetHeight > 244) {
					$(this).css("height", 244);
					$('.ui-dialog').css("height", 244);
				} else {
					$(this).css("height", doc.body.offsetHeight);
					$('.ui-dialog').css("height", doc.body.offsetHeight);
					$(this).css("width", 496);
					$('.ui-dialog').css("width", 496);
				}
				// ↓↓↓ 2012/10/15 13371 FF対応 DHC ↓↓↓
					if(( window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
                        $("#pulldown-unit").css("overflow", "auto");
                     }
                    // ↑↑↑ 2012/10/15 13371 FF対応 DHC ↑↑↑

            });
        });

        return this;
    };

	// 単位選択プルダウン表示
	$.fn.openPulldownUnit2 = function(options) {

		// デフォルトパラメータ設定
		var settings = $.extend({
//			url: "unitselect.html",
			pulldownWidth: 513,
			pulldownHeight: 244,
			pulldownInitWidth: 0,
			pulldownInitHeight: 0
		}, options||{});

		// 表示中の場合はクローズして処理を終了
		if (0 !== $("#pulldown-unit").length) {
			$.closePulldownUnit();
			return this;
		}

		// ブラウザのスクロール量を取得
		var scrollTop = $(window).scrollTop();
		var scrollLeft = $(window).scrollLeft();

		// クリック要素のオフセット位置情報を取得
		var targetOffset = $(this).offset();
		var offsetRect = {
			top: targetOffset.top - scrollTop,
			left: targetOffset.left - scrollLeft,
			right: targetOffset.left + $(this).width() - scrollLeft,
			bottom: targetOffset.top + $(this).height() - scrollTop
		};

		// ブラウザの表示領域を取得
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		// 水平位置を決定
		var pulldownLeft = offsetRect.left;
		// ターゲットの右にプルダウン幅が無く、かつ左にはある場合のみ、左に出す。
		if (((windowWidth - offsetRect.left) < settings.pulldownWidth) && (settings.pulldownWidth < offsetRect.left)) {
			pulldownLeft = offsetRect.right - settings.pulldownWidth;
		}

		// 垂直位置を決定
		var pulldownTop = offsetRect.bottom;
		// ターゲットの下にプルダウン高さが無く、かつ上にはある場合のみ、上に出す。
		if (((windowHeight - offsetRect.bottom) < settings.pulldownHeight) && (settings.pulldownHeight < offsetRect.top)) {
//			pulldownTop = offsetRect.top - settings.pulldownHeight - 5;
			pulldownTop += 0;
		}
		else {
			pulldownTop += 0;
		}

		// jQuery UI dialogを表示する
		var url = $(this).attr("url");
		if (null == url || url.indexOf("?") == -1)
	    {
	        return null;
	    }

	    var argsUrl = url.split("?")[1];

	    //if (argsUrl.split("=").length < 2)
	    if (argsUrl.indexOf("=") == -1)
	    {
	        return null;
	    }

	    var properties = argsUrl.replace(/&/g, "',").replace(/=/g, ":'") + "'";
	    var obj = null;
	    var template = "obj = {p}";
	    eval(template.replace(/p/g, properties));

		url = url + "&cddata=" + $('#' + obj.inmcd).val();
		var dialogElem = "<iframe src='" + url + "' name='" + $(this).attr("id") + "' id='pulldown-unit' style='border: none;' frameborder='0'>";
		var dialogObj = $(dialogElem).dialog({
			autoOpen: false,
			open: function(){						// openイベントハンドラ
				$(this).css('width', '100%');		// iframeを利用する際のスクロールバー調整
			},
			close: function(event){					// closeイベントハンドラ
			    var ifrm = dialogObj.parent().find("iframe");
				if(ifrm.length>0){
					var el=ifrm.get(0);
					el.contentWindow.document.write('');
					el.contentWindow.close();
					ifrm.attr('src',"about:blank");
					ifrm.remove();
				}
				$(this).dialog('destroy');			// 生成したdialogを破棄する
				$(event.target).remove();			// 生成したDOM要素を削除する
			},
			resizable: false,						// リサイズ
			modal: false,							// モーダル
			width: settings.pulldownInitWidth,		// 幅
			height: settings.pulldownInitHeight,	// 高さ
			position: [pulldownLeft, pulldownTop],	// 位置
			//show: {effect: 'blind', duration: 10},	// エフェクト
			dialogClass: "ui-dialog-sel-unit"		// カスタムクラス
		});

		// タイトルバーを非表示にする
		dialogObj.siblings("div.ui-dialog-titlebar").hide();

		// ダイアログをオープンする
		dialogObj.dialog("open");

		// ダイアログ以外のクリックで閉じるイベントハンドラを登録する
		$("html").live("click", $.onClickOuterPulldownUnit);
		return this;
	};

})(jQuery);


//////////////////////////////////////////////////////////////////////////////
// レディハンドラ
$(function() {

    // 一括発注or週間発注or納品日入力判別
    var urlStr = location.href;
    var qstrPos = urlStr.indexOf("?");
    if (qstrPos != -1) {
      urlStr = urlStr.slice(0, qstrPos);
    }
    var excludeDeco = (urlStr.match(/\/trade\/order_my_catalog\.page/) || urlStr.match(/\/trade\/buyer_reserved_order\.page/) || urlStr.match(/\/trade\/order\.page/)) ? true : false;
     //[棚卸商品一括設定]or[棚卸の在庫数量入力]
    var isLightWeight = (urlStr.match(/\/stock\/stock_prod_all\.pagex/)||urlStr.match(/\/stock\/stock_close_by_item\.pagex/)) ? true : false;

    // 一括発注or週間発注or納品日入力の場合、単位選択のバインド処理を行わない
    if (!excludeDeco) {

      // プルダウン単位選択ウィンドウ登録
      if (isLightWeight) {
        $.registPulldownUnitByClick();
      } else {
        $("input.pulldown-unit, span.pulldown-unit").registPulldownUnitByClick();
      }
      // プルダウン単位選択ウィンドウ内の制御
      //$(".unit-select td:has(span)").click(function(){
        //var srcId = window.parent.jQuery("#pulldown-unit").attr("name");
        //window.parent.jQuery("#"+srcId).text($(this).find("span").attr("title"));
        //window.parent.jQuery("#pulldown-unit").dialog("close");
        //return false;
      //})
      //.hover( function(){ $(this).addClass("unit-hovering"); },
              //function(){ $(this).removeClass("unit-hovering");});

    }

    // 日付ピッカー登録登録
    if (!isLightWeight) {
    $("input.date-unit[type='text']").registPulldownUnitByFocus();
    $("input.dateMD-unit[type='text']").registPulldownUnitByFocus();
     }
    // adjustModalをリサイズイベントにバインド
    adjustModal();
    $(window).bind("resize", adjustModal);
});


/**
 * モーダルダイアログ配列
 */
var modals = new Array();

/**
 * IE6フラグ
 */
var _isIe6 = (navigator.userAgent.toLowerCase().match(/ie 6/)) ? true : false;

/**
 * ダイアログ追加CSSクラス
 * 表示位置を固定する。IE6はfixedに対応していないので除外する。
 */
var positionFixedClass = "";
if(!_isIe6){
	positionFixedClass = "ui-dialog-fixed";
}

/**
 * モーダルダイアログ配列にpushする
 */
function pushModal(modal)
{
	modals.push(modal);
	visibleTopModal();
}

/**
 * モーダルダイアログ配列からpopする
 */
function popModal()
{
	modal = modals.pop();
	visibleTopModal();
	return modal;
}

/**
 * 最上位モーダル以外を非表示にする
 */
function visibleTopModal()
{
	var length = modals.length;
	if (0 == length) return;
    modals[length - 1].dialog("widget").css("display","block");
	for (var i = 0; i < (length - 1); ++i) {
        modals[i].dialog("widget").css("display","none");
    }
    adjustModal();
}

/**
 * モーダルダイアログ生成
 */
function openModal(url) {

    // モーダルダイアログ生成
    var modal = $("<div style='position: relative;'><iframe id='__modal' name='__modal' src=" + url + " style='width: 100%; height: 100%;'/></div>");
    if (!isIE9()) {
        $("body").append(modal);
    }
    modal.dialog({
        close: function(event){
        	var ifrm = $(this).find('iframe');
			if(ifrm.length>0){
				var el=ifrm.get(0);
				el.contentWindow.document.write('');
				el.contentWindow.close();
				ifrm.attr('src',"about:blank");
				//ifrm.remove();
			}
            $(this).dialog('destroy');
//            $(event.target).remove();
            $(this).empty();
//            $(this).remove();
        }
        ,bgiframe : true
        ,closeOnEscape: false
        ,draggable: false
        ,resizable: false
        ,modal: (0 == modals.length)
        ,width: 710
        ,height: 600
        ,autoOpen: false
        ,dialogClass : positionFixedClass
    });
    // タイトルバーを非表示にする
    $("div.ui-dialog-titlebar").hide();
    // モーダルダイアログをオープンする
    modal.dialog("open");
    // 二重モーダル、背景色を削除
    var index = modals.length;
    if (index > 0) {
    	$('.ui-widget-overlay').eq(index).remove();
    };
    // モーダルダイアログ配列に追加
    pushModal(modal);
    // モーダルダイアログの位置・サイズをアジャストする
    adjustModal();
    return false;
}

function openModalUser(url, strwidth, strheight) {


	// モーダルダイアログ生成
	var modal = $("<div style='position: relative;'><iframe id='__modal' name='__modal' src='" + url + "' style='width: 100%; height: 100%;'/></div>");
	$("body").append(modal);
	modal.dialog({
		close: function(event){
			$(this).dialog('destroy');
//			$(event.target).remove();
			$(this).empty();
//            $(this).remove();
		}
		,bgiframe : true
		,closeOnEscape: false
		,draggable: false
		,resizable: false
		,modal: (0 == modals.length)
		,width: strwidth
		,height: strheight
		,autoOpen: false
		,dialogClass : positionFixedClass
	});
	// タイトルバーを非表示にする
	$("div.ui-dialog-titlebar").hide();
	// モーダルダイアログをオープンする
	modal.dialog("open");
	// 二重モーダル、背景色を削除
    var index = modals.length;
    if (index > 0) {
    	$('.ui-widget-overlay').eq(index).remove();
    };
	// モーダルダイアログ配列に追加
	pushModal(modal);
	// モーダルダイアログの位置・サイズをアジャストする
	adjustModal(strheight);
	return false;
}

/**
 * モーダルダイアログ（half size）生成
 */
function openModalHalf(url) {

    // モーダルダイアログ生成
    var modal = $("<div style='position: relative;'><iframe id='__modal' name='__modal' src=" + url + " style='width: 100%; height: 100%;'/></div>");
    if (!isIE9()) {
        $("body").append(modal);
    }
    modal.dialog({
        close: function(event){
            var ifrm = $(this).find('iframe');
			if(ifrm.length>0){
				var el=ifrm.get(0);
				el.contentWindow.document.write('');
				el.contentWindow.close();
				ifrm.attr('src',"about:blank");
				//ifrm.remove();
			}
            $(this).dialog('destroy');
//            $(event.target).remove();
            $(this).empty();
//            $(this).remove();
        }
        ,bgiframe : true
        ,closeOnEscape: false
        ,draggable: false
        ,resizable: false
        ,modal: (0 == modals.length)
        ,width: 710
        ,height: 310
        ,autoOpen: false
        ,dialogClass : positionFixedClass
    });
    // タイトルバーを非表示にする
    $("div.ui-dialog-titlebar").hide();
    // half sizeのモーダルはリサイズされないように、"ui-dialog-halfsize"クラスを挿入しておく
    modal.dialog("widget").find("div.ui-dialog-content").addClass("ui-dialog-halfsize");

    // モーダルダイアログをオープンする
    modal.dialog("open");
    // 二重モーダル、背景色を削除
    var index = modals.length;
    if (index > 0) {
    	$('.ui-widget-overlay').eq(index).remove();
    };
    // モーダルダイアログ配列に追加
    pushModal(modal);
    return false;
}

/**
 * モーダルダイアログを閉じる
 */
function closeModal() {
    popModal().dialog("close");
    return false;
}

/**
 * モーダルダイアログのオープナーを取得する
 */
function getModalOpener() {
    return (modals.length > 1) ? (modals[modals.length - 2].contents()[0].contentWindow) : this;
}

/**
 * モーダルダイアログの位置・サイズをアジャストする
 */
function adjustModal(strheight) {
    var windowHeight = $(window).height();
    var modalHeightMax = 600;
    var modalHeightMin = 310;
    var scrollHeight = $(window).scrollTop();
    if (strheight !="" && strheight >= 310) {
    	modalHeightMax = strheight;
    }
    var modalHeight = ((windowHeight > modalHeightMax) ? modalHeightMax : ((windowHeight > modalHeightMin) ? windowHeight : modalHeightMin));
    $("div.ui-dialog-content:not(.ui-dialog-halfsize)").height(modalHeight);
    if(modalHeight<580)
    {
    $("div.dialog-mdl-wrap").height(modalHeight-10);
    $("div.dialog-mdl-contents-wrapper").height(modalHeight-90);
      }
    for (var i = 0; i < modals.length; ++i) {
        var modal = modals[i].dialog("widget");
        var elemTop = Math.floor(($(window).height() - modal.height()) / 2);
        var elemLeft = Math.floor(($(window).width() - modal.width()) / 2);
        if(_isIe6){

        	var elemTop = Math.floor(($(window).height() - modal.height()) / 2) + scrollHeight;

        }
        modal.css({ "top": elemTop, "left": elemLeft });
    }
    return false;
}

function isIE9() {
    var nameUA = navigator.userAgent.toLowerCase();
    var isIe = nameUA.match(/ie/) ? true : false;
    if (isIe) {
        if (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") != -1) {
            return true;
        }
    }
    return false;
}

/**
 * モーダルダイアログ生成(post)
 */
function openModalByPost(formId, url) {
    // モーダルダイアログ生成
    var modal = $("<div style='position: relative;'><iframe id='__modal' name='__modal' src=" + url + " style='width: 100%; height: 100%;'/></div>");
    if (!isIE9()) {
        $("body").append(modal);
    }

    modal.dialog({
    	open: function(){                        // openイベントハンドラ
          var firstFlg = true;
          $("#__modal").load(function(){
            var $childForm = $(this).contents().find("form");
          	if ($childForm.length>0 && firstFlg) {
          		$(this).contents().find("body").hide();
          		$("#" + formId + " input").each(function(){
          			var hiddenStr = "<input type='hidden' id='" + $(this).attr("id") + "' name='" + $(this).attr("name") + "' value='" + $(this).attr("value") +"'>";
          			if ($(this).attr("id")!='nodeType') {
          				$childForm.append($(hiddenStr));
          			}
          		});
          		$childForm.attr("action", url);
          		firstFlg = false;
          		$childForm.submit();
          	}
          });
        },
        close: function(event){
            $(this).dialog('destroy');
//            $(event.target).remove();
            $(this).empty();
//            $(this).remove();
        }
        ,bgiframe : true
        ,closeOnEscape: false
        ,draggable: false
        ,resizable: false
        ,modal: (0 == modals.length)
        ,width: 710
        ,height: 600
        ,autoOpen: false
        ,dialogClass : positionFixedClass
    });
    // タイトルバーを非表示にする
    $("div.ui-dialog-titlebar").hide();
    // モーダルダイアログをオープンする
    modal.dialog("open");
    // 二重モーダル、背景色を削除
    var index = modals.length;
    if (index > 0) {
    	$('.ui-widget-overlay').eq(index).remove();
    };
    // モーダルダイアログ配列に追加
    pushModal(modal);
    // モーダルダイアログの位置・サイズをアジャストする
    adjustModal();

    return false;
}

function openModalPost(url) {

    // モーダルダイアログ生成
    var modal = $("<div style='position: relative;'><iframe id='__modal' name='__modal' src='about:blank' style='width: 100%; height: 100%;'/></div>");
    if (!isIE9()) {
        $("body").append(modal);
    }
    $("#_modal_frm").remove();
    var path = url.split("?");
    var $modalForm = $("<form name='_modal_frm' id='_modal_frm' method='post' action='" + path[0]
            + "' target='__modal'></form>");
    $("body").append($modalForm);
    var decodeFlg = false; 
    if (url.indexOf('setencodeflag') != -1) {
        decodeFlg = true;
    }
    if (path.length > 1) {
        var params = path[1].split("&");
        for ( var i = 0; i < params.length; i++) {
            var p = params[i].split("=");
            var key = p[0];
            var value = p.length > 1 ? p[1] : "";
            if (decodeFlg) {
                value = decodeURI(value);
            }
            var hiddenStr = "<input type='hidden' id='" + key + "' name='" + key + "' value='" + value + "'>";
            $modalForm.append($(hiddenStr));
        }
    }

    modal.dialog({
        close : function(event) {
            var ifrm = $(this).find('iframe');
            if (ifrm.length > 0) {
                var el = ifrm.get(0);
                el.contentWindow.document.write('');
                el.contentWindow.close();
                ifrm.attr('src', "about:blank");
                // ifrm.remove();
            }
            $(this).dialog('destroy');
            // $(event.target).remove();
            $(this).empty();
            // $(this).remove();
        },
        bgiframe : true,
        closeOnEscape : false,
        draggable : false,
        resizable : false,
        modal : (0 == modals.length),
        width : 710,
        height : 600,
        autoOpen : false,
        dialogClass : positionFixedClass
    });
    // タイトルバーを非表示にする
    $("div.ui-dialog-titlebar").hide();
    // モーダルダイアログをオープンする
    modal.dialog("open");
    // 二重モーダル、背景色を削除
    var index = modals.length;
    if (index > 0) {
        $('.ui-widget-overlay').eq(index).remove();
    }
    // モーダルダイアログ配列に追加
    pushModal(modal);
    // モーダルダイアログの位置・サイズをアジャストする
    adjustModal();
    $modalForm.submit();
    return false;
}
// クエリ文字列を除去したURLを取得
var __urlStr = location.href;
var __qstrPos = __urlStr.indexOf("?");
if (__qstrPos != -1) {
    __urlStr = __urlStr.slice(0, __qstrPos);
}
// パターンA判定 [発注リスト] or [週間発注] or [納品日入力]
var __isDispA = (__urlStr.match(/\/trade\/order_my_catalog\.page/) || __urlStr.match(/\/trade\/buyer_reserved_order\.page/) || __urlStr.match(/\/trade\/order\.page/)) ? true : false;
// パターンB判定 [パターンA] or [通常品・非表示の設定・解除] or [取引先の追加]
var __isDispB = (__isDispA) ? true :
    ((__urlStr.match(/\/trade\/scripts\/normal_item_setting\.page/) || __urlStr.match(/\/scripts\/customer_group_detail\.pagex/)) ? true : false);
// パターンC判定 [棚卸商品一括設定]or[棚卸の在庫数量入力]
var __isDispC = (__urlStr.match(/\/stock\/stock_prod_all\.pagex/)||__urlStr.match(/\/stock\/stock_close_by_item\.pagex/)) ? true : false;
// パターンD判定 [食品分類選択]or[権限グループ設定]
var __isDispD = (__urlStr.match(/\/scripts\/sel_category_add\.page/)||__urlStr.match(/\/member\/profile\/auth_group_setitem\.pagex/)) ? true : false;

// パターンE判定
var __isDispE = (__urlStr.match(/\/stock\/stock_close_by_item\.pagex/)) ? true : false;

// IE6or7判別
function gfIsIE67() {
	var nameUA = navigator.userAgent.toLowerCase();
	return (nameUA.match(/ie 6/)||nameUA.match(/ie 7/)) ? true : false;
}

(function ($) {
  // ===================================== Define Rendering Routines

	// fixedScrollPosition
//	$.fn.fixedScrollPosition = function() {
//		 $(this).scroll(function(){
//			$.cookie('scrollTop', $('#tradeScroll').scrollTop());
//		 });
//	};

//	var clickNode = document.getElementById('treeValue').value;
//	alert(clickNode);
//	if(clickNode!=''){
//		var $node = $(document.getElementById(clickNode));
//		$node.focus();
//	};


    /**
     * radio,checkbox項目のchecked効果
     */
    // 描画更新関数
    $.fn.updateCustomCheck = function(options) {
    	var settings = $.extend({
			checkedClass: "checked",
			spanDisabledClass: "elem-disable"
		}, options||{});

		// green add
    	if ($(this).parents("div.tbl-r-gre, td.tbl-db-gre-td, td.tbl-db-gre-td-m").length > 0) {
    		settings.checkedClass = "checked-gre";
    	};

    	if ($(this).parents("td.highlight").length > 0 || $(this).parents("td.highlight-nochk").length > 0) {
    		settings.checkedClass = "";
    	};

		$(this).find("input:checked").each(function(){
			$(this).parent("span").addClass(settings.checkedClass)
				.parent(".cstm-check-grp").addClass(settings.checkedClass)
					.find(".cstm-check-grp-spn").removeClass(settings.spanDisabledClass)
					.end().find(".cstm-check-grp-frm").removeAttr("disabled").parent("span").removeClass(settings.spanDisabledClass);

		});

		$(this).find("input:not(:checked)").each(function(){
			$(this).parent("span").removeClass(settings.checkedClass)
				.parent(".cstm-check-grp").removeClass(settings.checkedClass)
					.find(".cstm-check-grp-spn").addClass(settings.spanDisabledClass)
					.end().find(".cstm-check-grp-frm").attr("disabled", "disabled");
		});

        return this;
    };

    // 登録関数
    $.fn.registCustomCheck = function() {
        $(this).each(function(){
            // 初期化部品
            $(this).updateCustomCheck();

            $(this).find("input").each(function(){
            	$(this).parent("span").removeClass("elem-disable");
            });
            $(this).find("input:disabled").each(function(){
            	$(this).parent("span").addClass("elem-disable");
            });

//            $(this).find("input").eq(0).parent("span").removeClass("elem-disable");
//            $(this).find("input:disabled").eq(0).parent("span").addClass("elem-disable");

            var target = this;
            $(this).find("span input").click(function(){
                $(target).updateCustomCheck();
                if ($(target).find(".ctrl").hasClass("checked")) {
            		$(target).find("input:checkbox").each(function(){
        				$(this).attr("disabled", "disabled");
        				$(this).parent("span").addClass("elem-disable");
            		});
            		$(target).find("input:text").each(function(){
        				$(this).attr("disabled", "disabled");
        				$(this).parent("span").addClass("elem-disable");
            		});
	            };
	            if($(target).find(".notctrl").hasClass("checked")) {
	            	$(target).find("input:checkbox").each(function(){
	        			$(this).removeAttr("disabled");
	        			$(this).parent("span").removeClass("elem-disable");
	            	});
	            	$(target).find("input:text").each(function(){
	        			$(this).removeAttr("disabled");
	        			$(this).parent("span").removeClass("elem-disable");
	            	});
	            };
            });
        });
    };

    // 描画更新関数
    $.fn.updateCheckBox = function(options) {
    	$("span.cstm-checkbox, span.cstm-radio").each(function(){
            // 初期化部品
            $(this).updateCustomCheck();

        });
    };

    /**
     * List中radio,checkbox項目のchecked効果
     */
    // 描画更新関数
    $.fn.updateListCheck = function(options) {
    	var settings = $.extend({
			checkedClass: "checked"
		}, options||{});

    	if($(this).attr('checked')){
    		var varTD = $(this).parents("td");
    		varTD.addClass(settings.checkedClass);
    		if (varTD.hasClass("list-gry-td")) {
    			varTD.removeClass("list-gry-td").addClass("list-gry-td-f");
    		}

    	}
    	else {
    		var varTD = $(this).parents("td");
    		varTD.removeClass(settings.checkedClass);
    		if (varTD.hasClass("list-gry-td-f")) {
    			varTD.removeClass("list-gry-td-f").addClass("list-gry-td");
    		}
    	}

        return this;
    };

    // 登録関数
    $.fn.registListCheck = function() {
        $(this).each(function(){
            // 初期化部品
            $(this).updateListCheck();

            var target = this;
            $(this).click(function(){
            	if ($(this).attr("type") == "radio") {
            		$('input[name=' + $(this).attr("name") + ']').each(function(){
            			$(this).updateListCheck();
            		});
            	}
            	else {
            		$(this).updateListCheck();
            	}
            });
        });
    };

    /**
     * text項目入力後枠変色
     */
//    $.fn.customText = function( options ){
//        var settings = {
//            focusClass: "focus",
//            targetElem: "input"
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        this.each(function(){
//            var $this = $(this),
//                $input = $this.find(settings.targetElem);
//            $input.bind({
//                'focus': function () {
//                    $this.addClass(settings.focusClass);
//                },
//                'blur': function () {
//                    $this.removeClass(settings.focusClass);
//                }
//            });
//        });
//    };

    /**
     * マウスオーバー時に欄内に説明文を表示
     */
    $.fn.registStatusHover = function() {
        $(this).hover(function() {
            $(this).addClass('status-hover');
        }, function() {
            $(this).removeClass('status-hover');
            $(this).find('.counter-wrapper').css('display', 'none');
//            $('#jquerybubblepopupAlert').css('display', 'none');
        });
    };

    /**
     * dropdownの新UI効果
     */
//    $.fn.customSelect = function( options ){
//        var settings = {
//            parallelFlagClass: "validNativeVal",
//            multiFlagClass: "style-multiline",
//            changeTargetClass: "delTgt",
//            addChangedFlagClass: "status-edited",
//            editSumClass: "editSum",
//            prefixJointer: "elem",
//            multilineSelectClass: "multi-options",
//            lengthTrancateText: 5
//        };
//        if(options){ jQuery.extend(settings, options); };
//        $('body').append('<div id="custom-select-outer-box"></div>');
//        var uniqId = 0,
//            colNum = 5,
//            $outerBox = $('#custom-select-outer-box'),
//            $masterSelect = this;
//
//        $masterSelect.each(function(){
//            uniqId++;
//            var customSelectId = 'custom-select-id' + uniqId,
//                customOptionId = 'custom-option-id' + uniqId,
//                multiLineFlag = $(this).hasClass(settings.multiFlagClass) ? true : false;
//
//            var $elemSelectSrc = $(this),
//                $elemOptionSrc = $elemSelectSrc.children('option');
//
//            var txtOptionSrcSelected = $elemSelectSrc.children('option[selected]').text();
//
//            var srcHtmlElemOptionDest = '';
//
//            var optionNum = $elemOptionSrc.size(),
//                fraction = optionNum % colNum;
//
//            if(fraction == 0){fraction += colNum;}
//            if(optionNum % colNum != 0){
//                $elemOptionSrc.eq(-1).addClass('last-child');
//            }
//            if(multiLineFlag){
//                for(var i=1; i <= fraction; i++){
//                    $elemOptionSrc.eq(-1*i).addClass('bottom');
//                }
//            }
//
//            $elemOptionSrc.each(function(){
//                var $this = $(this),
//                    _blk = "";
//                    _href = "#";
//                if($this.hasClass('blank')){
//                    _blk = 'target="_blank" ';
//                }
//                if($this.attr('rel')){
//                    _href = $this.attr('rel');
//                }
//                srcHtmlElemOptionDest += '<a ' + _blk + 'href="' + _href + '" title="' + $this.text() + '" value="' + $this.val() + '" class="' + $this.attr('class') + '"><span>' + $this.text() + '</span></a>'; // lv
//            });
//
//            $elemSelectSrc.each(function(){
//                var $this = $(this),
//                    _disabled = $this.attr('disabled') ? "disabled " : "";
//                    _multi = multiLineFlag ? "multi-options " : "single-options ";
//                $this.after('<span id="' + customSelectId + '" class="' + _disabled + 'sec-select-custom-select ' + $this.attr('class') + '"><a class="sctble_display" href="#"><span>&nbsp;</span></a></span>');
//
//                $outerBox.append('<span id="' + customOptionId + '" class="' + _multi + 'sec-option-custom-select clr">&nbsp;</span>');
//                $('#custom-option-id' + uniqId).html(srcHtmlElemOptionDest);
//            });
//            var $elemSelectDest = $elemSelectSrc.next('span.sec-select-custom-select');
//            var $linkTarg = $elemSelectDest.find('a.sctble_display');
//            $linkTarg.children('span').html(multiLineFlag ? txtOptionSrcSelected.substr(0, settings.lengthTrancateText) : txtOptionSrcSelected);
//        });
//
//        var $menuBox = $outerBox.children('.sec-option-custom-select').hide();
//        $masterSelect.hide();
//
//        $('a.sctble_display').click(function(){
//            var $this = $(this),
//                $customSelect = $this.parent('.sec-select-custom-select');
//            $this.parent('.switch-trigger').trigger('click').prev('select').focus();
//            if($customSelect.attr('id')){//for dropdownBtn
//                var $customOption = $('#' + $customSelect.attr('id').replace("select","option"));
//                    $menuBox.hide();
//                $.calcPosAndShow($this,$customOption,0);
//                $menuBox = $customOption;
//                return false;
//            }
//        }).outerClick(function(){
//            $menuBox.hide();
//        });
//
//        $outerBox.children('.sec-option-custom-select').children('a').click(function(){
//            var $this = $(this),
//                _curTxt = $this.attr('title'),
//                _curVal = $this.attr('value'), // lv
//                $menuBox = $this.parent('.sec-option-custom-select'),
//                $pdTrigger = $('#' + $menuBox.attr('id').replace("option","select")).children('a.sctble_display'),
//                $originalSelect = $('#' + $menuBox.attr('id').replace("option","select")).prev('select'),
//                multiLineFlag = $menuBox.hasClass(settings.multilineSelectClass) ? true : false;
//
//            $pdTrigger.children().text(multiLineFlag ? _curTxt.substr(0, settings.lengthTrancateText) : _curTxt);
//
////            $originalSelect.val(_curTxt);
//            $originalSelect.val(_curVal); // lv
//
//            $originalSelect.trigger("onchange");
////            if($originalSelect.hasClass(settings.parallelFlagClass)){
////
////            }
//
//            //changeval
//            if($originalSelect.hasClass(settings.parallelFlagClass)){
//                var $master = $('.' + $originalSelect.attr('rel')),
//                    inpTxt = $originalSelect.val().replace(/\,/g,''),
//                    masterTxt = $master.text().replace(/\,/g,'');
//                if(inpTxt != masterTxt && $originalSelect.val() != $originalSelect.attr('defaultValue')){
//                    if($master.children('del').length == 0){
//                        $master.wrapInner('<del />');
//                    }
//                }else{
//                    $master.html(masterTxt);
//                    if( $originalSelect.parents('.' + settings.changeTargetClass).find('*[class^='+settings.prefixJointer+']').children('del').length == 0 ){
//                        $originalSelect.parents('.' + settings.changeTargetClass).removeClass(settings.addChangedFlagClass);
//                    }
//                }
//                var $targetCalObj = $originalSelect.parents('.' + settings.changeTargetClass).find('*[rel^='+settings.prefixJointer+']');
//                $originalSelect.parents('.' + settings.changeTargetClass).addClass(settings.addChangedFlagClass).find('.' + settings.editSumClass).text($.calcValue($targetCalObj));
//            }
//
//            $menuBox.hide();
//            return false;
//        });
//
//    };

    /**
     * クリアボタンがあるTextの機能
     */
    $.fn.customTextHasCancel = function( options ){
        var settings = {
            cancelBtnClass: "cancel"
        };
        if(options){ jQuery.extend(settings, options); };

        this.each(function(){
            var $this = $(this),
                $input = $this.find('input[type="text"]'),
                $cancel = $this.find('.' + settings.cancelBtnClass);
            $cancel.click(function (e) {
                e.preventDefault();
                $input.val('');
                $input.removeClass("has-placeholder");
                $input.focus();
            });
        });
    };

    /**
     * 連動制御text
     */
    $.fn.interlockGroup = function( options ){
        var settings = {
            targetClass: "interlock-target",
            triggerClass: "interlock-trigger",
            checkedClass: "checked"
        };
        if(options){ jQuery.extend(settings, options); };

        this.each(function(){
            var $this = $(this),
                $target = $this.find('.' + settings.targetClass),
                $allInputs = $('input[name="' + $target.attr('name') + '"]'),
                $trigger = $this.find('.' + settings.triggerClass);
            $trigger.bind({
                'focus': function () {
                    $target.attr('checked', true);
//                    $allInputs.each(function () {
//                        $('label[for=' + $(this).attr('id') + ']').removeClass(settings.checkedClass);
//                    });
//                    $('label[for=' + $target.attr('id') + ']').addClass(settings.checkedClass);
                }
            });
        });
    };

    /**
     * example例
     * 例えば：キーワードを入力
     */
    $.fn.placeHolder = function( options ){
        var settings = {
            targetAttr: "title",
            blurColor : "#999",
    		focusColor : "#333",
    		KEY_TITLE : "キーワードを入力"
        };
        $(this).each(function(){
        	var $this = $(this);

            $this.attr("title", settings.KEY_TITLE);

            if ($this.val() == "") {
            	$this.val($this.attr(settings.targetAttr));
    		}
            if ($this.val() != $this.attr(settings.targetAttr)) {
    			$this.removeClass("has-placeholder ");
    		}
            $this.focus(function() {
//            	$this.addClass("has-placeholder ");
    			if ($this.val() == $this.attr(settings.targetAttr)) {
    				$this.val("");
    				$this.removeClass("has-placeholder ");
    			}
    		}).blur(function() {
//    			$this.removeClass("has-placeholder ");
    			if ($this.val() == '') {
    				$this.addClass("has-placeholder ");
    				$this.val($this.attr(settings.targetAttr));
    			}
    		});

        });
    };

    $.fn.autogrow = function(options) {
      this.each(function() {
          var $this = $(this),
              minHeight   = $this.height(),
              lineHeight  = $this.css('lineHeight');

          var shadow = $('<div></div>').css({
              position:   'absolute',
              top:        -10000,
              left:       -10000,
              width:      $(this).width() - parseInt($this.css('paddingLeft')) - parseInt($this.css('paddingRight'))/*,
              fontSize:   $this.css('fontSize'),
              fontFamily: $this.css('fontFamily'),
              lineHeight: $this.css('lineHeight'),
              overflow:   'auto',
              resize:     'none'*/
          }).appendTo(document.body);

          var update = function() {
              var times = function(string, number) {
                  for (var i = 0, r = ''; i < number; i ++) r += string;
                  return r;
              };

              var val = this.value.replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/&/g, '&amp;')
                  .replace(/\n$/, '<br/>&nbsp;')
                  .replace(/\n/g, '<br/>')
                  .replace(/ {2,}/g, function(space) { return times('&nbsp;', space.length -1) + ' ' });

              shadow.html(val);
              $(this).css('height', Math.max(shadow.height() + 20, minHeight));
          }
          $(this).change(update).keyup(update).keydown(update);
          update.apply(this);
      });
      return $(this);
    };

    $.fn.charCount = function( options ){
        var settings = {
            dispNumClass: "counter"
        };
        if(options){ jQuery.extend(settings, options); };

        this.each(function(){
            var $this = $(this),
                $input = $this.find('textarea'),
                $counter = $this.find('.' + settings.dispNumClass);
            $input.keyup(function () {
                var c = $(this).val().length;
                $counter.text(c);
                if (c === 0) {
                    $counter.text('0');
                }
            });
        });
    };

    $.fn.showCharCount = function( options ) {
        var settings = {
            toggleClass: "counter-wrapper",
            containerClass: "td"
        };
        if(options){ jQuery.extend(settings, options); };

        var $elemCtrl = this;
        $elemCtrl.each(function() {
          var $elemCtrl = $(this);
          $elemCtrl.click(function() { $(this).closest(settings.containerClass).find('.'+settings.toggleClass).css('display', 'block'); })
          $elemCtrl.focus(function() { $(this).closest(settings.containerClass).find('.'+settings.toggleClass).css('display', 'block'); })
          $elemCtrl.blur(function() { $(this).closest(settings.containerClass).find('.'+settings.toggleClass).css('display', 'none'); });
        });
    };

//    $.fn.setHoverToggleClass = function( options ){
//        var settings = {
//            toggleClass: "status-hover"
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        this.hover(function(){
//            $this = $(this);
//            $this.addClass(settings.toggleClass);
//    },function(){
//            $this = $(this);
//            $this.removeClass(settings.toggleClass);
//    });
//    };

//    $.fn.toggleNoticeGuideance = function( options ) {
//        var settings = {
//            toggleClass: "eye-catch"
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        var $elemCntnr = this;
//        var targetToggle = '.' + settings.toggleClass;
//        $elemCntnr
//            .hover(
//                function() { $(this).find(targetToggle).show(); },
//                function() { $(this).find(targetToggle).hide(); }
//            );
//    };

//    $.fn.setDeleteBtnAction = function( options ){
//        var settings = {
//            deleteTargetClass: "delTgt",
//            addDeleteFlagClass: "status-deleted",
//            removeClass: "status-edited",
//            overlayElem: '<div class="overlay table-create-slip-deliver"><iframe></iframe><span class="overlay-label">削除</span></div>',
//            editedBtnClass: "edit-trash",
//            trashIcon: '<img height="21" width="21" alt="削除" src="/images/icon-trash.png">'
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        this.click(function (e) {
//            e.preventDefault();
//            var $this = $(this);
//            if(!$this.hasClass(settings.editedBtnClass)){
//              $this.addClass(settings.editedBtnClass).children('img').remove();
//              var $targetParent = $this.parents('.' + settings.deleteTargetClass);
//              $targetParent.addClass(settings.addDeleteFlagClass).removeClass(settings.removeClass).prepend(settings.overlayElem);
//            }else{
//              $this.removeClass(settings.editedBtnClass).append(settings.trashIcon);
//              var $targetParent = $this.parents('.' + settings.deleteTargetClass);
//              $targetParent.removeClass(settings.addDeleteFlagClass).addClass(settings.removeClass).children('div.overlay').remove();
//            }
//            return false;
//    });
//    };

//    $.fn.changeValueByInput = function( options ){
//        var settings = {
//            changeTargetClass: "delTgt",
//            addChangedFlagClass: "status-edited",
//            editSumClass: "editSum",
//            addChangedMasterClass: "changedValue"
//        };
//        if(options){ jQuery.extend(settings, options); };
//            this.change(function(){
//            var $this = $(this);
//            var $master = $('.' + $(this).attr('rel'));
//
//            var inpTxt = $this.val().replace(/\,/g,'');
//            var masterTxt = $master.text().replace(/\,/g,'');
//
//            if(inpTxt != masterTxt && $this.val() != $this.attr('defaultValue')){
//                if($master.children('del').length == 0){
//                    $master.wrapInner('<del />');
//                }
//            }else{
//                $master.html(masterTxt);
//                if( $this.parents('.' + settings.changeTargetClass).find('*[class^="elem"]').children('del').length == 0 ){
//                    $this.parents('.' + settings.changeTargetClass).removeClass(settings.addChangedFlagClass);
//                }
//            }
//            var $targetCalObj = $this.parents('.' + settings.changeTargetClass).find('*[rel^="elem"]');
//            $this.parents('.' + settings.changeTargetClass).addClass(settings.addChangedFlagClass).find('.' + settings.editSumClass).text($.calcValue($targetCalObj));
//    });
//    };

    $.fn.setAccordionSidebar = function( options ){
        var settings = {
            speed: "middle",
            contentWrapperObj: "div.order-index-accordion-content",
            contentClass: "menu-desc-close",
            contentExpandClass: "menu-desc",
            headerWrapperObj: "div.order-index-accordion-header",
            headerClass: "order-index-accordion-header-collapsed",
            headerExpandClass: "order-index-accordion-header-expanded",
            sidebarFixed: true,
            sidebarObject: "div.order-index-sub",
            footerObject: "div.page-footer-wrapper",
            fixedClass: "order-index-sub-snap-top",
            bottomClass: "order-index-sub-snap-btm"
        };
        if(options){ jQuery.extend(settings, options); };
        this.children(settings.headerWrapperObj).children('a').click(function(){
          if($(this).parent().hasClass(settings.headerExpandClass)){
           // $(settings.contentWrapperObj).slideUp(settings.speed).removeClass(settings.contentExpandClass).addClass(settings.contentClass);
            //$(settings.headerWrapperObj).removeClass(settings.headerExpandClass).addClass(settings.headerClass);
          }else{

            $(settings.contentWrapperObj).slideUp(settings.speed).removeClass(settings.contentExpandClass).addClass(settings.contentClass);
            $(settings.headerWrapperObj).removeClass(settings.headerExpandClass).addClass(settings.headerClass)
            $(this).parent('div').removeClass(settings.headerClass).addClass(settings.headerExpandClass).next().slideDown(settings.speed,function(){
              if(settings.sidebarFixed){
//                  if($(settings.sidebarObject).offset().top + $(settings.sidebarObject).height() >= $(settings.footerObject).offset().top){
                    if(navigator.userAgent.toLowerCase().match(/ie 6/)){
                      $(settings.sidebarObject).css({ top: ($(settings.sidebarObject).offset().top - $(settings.sidebarObject).height())  + "px" });
                    }else{
                      //$(settings.sidebarObject).removeClass(settings.fixedClass).addClass(settings.bottomClass);
                    }
//                  }
              }
            }).removeClass(settings.contentClass).addClass(settings.contentExpandClass);
          }
          return false;
        });
    };

//    $.fn.toggleHoverClass = function () {
//        return this.each(function () {
//            var $this           = $(this),
//                c               = this.className,
//                originalClasses = c? c.split(' '): [],
//                hoverClasses    = [],
//                hoverClass      = 'hover',
//                len             = originalClasses.length,
//                i;
//            for (i = 0; i < len; i++) {
//                hoverClasses.push(originalClasses[i] + '-' + hoverClass);
//            }
//            hoverClasses.push(hoverClass);
//            hoverClasses = hoverClasses.join(' ');
//            $this.hover(function () {
//                $this.toggleClass(hoverClasses);
//            });
//        });
//    };
    var _sidebarflag = false;
    $.fn.setFixedSidebar = function( options ) {
        var settings = {
          oSelector : this.selector,
          fixedClass: "order-index-sub-snap-top",
          bottomClass:"order-index-sub-snap-btm"
        }

        if(options){ jQuery.extend(settings, options); };
        var _ie6Flag = (navigator.userAgent.toLowerCase().match(/ie 6/)) ? true : false;
        if(_ie6Flag){ this.css('position','relative') }

        $(window).scroll(function() {
          getObject = settings.oSelector;
          var o = $("#sideMenuPanel");
			    var offset = o.offset();
			    var topPadding = 0;
          //if ($(window).scrollLeft() > 0) {
		           //_ie6Flag ? $(getObject).css({ top: "0px" }) :
	                         //$(getObject).css({ top: offset });
	            //$(getObject).removeClass(settings.bottomClass).removeClass(settings.fixedClass);

        	//}else{

	        	if($(getObject).length){
	            if($(window).scrollTop() > ($(getObject).parent().offset().top) &&
	               ($(getObject).parent().height() + $(getObject).parent().position().top - 30) > ($(window).scrollTop() + $(getObject).height())){
	              _ie6Flag ? $(getObject).css({ top: ($(window).scrollTop() - $(getObject).parent().offset().top) + "px" }) :
	                         $(getObject).removeClass(settings.bottomClass).addClass(settings.fixedClass);
	                         _sidebarflag = true;
	            }else if($(window).scrollTop() < ($(getObject).parent().offset().top)){
	              _ie6Flag ? $(getObject).css({ top: "0px" }) :
	                         $(getObject).removeClass(settings.bottomClass).removeClass(settings.fixedClass);
	                         _sidebarflag = false;
	            }else{
	              $(getObject).addClass(settings.bottomClass).removeClass(settings.fixedClass);
	              _sidebarflag = false;
	            }
	          }
        	//}





        });
    };

    $.fn.setToggleSidebar = function( options ) {
        var settings = {
          closeBtn: "#lnk-open-order-index-sub",
          openBtn: "#lnk-close-order-index-sub",
          closedClass: "order-index-sidemenu-close",
          opendClass: "order-index-sidemenu",
          closedClass1: "tbl-r02-t-910",
          opendClass1: "tbl-r02-t-752",
          closedClass2: "content-r910",
          opendClass2: "content-r752"
        };

        if(options){ jQuery.extend(settings, options); };

        $(settings.openBtn).click(function(){
          $('.' + settings.opendClass).addClass(settings.closedClass).removeClass(settings.opendClass);
	  $('.' + settings.opendClass1).addClass(settings.closedClass1).removeClass(settings.opendClass1);
	  $('.' + settings.opendClass2).addClass(settings.closedClass2).removeClass(settings.opendClass2);
          return false;
        });
        $(settings.closeBtn).click(function(){
          $('.' + settings.closedClass).addClass(settings.opendClass).removeClass(settings.closedClass);
	  $('.' + settings.closedClass1).addClass(settings.opendClass1).removeClass(settings.closedClass1);
	  $('.' + settings.closedClass2).addClass(settings.opendClass2).removeClass(settings.closedClass2);
          return false;
        });
    };

//    /**
//     * SimpleToolTip
//     */
//    $.fn.setSimpleBln = function () {
//        return this.each(function () {
//            var $this = $(this),
//                $tooltip = $($this.attr('rel')).hide();
//            if(!$this.css('display').match(/block/) && $this.css('display') != 'none'){
//                $this.css('display','inline-block');
//            }
//            $this.hover(function () {
//                $.calcPosAndShow($(this),$tooltip,0);
//                $tooltip.css({
//                    position: 'absolute',
//                    zIndex: 10
//                });
//            },function(){
//                $tooltip.hide();
//            }).click(function (e) {
//                e.preventDefault();
//            });
//        });
//    };

    // 明細のhover事件、明細の内容変更事件
    $.fn.setHoverAndEditedClass = function( options ) {
        var settings = {
          hoverClass: "hover",
          trHoverClass: "hover",
          editedClass: "selected",
          hoverEditedClass: "selected-hover",
          editTrigger: ".edit-checkbox input:text",
          btnTrigger: ".edit-checkbox input:checkbox",
          listGryF: "list-gry-f"
        };

        if(options){ jQuery.extend(settings, options); };
        var listAll = $(this);
//        this.hover(function(){
//          var $this = $(this);

//          if($this.hasClass("list-gry")){
//        	  $this.removeClass("list-gry").addClass(settings.listGryF);
//          }
//          if ($this.children().hasClass("list-gry")) {
//        	  $this.children().each(function() {
//        		  if ($(this).hasClass("list-gry")) {
//        			  $(this).removeClass("list-gry").addClass(settings.listGryF);
//        		  }
//
//        	  });
//          }
//          $this.updateListGryClass();

//          if($this.hasClass(settings.editedClass)){
//            $this.removeClass(settings.hoverClass).removeClass(settings.editedClass).addClass(settings.hoverEditedClass);
//          }else{
//            $this.addClass(settings.hoverClass);
//            $this.children("tr").addClass(settings.trHoverClass); // lv
//          }
//        },function(){
//          var $this = $(this);

//          if($this.hasClass(settings.hoverEditedClass)){
//            $this.addClass(settings.editedClass).removeClass(settings.hoverEditedClass).removeClass(settings.hoverClass);
//          }else{
//            $this.removeClass(settings.hoverClass);
//            if($this.hasClass(settings.listGryF)){
//          	  $this.addClass("list-gry").removeClass(settings.listGryF);
//            }
//            if ($this.children().hasClass(settings.listGryF)) {
//          	  $this.children().each(function() {
//          		  if ($(this).hasClass(settings.listGryF)) {
//          			$(this).addClass("list-gry").removeClass(settings.listGryF);
//          		  }
//
//          	  });
//            }
//            $this.updateListGryFClass();

//            $this.children("tr").removeClass(settings.trHoverClass); // lv
//          }
//        });

        this.each(function(){
          var $this = $(this);
          $this.find(settings.editTrigger).change(function(){
            var cnt = 0;
            var max = $this.find(settings.editTrigger).length;

            $this.find(settings.editTrigger).each(function(){
//              if($(this).val() == $(this).attr('defaultValue')){cnt++;}
                if($(this).val() == $(this).val($(this).val())[0].defaultValue){cnt++;}
            });

            if(cnt == max){
              $this.removeClass(settings.editedClass).removeClass(settings.hoverEditedClass);
//              if($this.hasClass(settings.listGryF)){
//                  $this.addClass("list-gry").removeClass(settings.listGryF);
//              }
//              if ($this.children().hasClass(settings.listGryF)) {
//              	  $this.children().each(function() {
//              		  if ($(this).hasClass(settings.listGryF)) {
//              			$(this).addClass("list-gry").removeClass(settings.listGryF);
//              		  }
//
//              	  });
//              }
//              $this.updateListGryFClass();

            }
            else{
              $this.addClass(settings.hoverEditedClass);
//              $this.updateListGryClass();
            }

          });

          $this.find(settings.btnTrigger).click(function(){

        	  var flg = 0;

              $this.find(settings.btnTrigger).each(function(){
                  if($(this).attr('checked')){flg++;}
              });

              if(flg > 0){
            	  $this.addClass(settings.editedClass);
//            	  $this.updateListGryClass();
            	  // 全選択Btn制御
            	  if ($("input.select-all-cb").length > 0 ) {
            		  if (listAll.find(listAll.find(".edit-checkbox input:checkbox:checked")).length == listAll.length) {
            			  $("input.select-all-cb").attr('checked', 'checked');
            		  }
            	  }
              }
              else {
            	  $this.removeClass(settings.editedClass).removeClass(settings.editedClass);
//            	  $this.updateListGryFClass();
            	  // 全選択Btn制御
            	  if ($("input.select-all-cb").length > 0 ) {
        			  $("input.select-all-cb").removeAttr('checked');
            	  }
              }
//            if($(this).attr('checked')){
//              $this.addClass(settings.hoverEditedClass);
//            }else{
//              $this.removeClass(settings.editedClass).removeClass(settings.hoverEditedClass);
//              if($this.hasClass(settings.listGryF)){
//                  $this.addClass("list-gry").removeClass(settings.listGryF);
//              }
//              if ($this.children().hasClass(settings.listGryF)) {
//              	  $this.children().each(function() {
//              		  if ($(this).hasClass(settings.listGryF)) {
//              			$(this).addClass("list-gry").removeClass(settings.listGryF);
//              		  }
//
//              	  });
//              }
//              $this.updateListGryFClass();
//            }
          });

        });
    };

    // 明細のhover事件2、明細の内容変更事件(2列テクスト)
    $.fn.setHoverAndEditedClass2 = function( options ) {
    	var settings = {
    	  listtdClass: "listtd",
    	  highlightClass: "highlight",
          hoverClass: "hover",
          hoverHighlightClass: "hover-highlight",
          editedClass: "textEdited",
          editedHoverClass: "edited-hover"
        };

        this.each(function(){
        	var $this = $(this);
        	var $text = $this.find("input[type='text']");

			$text.blur(function(){
            	if($text.val()>0) {
        			$this.removeClass(settings.highlightClass);
	        		$this.addClass(settings.editedClass);
	        	} else {
        			$this.removeClass(settings.editedClass);
	        		$this.addClass(settings.highlightClass);
	        	}
            });

	        if($text.val()>0) {
	        	$this.removeClass(settings.highlightClass);
	        	$this.addClass(settings.editedClass);
	        }
        });


        this.hover(function(){
            var $this = $(this);
            // mouseout
            if($this.hasClass(settings.hoverClass) || $this.prev().hasClass(settings.hoverClass)){
        		$this.removeClass(settings.hoverClass);
        		$this.prev().removeClass(settings.hoverClass);

            // mouseover
            } else {
            	if ($this.hasClass(settings.highlightClass)) {
            		$this.prev().addClass(settings.hoverClass);
            	} else if ($this.hasClass(settings.editedClass)){
            		$this.prev().addClass(settings.hoverClass);
            	} else {
            		$this.addClass(settings.hoverClass);
            	}
            }
        });
    };

    // 全選択明細変色
    $.fn.setEditedClassBySelectAll = function() {
    	var settings = {
    	          editedClass: "selected",
    	          listGryF: "list-gry-f"
    	};
    	var $this = $(this);
    	$this.click(function(){
            if($(this).attr('checked') || $(this).hasClass("All-chk")){
            	$(".data-list .edit-checkbox input[type='checkbox'],.data-list02 .edit-checkbox input[type='checkbox']").each(function(){
            		if ($(this).attr('checked')) {
            			var targetObj = $(this).parents(".slip-summary-a");
            			targetObj.addClass(settings.editedClass);
//            			if(targetObj.hasClass("list-gry")){
//            				targetObj.removeClass("list-gry").addClass(settings.listGryF);
//            			}
//            			if (targetObj.children().hasClass("list-gry")) {
//            				targetObj.children().each(function() {
//            	        		  if ($(this).hasClass("list-gry")) {
//            	        			  $(this).removeClass("list-gry").addClass(settings.listGryF);
//            	        		  }
//            	        	  });
//            	        }
//            			targetObj.updateListGryClass();
            		}
            	});
            }else{
            	$(".data-list .edit-checkbox input[type='checkbox'],.data-list02 .edit-checkbox input[type='checkbox']").each(function(){
            		if (!$(this).attr('checked')) {
            			var targetObj = $(this).parents(".slip-summary-a");
            			targetObj.removeClass(settings.editedClass);
//            			if(targetObj.hasClass(settings.listGryF)){
//            				targetObj.addClass("list-gry").removeClass(settings.listGryF);
//            			}
//            			if (targetObj.children().hasClass(settings.listGryF)) {
//            				targetObj.children().each(function() {
//            	          		  if ($(this).hasClass(settings.listGryF)) {
//            	          			$(this).addClass("list-gry").removeClass(settings.listGryF);
//            	          		  }
//            	          	});
//            	        }
//            			targetObj.updateListGryFClass();
            		}
            	});
            }
          });
    };

	// 明細checkbox更新関数
    $.fn.updateListEditedClass = function() {
    	var settings = {
    	          editedClass: "selected",
    	          listGryF: "list-gry-f"
    	        };
    	$(this).each(function(){
    		if ($(this).attr('checked')) {
    			var targetObj = $(this).parents(".slip-summary-a");
    			targetObj.addClass(settings.editedClass);
//    			targetObj.updateListGryClass();
    		}
    		else {
    			var targetObj = $(this).parents(".slip-summary-a");
    			targetObj.removeClass(settings.editedClass);
//    			targetObj.updateListGryFClass();
    		}
    	});
    };

    // setListColor
    $.fn.updateListGryClass = function() {
    	var settings = {
    	          editedClass: "selected",
    	          listGryF: "list-gry-f"
        };
		targetObj = $(this);
		//alert(targetObj.html());
		if(targetObj.hasClass("list-gry")){
			targetObj.removeClass("list-gry").addClass(settings.listGryF);
		}
		if (targetObj.children().hasClass("list-gry")) {
			targetObj.children().each(function() {
    		  if ($(this).hasClass("list-gry")) {
    			  $(this).removeClass("list-gry").addClass(settings.listGryF);
    		  }
          });
        }
    };

    // setListColor
    $.fn.updateListGryFClass = function() {
    	var settings = {
    	          editedClass: "selected",
    	          listGryF: "list-gry-f"
        };
		targetObj = $(this);
		if(targetObj.hasClass(settings.listGryF)){
			targetObj.addClass("list-gry").removeClass(settings.listGryF);
		}
		if (targetObj.children().hasClass(settings.listGryF)) {
			targetObj.children().each(function() {
          		  if ($(this).hasClass(settings.listGryF)) {
          			$(this).addClass("list-gry").removeClass(settings.listGryF);
          		  }
          	});
        }
    };

    /* 指定日付文字列の値を保存する */
    var mstrSaveFieldValue;

    // 曜日取得
    $.fn.getWeekName = function() {
		var weekday = new Array(7);
        weekday[0] = "(日)";
        weekday[1] = "(月)";
        weekday[2] = "(火)";
        weekday[3] = "(水)";
        weekday[4] = "(木)";
        weekday[5] = "(金)";
        weekday[6] = "(土)";

        $(this).each(function () {
        	var $this = $(this);
        	var w = new Date($this.val()).getDay();
        	var wn = weekday[w];
        	$("#week-" + $this.attr("id")).html(wn);
        });

        $(this).blur(function () {
        	var $this = $(this);
        	// 日付項目入力チェエク、失敗の場合、前回の値を設定する
        	$this.CheckInputText();
        	var w = new Date($this.val()).getDay();
        	var wn = weekday[w];
        	$("#week-" + $this.attr("id")).html(wn);
        	if ($this.val() == "") {
            	$("#week-" + $this.attr("id")).html("");
        	}
        });

        $(this).focus(function () {
        	var strTime = EmpTrim($(this).val());
        	var reg=new RegExp("-","g");
        	var strTimebk = '';
        	var y, m, d;
            var new_y, new_m, new_d;
            var nowyear = new Date;
        	strTime = strTime.replace(reg,"/");
        	if(strTime.indexOf('/') < 0){
        		if(strTime.length==8){
	    			strTimebk = strTime;
	                strTime = strTimebk.substring(0,4)+"/"+strTimebk.substring(4,6)+"/"+strTimebk.substring(6,8);
	            }
            }
        	if (!strTime.match(/^(([0-9]{2,4})\/|)([0-9]{1,2})\/([0-9]{1,2})$/)){
        		mstrSaveFieldValue = "";
        		$(this).val("");
        	} else {
        		y = RegExp.$2;
	            m = RegExp.$3;
	            d = RegExp.$4;
	            if (y == ''){
	                y = nowyear.getFullYear();
	            } else {
	            	y = String(nowyear.getFullYear()).substring(0,4-y.length) + y;
	            }

	            if (IsDate(y, RegExp.$3, RegExp.$4)){
	                new_y = ('0000' + y); new_y = new_y.substring(new_y.length-4);
	                new_m = ('00' + m);   new_m = new_m.substring(new_m.length-2);
	                new_d = ('00' + d);   new_d = new_d.substring(new_d.length-2);
	                $(this).val(new_y + '/' + new_m + '/' + new_d);
	            }
            	mstrSaveFieldValue = $(this).val();
        	}
        	//$(this).CheckInputText();
        });

        $(this).keyup(function(){
        	var $this = $(this);
        	if ($this.val().length!=10) {
        		$("#week-" + $this.attr("id")).html("");
        	} else {
            	var w = new Date($this.val()).getDay();
            	var wn = weekday[w];
            	$("#week-" + $this.attr("id")).html(wn);
        	}
        });
    };

    /* 日付項目入力チェエク、失敗の場合、前回の値を設定する */
    $.fn.CheckInputText = function()
    {
       var $this = $(this);
       var nowyear = new Date;
       var str = EmpTrim($this.val());
       $this.val(str);
       if (str == '') return;
       var y, m, d;
       var new_y, new_m, new_d;
       if (str.match(/^(([0-9]{2,4})\/|)([0-9]{1,2})\/([0-9]{1,2})$/)){
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
               $this.val(new_y + '/' + new_m + '/' + new_d);
               return;
           }
           else
           {
               $this.val(mstrSaveFieldValue);
           }
       }
       else
       {
           $this.val(mstrSaveFieldValue);
       }
    };

    $.fn.EmpTrim  = function(pstrVal) {
        pstrVal = pstrVal.replace(/^[ 　]+/, '');
        pstrVal = pstrVal.replace(/[ 　]+$/, '');
        return(pstrVal);
    };

    $.fn.IsDate = function(y,m,d) {
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
    };

    // 曜日取得
    $.fn.getMDWeekName = function() {
		var weekday = new Array(7);
        weekday[0] = "(日)";
        weekday[1] = "(月)";
        weekday[2] = "(火)";
        weekday[3] = "(水)";
        weekday[4] = "(木)";
        weekday[5] = "(金)";
        weekday[6] = "(土)";

        var nowDate = new Date();
        $(this).each(function () {
        	var $this = $(this);
        	var w = new Date(nowDate.getFullYear()+ "/" + $this.val().replace('月','/').replace('日','')).getDay();
        	var wn = weekday[w];
        	$("#week-" + $this.attr("id")).html(wn);
        });

        $(this).blur(function(){
	        var $this = $(this);
	        var w;
			if ($this.val().length==10) {
				$("#hid-" + $this.attr("id")).val($this.val());
	        	w = new Date($this.val()).getDay();
	        	var formatDate = $this.val().substring(5,7) + "月" + $this.val().substring(8,10)+ "日";
	        	$this.val(formatDate);
			} else {
				var textDate = $this.val().replace('月','').replace('日','');
				if (textDate!= '') {
					$("#hid-" + $this.attr("id")).val(nowDate.getFullYear()+ "/" + textDate.substring(0,2) + "/" + textDate.substring(2,4));
					w = new Date(nowDate.getFullYear()+ "/" + textDate.substring(0,2) + "/" + textDate.substring(2,4)).getDay();
					$this.val(textDate.substring(0,2) + "月" + textDate.substring(2,4)+ "日");
				} else {
					$("#hid-" + $this.attr("id")).val("");
				}
			}
        	var wn = weekday[w];
	        $("#week-" + $this.attr("id")).html(wn);

		});

        $(this).keyup(function(){
        	var $this = $(this);
        	if ($this.val().length==0) {
        		$("#week-" + $this.attr("id")).html("");
        	};
        });
    };

    // Tooltip
    $.fn.setTooltip = function() {
    	$(this).each(function() {
    		$(this).bind({
    			mouseover:function(eve) {
    			   var tooltipText = $(this).attr("data-tooltip");
    		  	   if(tooltipText == undefined) {
                       tooltipText = $(this).attr("alt");
                      }
    				if ($(this).attr("link")) {
    					//tooltip2.show($(this).attr("alt"), 200,$(this).attr("link"),true,eve);
    					 tooltip2.show(tooltipText, 234,$(this).attr("link"),true,eve);
    				}
    				else {
    					//tooltip.show($(this).attr("alt"),false,true,eve);
    					 tooltip.show(tooltipText,false,true,eve);
    				}
    			},

    			mouseout:function() {
    				if ($(this).attr("link")) {
    					tooltip2.hide();
    				}
    				else {
    					tooltip.hide();
    				}
    			}
    		});
    	});
    };

    $.fn.toggleDisplay = function (options) {
        var opts = $.extend({
                trigger: '.toggle-display-trigger',
                panel: '.toggle-display-panel',
                expandedClass: 'toggle-display-expanded'
            }, options);
        return this.each(function () {
            var $this = $(this),
                $trigger = $this.find(opts.trigger),
                $panel = $this.find(opts.panel).hide();
            if ($this.hasClass(opts.expandedClass)) {
                $panel.show();
            }
            $trigger.bind('click', function (e) {
                e.preventDefault();
                $panel.toggle();
                $this.toggleClass(opts.expandedClass);
            });
        });
    };

    $.fn.toggleDisplaySiblings = function (options) {
        var opts = $.extend({
                siblings: 'ul',
                collapsedClass: 'status-collapsed',
                expandedClass: 'status-expanded'
            }, options);
        return this.click(function () {
          if($(this).hasClass(opts.expandedClass)){
            $(this).removeClass(opts.expandedClass).addClass(opts.collapsedClass).siblings(opts.siblings).hide();
          }else{
            $(this).addClass(opts.expandedClass).removeClass(opts.collapsedClass).siblings(opts.siblings).show();
          }
          return false;
        });
    };

    $.fn.openDialogByOption = function( options ){
        var settings = {
            triggerClass: "open-dialog-modal",
            urlAttr: "rel",
            iframeFlagClass: "blank"
        };
        if(options){ jQuery.extend(settings, options); };

        this.each(function(){
            $(this).parent('select').change(function(){
                var $this = $(this),
                    $option = $this.children(':selected');
                if( $option.hasClass(settings.triggerClass) && $option.attr(settings.urlAttr) ){
                    var windowBlank = $.openDialogBlankSetting( $option.attr(settings.urlAttr) );
                    return false;
                }
            });
        });
    };

    // updateTwoCheckList
    $.fn.updateTwoCheckList = function(options) {
        $(this).each(function(){
        	$(this).updateTwoCheck();
            $(this).click(function(){
            	$(this).updateTwoCheck();
            });
        });
    };

    // updateTwoCheck
    $.fn.updateTwoCheck = function(options) {

        // 画面パターンＢ の場合、除外する
        if (__isDispB) { return; }

    	var settings = {
    			hilightNochkClass: "highlight-nochk",
    			hilightClass: "highlight",
    			selectedClass: "selected"
            };
    	var $this = $(this);
        if ($this.attr("checked") == "checked") {
        	$this.parents("td").eq(0).removeClass(settings.hilightNochkClass);
        	$this.parents("td").eq(0).addClass(settings.hilightClass);
        	$this.parents("tr").eq(0).addClass(settings.selectedClass);
        } else {
        	$this.parents("td").eq(0).removeClass(settings.hilightClass);
        	//$this.parents("tr").eq(0).removeClass(settings.selectedClass);
        	$this.parents("td").eq(0).addClass(settings.hilightNochkClass);
        }
    };

    // updateMainLineTextList
    $.fn.updateMainLineTextList = function(options) {
        $(this).each(function(){
        	$(this).updateMainLineText();
            $(this).blur(function(){
            	$(this).updateMainLineText();
            });
        });
    };

    // updateMainLineText
    $.fn.updateMainLineText = function(options) {
    	var settings = {
			hilightNochkClass: "highlight-nochk",
			hilightClass: "highlight",
			selectedClass: "selected"
	    };
    	var $this = $(this);
        if ($this.val().length > 0) {
        	$this.parents("td").eq(0).removeClass(settings.hilightNochkClass);
        	$this.parents("td").eq(0).addClass(settings.hilightClass);
        	$this.parents("tr").eq(0).addClass(settings.selectedClass);
        } else {
        	$this.parents("td").eq(0).removeClass(settings.hilightClass);
        	//$this.parents("tr").eq(0).removeClass(settings.selectedClass);
        	$this.parents("td").eq(0).addClass(settings.hilightNochkClass);
        }
    };

//    $.fn.formsubmit = function( options ) {
//        var settings = {
//            widthWin: 720,
//            heightWin: 630
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        var $this = this;
//
//        $this.each(
//             function() {
//                var $elem = $(this);
//                $elem
//                     .submit(
//                         function() {
//                        	 alert("123");
////                             	if ($this.val() == $this.attr(settings.targetAttr)) {
////                             	}
//                         return false;
//                     }
//                 )
//             }
//         );
//    };

//    $.fn.openDialogOperationChild = function(options) {
//        var settings = {
//            widthWin: 720,
//            heightWin: 720
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        var $elemCtrl = this;
//
//        var nameUA = navigator.userAgent.toLowerCase();
//
//        /* UA Env. */
//        var isIe6 = nameUA.match(/ie 6/) ? true : false;
//        var isIe7 = nameUA.match(/ie 7/) ? true : false;
//        var isIe67 = (isIe6 || isIe7) ? true : false;
//        var isWin2k = nameUA.match(/windows nt 5\.0/) ? true : false;
//        var isWin98 = nameUA.match(/windows 98/) ? true : false;
//
//        var isPlatformLegacy = (isIe6) ? true : false;
//
//        $elemCtrl
//            .each(
//                function() {
//                    var $elemCtrl = $(this);
//
//                    if(!isPlatformLegacy) {
//                        $elemCtrl.nyroModal(options);
//                    }
//                    else {
//                        $elemCtrl.openDialogBlank(settings);
//                    }
//                }
//            );
//    };
//
//    $.fn.openDialogBlank = function( options ) {
//        var settings = {
//            widthWin: 720,
//            heightWin: 630
//        };
//        if(options){ jQuery.extend(settings, options); };
//
//        var $elemCtrl = this;
//
//        $elemCtrl.each(
//             function() {
//                var $elemCtrl = $(this);
//                 $elemCtrl
//                     .click(
//                         function() {
//                             var hrefTarg = $elemCtrl.attr('href');
//                             var windowBlank = $.openDialogBlankSetting( hrefTarg, settings.widthWin, settings.heightWin );
//                         return false;
//                     }
//                 )
//             }
//         );
//    };

    $.extend({
      openDialogBlankSetting: function(hrefTarg, widthWin, heightWin) {
        if(! widthWin || widthWin == '' || widthWin == null) { widthWin = 720; }
        if(! heightWin || heightWin == '' || heightWin == null) { heightWin = 720; }

        return window.open(
             hrefTarg
            , 'dialogblank'
            , "toolbar=no\
            , location=no\
            , status=no\
            , menubar=no\
            , scrollbars=yes\
            , width="+widthWin+"\
            , height="+heightWin+"\
            , resizable=yes"
        ).focus();
      },

      setComma: function(num) {
        if((isNaN(num) != false ) || (typeof num == "undefined") || (num == "")) {
            return "0";
        }

        var partNum = 3;
        var mark = ",";
        var minus = false;

        var workNum = num + "";

        if(num < 0){
          minus = true;

        }

        var dig = workNum.split(".");
        var newNum = dig[0];

        var lengNum = newNum.length;

        if(minus){
          lengNum--;
        }

        for(i=lengNum; i>0; i--){
            if(i % partNum == 0 && i != lengNum){
                ltNum = newNum.slice(0, -i);
                rtNum = newNum.slice(-i);
                newNum = ltNum + mark + rtNum;
            }
        }

        if(typeof dig[1] != "undefined"){
          newNum += "." + dig[1];
        }
        return newNum;
      },

      calcValue: function($targetCalObj) {
          _sumVal = 0;

        $targetCalObj.each(function(){
          var _val = parseInt($(this).val().replace(/\,/g,''));
          if(_val || _val == 0){
            if(_sumVal == 0){_sumVal++;}
            _sumVal *= _val;
          }
        });

        return $.setComma(_sumVal);
      },

      calcPosAndShow: function($this,$dispTarget,adjustTop) {
        var offset = $this.offset(),
          scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
          scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
          clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
          clientWidth = document.documentElement.clientWidth || document.body.clientWidth,
          positionTop = (clientHeight / 2 < (offset.top - scrollTop))? offset.top - $dispTarget.outerHeight() + adjustTop: offset.top + $this.outerHeight() - adjustTop,
          //positionLeft = (clientWidth < (offset.left + $dispTarget.outerWidth()))? offset.left - $dispTarget.outerWidth() + $this.outerWidth(): offset.left;
          positionLeft = (clientWidth / 2 < (offset.left - scrollLeft))? offset.left - $dispTarget.outerWidth() + $this.outerWidth(): offset.left;
        $dispTarget.show().css({top:positionTop,left:positionLeft});

      },

      preloadImg: function(fnSrc) {
        var objImg = new Image();
        objImg.src = fnSrc;
      },

      preloadCustomTextFocus: function() {
        $.preloadImg('../images/bg-textarea-tl-border-blue.png');
        $.preloadImg('../images/bg-textarea-tr-border-blue.png');
        $.preloadImg('../images/bg-textarea-br-border-blue.png');
        $.preloadImg('../images/bg-textarea-bl-border-blue.png');
      }

    });
  // =============================== /Define Rendering Routines

})(jQuery);

/**
 * jQuery custom event "outerClick".
 * @author David Brockman Smoliansky http://littleroom.se/
 * @license GNU Lesser General Public License: http://creativecommons.org/licenses/LGPL/2.1/
 * @version 1.1
 * 2009/02/27
 *
 * The outerClick event is fired when an element outside of the target element is clicked.
 *
 * Usage:
 * $(selector).bind("outerClick", fn);   // Bind the function fn to the outerClick event on each of the matched elements.
 * $(selector).outerClick(fn);           // Bind the function fn to the outerClick event on each of the matched elements.
 * $(selector).trigger("outerClick");    // Trigger the outerClick event on each of the matched elements.
 * $(selector).outerClick();             // Trigger the outerClick event on each of the matched elements.
 * $(selector).unbind("outerClick", fn); // Unbind the function fn from the outerClick event on each of the matched elements.
 * $(selector).unbind("outerClick");     // Unbind all outerClick events from each of the matched elements.
 */

/* global jQuery */
(function ($, elements, OUTER_CLICK) {

  /**
   * Check if the event should be fired.
   * @param {Object} event  The click event.
   * @private
   */
  function check(event) {
    for (var i = 0, l = elements.length, target = event.target, el; i < l; i++) {
      el = elements[i];
      if (el !== target && !(el.contains ? el.contains(target) : el.compareDocumentPosition ? el.compareDocumentPosition(target) & 16 : 1)) {
        $.event.trigger(OUTER_CLICK, event, el);
      }
    }
  }


  $.event.special[OUTER_CLICK] = {

    setup: function () {
      var i = elements.length;
      if (!i) {
        $.event.add(document, 'click', check);
      }
      if ($.inArray(this, elements) < 0) {
        elements[i] = this;
      }
    },

    teardown: function () {
      var i = $.inArray(this, elements);
      if (i >= 0) {
        elements.splice(i, 1);
        if (!elements.length) {
          $.event.remove(document, 'click', check);
        }
      }
    }

  };


  /**
   * Event helper outerClick
   *
   * @param  {Function} [fn]  A function to bind to the outerClick event on each of the matched elements.
   *                          If fn is omitted the event is triggered.
   * @return {jQuery}         Returns the jQuery object.
   */
  $.fn[OUTER_CLICK] = function (fn) {
    return fn ? this.bind(OUTER_CLICK, fn) : this.trigger(OUTER_CLICK);
  };

})(jQuery, [], 'outerClick');

(function($) {
    // =============================== Main Routine - Initialize Screen Parts
    $(function() {

		// IE6or7判別
		var isIe67 = gfIsIE67();

        // ラジオボタン・チェックボックスの背景色
        // (IE6or7 かつ 画面パターンＡ) or 画面パターンＣ の場合、除外する
        if (!((isIe67 && __isDispA) || __isDispC || (isIe67 && __isDispD))) {
            $("span.cstm-checkbox, span.cstm-radio").registCustomCheck();
            $(".list-check div .list-checkbox, .list-check div .list-radio").registListCheck();
        }

        // マウスオーバー時に欄内変色(コメント誤り？マウスオーバー時に説明文を表示)
		// 画面パターンＣ の場合、除外する
        if (!__isDispC) {
        	$("td.guideance").registStatusHover();
        }

        // 検索キー入力
		// 画面パターンＣ の場合、除外する
        if (!__isDispC) {
	        $('span.custom-text-has-cancel').customTextHasCancel();
	    }

        $('input.has-placeholder').placeHolder();

		// 画面パターンＣ の場合、除外する
        if (!__isDispC) {
	        $('span.interlock-group').interlockGroup();
	    }

        // 明細全選択チェック、明細チェックボックスのセル色変更
        // 画面パターンＢ or 画面パターンＣの場合、除外する
        if (!(__isDispB || __isDispC)) {
            $("input.select-all-cb, a.All-chk, a.All-nochk").setEditedClassBySelectAll();
            $(".data-list .edit-checkbox input[type='checkbox'],.data-list02 .edit-checkbox input[type='checkbox']").updateListEditedClass();
        }

		// 画面パターンＣ の場合、除外する
        if (!__isDispC) {
	        // 曜日取得
	        $("input.date-unit").getWeekName();
	        // 曜日取得(yyyymmdd/mm月dd日)
	        $("input.dateMD-unit").getMDWeekName();
		}

		// 画面パターンＣ の場合、除外する
        if (!__isDispC) {
	        // tooltip
	        $(".tooltip-over").setTooltip();
		}

        // サイドメニューの処理
        // 画面パターンＡ の場合のみ、適用する
        if (__isDispA) {
            if($('#accordion-sidebar').size()){

                // setAccordionSidebar
                $('div.order-index-accordion').setAccordionSidebar();

                // IE6or7の場合、除外する
                if (!isIe67) {
                    // サイドメニュー固定化処理
                    $('div.scrollFlg').setFixedSidebar();
                }

                // setToggleSidebar
                $('div.order-index-sub').setToggleSidebar();

                // SimpleTree
                $(".root, .folder").click(function() {
                    $(this).parent().children('ul').each(function(){
                        $(this).toggle();
                    });
                    $(this).parent("li").toggleClass("expandable");
                });
            }
        }

        // 明細のテキストボックス、チェックボックスの入力時のセル色変更
        // 画面パターンＢ or 画面パターンＣの場合、除外する
        if (!(__isDispB || __isDispC)) {
            // updateTwoCheckList
            $('input.twoCheck').updateTwoCheckList();

            // mainLineText
            $('input.mainLineText').updateMainLineTextList();
        }

        //
        if (!(__isDispB || __isDispC)) {
          $('tbody.slip-summary-a, tr.slip-summary-a, tbody.slip-summary-b, div.slip-summary-b').setHoverAndEditedClass();
          $('tbody.slip-summary-a, tr.slip-summary-a, tbody.slip-summary-b, div.slip-summary-b').mousewheel(function(event, delta) {});
		}
    });
})(jQuery);

$(function(){
	// 画面パターンＣ の場合、除外する
	//if (!__isDispC) {
		//if($("#divRole").length>0 && $("#memberRole").length > 0){
			//$("#divRole").removeClass("urite");
			//$("#divRole").removeClass("kaite");
			//if($("#memberRole").val()=="B"){
				//$("#divRole").addClass("kaite");
			//}
			//if($("#memberRole").val()=="S")
			//{
				//$("#divRole").addClass("urite");
			//}
		//}
	//}

	//if (!__isDispC) {
		if($("#divRole").length>0 && memberRole!=""){
			$("#divRole").removeClass("urite");
			$("#divRole").removeClass("kaite");
			if(memberRole=="B"){
				$("#divRole").addClass("kaite");
			}
			if(memberRole=="S")
			{
				$("#divRole").addClass("urite");
			}
		}
	//}

	//radioのlastLineを削除
	// 画面パターンＣ の場合、除外する
	if (!__isDispC) {
		$("span.have-line").each(function(){
		    $(this).find("span.lineflag").last().remove();
		});
	}
});

$(function(){
  var ua = window.navigator.userAgent.toLowerCase();
  if((ua.indexOf("safari") != -1) || (ua.indexOf("firefox") != -1)) {
    $(window).unload(function(){});
  }
});


function getPrePage() {
	if (window.opener == null) {
		return window.parent;
	}
	else {
		return window.opener;
	}
}

function closeModalWindow() {
	if (window.opener == null) {
		parent.closeModal();
	}
	else {
		window.close();
	}
}

function updateCheckBox() {
	$.fn.updateCheckBox();
}

function updateListCheckBox() {
	$(".data-list .edit-checkbox input[type='checkbox'],.data-list02 .edit-checkbox input[type='checkbox']").updateListEditedClass();
}


//***********************************************************************************************************************
//処理概要　：ツールチップ関連
//
//ファイル名：/tooltip/script.js
//作　成　者：
//作　成　日：
//備　　　考：このファイルは.NET側に共有しています。
//
//改定履歴　：
//変更日_______担当者______変更内容____________________________________________________________________________________
//2010/09/01	Y.Aso		全面改修(背景、枠線、幅指定可能、ウィンドウの大きさに合わせて表示位置決定etc)
//2011/07/08	Y.Kimura	店長なびの説明用の幅に合わせた別関数を追加
//
//***********************************************************************************************************************

var tooltip=function(){
	var classnm = 'tooltip';
	var top = 3;
	var left = 3;
	var defW = 234;		//デフォルト幅
	var decW;			//決定した幅
	var speed = 10;
	var timer = 20;
	var endalpha = 100;
	var alpha = 0;
	var tt,h;

	return{
		show:function(v,w,newUIFlg,eve){
			if (newUIFlg) classnm = 'sec-src-bln common-tip';
			if(tt == null){
				if (newUIFlg) {
					var wScript = "<div class=\"bln\"><p class=\"tx-bln\" id=\"bln-comment-label\"></p></div>";
				}
				tt = document.createElement('div');
				tt.className = classnm;
				document.body.appendChild(tt);
				if (newUIFlg) $("div.common-tip").append(wScript);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				//document.onmousemove = this.pos;
				tt.onmouseover = function(){
					clearInterval(tt.timer);
					tt.timer = setInterval(function(){tooltip.fade(1)},timer);
				}
				tt.onmouseout = function(){tooltip.hide();}
			}
			tt.style.display = 'block';
			if (newUIFlg) {
				$("#bln-comment-label").html(v);
			} else {
				tt.innerHTML = v;
			}

			if(w){
				decW = w;
			}else{
				decW = defW;
			}
			tt.style.width = decW + 'px';
			h = parseInt(tt.offsetHeight);
			tooltip.pos(eve);
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);
		},

		pos:function(eve){

			var root, userAgent;

			//ブラウザ判定
			userAgent = navigator.userAgent.toLowerCase();
			if(userAgent.indexOf('safari') != -1){
				root = document.body;
			}else if(userAgent.indexOf('msie') != -1){
				if(document.compatMode == 'BackCompat') {
					//後方互換モード
					root = document.body;
				}else{
					//標準準拠モード
					root = document.documentElement;
				}
			}else if(userAgent.indexOf('firefox') != -1){
				root = document.documentElement;
			}

			var u = root ? root.clientWidth : window.innerWidth;
			var l = root ? root.clientHeight : window.innerHeight;
			var scrollX = root ? root.scrollLeft : 0;
			var scrollY = root ? root.scrollTop : 0;
			//20120912--大島のメールによって-add-s
			if(eve == null) {
             eve = event;
           }
           //20120912--大島のメールによって-add-e
			var cursorX = eve.clientX;
			var cursorY = eve.clientY;
			var spaceY = 0;	//カーソル位置とツールチップの間に空けるスペース#13261
			var barW = 15;		//縦スクロールバーの幅(safari対策)
			var X,Y;

			//Y軸位置
			if(cursorY - h - spaceY > 0) {
				//カーソル上部に表示スペースあり
				Y = (scrollY + cursorY) - h - spaceY;
			}else if(l - cursorY > h + spaceY) {
				//カーソル下部に表示スペースあり
				Y = (scrollY + cursorY) + spaceY;
			}else{
				Y = scrollY;
			}

			//X軸位置
			if(cursorX + decW + barW < u) {
				//カーソル左部に表示スペースあり
				X = scrollX + cursorX;
			}else if(decW + barW > u) {
				//ツールチップ幅がウィンドウ幅より大きい
				X = scrollX;
			}else{
				X = (scrollX + u) - (decW + barW);
			}

			tt.style.top = Y + 'px';
			tt.style.left = X + 'px';

		},

		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){
					tt.style.display = 'none';
				}
			}
		},

		hide:function(){
		    if (tt == null) return;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
		}
	};
}();

var tooltip2=function(){
	var classnm = 'tooltip';
	var defW = 460;		//デフォルト幅
	var top = 3;
	var left = 3;
	var decW;			//決定した幅
	var speed = 10;
	var timer = 20;
	var endalpha = 95;
	var alpha = 0;
	var tt,h;

	return{
		show:function(v,w,l,newUIFlg,eve){
			if (newUIFlg) {
				var classnm = 'sec-src-bln link-tip';
				var defW = 300;		//デフォルト幅
			}
			if(tt == null){
				if (newUIFlg) {
				//20120914--大島のメールによって-upd-s
				//var wScript = "<div class=\"bln\"><p class=\"tx-bln\" id=\"bln-comment-label\"></p></div>";
				var wScript = "<div class=\"bln\">";
				wScript += "<p class=\"tx-bln\" id=\"bln-comment-label2\"></p>";
				wScript += "<p class=\"tx-bln\" ><a id=\"bln-comment-link2\" class=\"item\" href=\"javascript:void(0)\">詳しくはこちら</a></p>";
				wScript += "</div>";
				//20120914--大島のメールによって-upd-e
				}
				tt = document.createElement('div');
				tt.className = classnm;
				document.body.appendChild(tt);
				if (newUIFlg) $("div.link-tip").append(wScript);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				//document.onmousemove = this.pos;
				tt.onmouseover = function(){
					clearInterval(tt.timer);
					tt.timer = setInterval(function(){tooltip2.fade(1)},timer);
				}
				tt.onmouseout = function(){tooltip2.hide();}
			}
			tt.style.display = 'block';

			if (newUIFlg) {
				if (v.length >= 46) {
					v = v.substring(0, 45) + "...";
				}
				$("#bln-comment-label2").html(v);
				if (l != undefined) {
    					//tooltip2.show($(this).attr("alt"), 200,$(this).attr("link"),true,eve);
    					$("#bln-comment-link2").off("click");
						$("#bln-comment-link2").on("click",function(event){
							openModal(l);
							return false;
						})
    				}
			} else {
				tt.innerHTML = v;
			}
			if(w){
				decW = w;
			}else{
				decW = defW;
			}
			tt.style.width = decW + 'px';
			h = parseInt(tt.offsetHeight);
			tooltip2.pos(eve);
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip2.fade(1)},timer);
		},

		pos:function(eve){

			var root, userAgent;

			//ブラウザ判定
			userAgent = navigator.userAgent.toLowerCase();
			if(userAgent.indexOf('safari') != -1){
				root = document.body;
			}else if(userAgent.indexOf('msie') != -1){
				if(document.compatMode == 'BackCompat') {
					//後方互換モード
					root = document.body;
				}else{
					//標準準拠モード
					root = document.documentElement;
				}
			}else if(userAgent.indexOf('firefox') != -1){
				root = document.documentElement;
			}
           //20120912--大島のメールによって-add-s
			if(eve == null) {
             eve = event;
           }
           //20120912--大島のメールによって-add-e
			var u = root ? root.clientWidth : window.innerWidth;
			var l = root ? root.clientHeight : window.innerHeight;
			var scrollX = root ? root.scrollLeft : 0;
			var scrollY = root ? root.scrollTop : 0;
			var cursorX = eve.clientX;
			var cursorY = eve.clientY;
			var spaceY = 0;	//カーソル位置とツールチップの間に空けるスペース#13261
			var barW = 15;		//縦スクロールバーの幅(safari対策)
			var X,Y;

			//Y軸位置
			if(cursorY - h - spaceY > 0) {
				//カーソル上部に表示スペースあり
				Y = (scrollY + cursorY) - h - spaceY;
			}else if(l - cursorY > h + spaceY) {
				//カーソル下部に表示スペースあり
				Y = (scrollY + cursorY) + spaceY;
			}else{
				Y = scrollY;
			}

			//X軸位置
			if(cursorX + decW + barW < u) {
				//カーソル左部に表示スペースあり
				X = scrollX + cursorX;
			}else if(decW + barW > u) {
				//ツールチップ幅がウィンドウ幅より大きい
				X = scrollX;
			}else{
				X = (scrollX + u) - (decW + barW);
			}

			tt.style.top = Y + 'px';
			tt.style.left = X + 'px';

		},

		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){
					tt.style.display = 'none';
				}
			}
		},

		hide:function(){
		    if (tt == null) return;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip2.fade(-1)},timer);

		}
	};
}();

// JavaScript Document
$(function() {
	// 画面パターンＣ の場合、除外する
	if (!__isDispC || __isDispE) {
		$(".menu-pulldown-r li,.menu-pulldown-l li,.pulldown-simple-r li,.pulldown-simple-l li,.pulldown-all-print-r li,.pulldown-all-print-l li").hover(function() {
			if (!$(this).find("span").hasClass("elem-disable")) {
				$(this).children('ul').show();
			};
		}, function() {
			$(this).children('ul').hide();
		});
	}
});

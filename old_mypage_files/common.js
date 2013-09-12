var mobjWindowHandle;
var mblnWiondowOpen = false;
var mstrSaveFieldValue;

/***************************************************************************************************
 機　能　：ブラウザをオープンします．
 引　数　：1. [I  ] - string pstrUrl - オープンする URL
 　　　　　2. [I  ] - string pstrWindowName - オープンするウィンドウ名
 　　　　　3. [I  ] - string pstrWindowWidth - オープンするウィンドウの幅サイズ
 　　　　　4. [I  ] - string pstrWindowHeight - オープンするウィンドウの縦サイズ
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfOpenWindow(pstrUrl
                    , pstrWindowName
                    , pstrWindowWidth
                    , pstrWindowHeight
                     ) {

    var wstrWindowOption = '';

    wstrWindowOption = 'width=' + pstrWindowWidth
                     + ',height=' + pstrWindowHeight
                     + ',scrollbars=yes'
                     + ',resizable=yes'
    ;

    mobjWindowHandle = window.open(pstrUrl
                                 , pstrWindowName
                                 , wstrWindowOption
                                  );
    mblnWiondowOpen = true;

}



/***************************************************************************************************
 機　能　：ブラウザをクローズします．
 引　数　：none
 返り値　：none
 備　考　：gfOpenWindow でオープンしたウィンドウが対象です．

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfCloseWindow() {

    if (!mblnWiondowOpen) return;

    if (mobjWindowHandle.closed == false){
        mobjWindowHandle.close();
    }

}



/***************************************************************************************************
 機　能　：取引先名を選択するウィンドウ（=/scripts/Sel_Customer.asp）をオープンします．
 引　数　：1. [I  ] - string pstrSelBuy - Request("selbuy") 値
 　　　　　2. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　3. [I  ] - string pstrCustomerNameField - 選択した取引先名を設定する <input> Name 属性値
 　　　　　4. [I  ] - string pstrWindowWidth - オープンするウィンドウの幅サイズ
 　　　　　5. [I  ] - string pstrWindowHeight - オープンするウィンドウの縦サイズ
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfOpenSelectCustomer(pstrSelBuy
                            , pstrForm
                            , pstrCustomerNameField
                            , pstrWindowWidth
                            , pstrWindowHeight
                             ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_Customer.asp'
            + '?fnm=' + pstrForm
            + '&inm_1=' + pstrCustomerNameField
            + '&selbuy=' + pstrSelBuy
    ;

    gfOpenWindow(wstrUrl
               , 'select_customer_member'
               , pstrWindowWidth
               , pstrWindowHeight
                );
    return;

}

/***************************************************************************************************
 機　能　：共有情報を設定するウィンドウ（=/trade/change_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrMode        - モード
 　　　　　2. [I  ] - string pstrCid         - Catalog_Id
 　　　　　3. [I  ] - string pstrTid         - Trade_Id
 　　　　　4. [I  ] - string pstrWindowName  - Window Name
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2004/11/08　Y.Chiba       新規
***************************************************************************************************/
function gfOpenChangeMember( pstrMode, pstrCid, pstrTid, pstrWindowName ) {

	var wstrUrl = '';

	wstrUrl += '/trade/change_member.asp';
	wstrUrl += '?mode=' + pstrMode;
	wstrUrl += '&cid='  + pstrCid;
	wstrUrl += '&tid='  + pstrTid;

    gfOpenWindow(wstrUrl
               , pstrWindowName
               , 600
               , 500
                );
    return;
}

/***************************************************************************************************
 機　能　：グループ会員名を選択するウィンドウ（=/scripts/Sel_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
 2004/07/14　H.Ohmura      引数pstrMode追加
***************************************************************************************************/
function gfOpenSelectChildMember(pstrForm
                               , pstrChildMemberNameField
                               , pstrMode
                                ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_member.asp'
            + '?fnm=' + pstrForm
            + '&inm_1=' + pstrChildMemberNameField
    ;

	if (pstrMode != null) wstrUrl += '&mode=' + pstrMode;

    gfOpenWindow(wstrUrl
               , 'select_child_member'
               , 450
               , 350
                );
    return;

}



/***************************************************************************************************
 機　能　：グループ会員名を選択するウィンドウ（=/scripts/Sel_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。
 　　　　　また、会員名の返り値は、グループ親名　＞　グループ名　となります。

 変更日______担当者________変更内容_________________________________________________________________
 2004/02/23　K.Yamato      新規
***************************************************************************************************/
function gfOpenSelectGroupMemberCode(pstrForm
                               , pstrChildMemberNameField
							   , pstrChildMemberCodeField	
                                ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_group_member.asp'
            + '?fnm=' + pstrForm
            + '&inm_1=' + pstrChildMemberNameField
            + '&icd_1=' + pstrChildMemberCodeField
    ;

    gfOpenWindow(wstrUrl
               , 'select_child_member'
               , 700
               , 350
                );
    return;

}


/***************************************************************************************************
 機　能　：グループ会員名を選択するウィンドウ（=/scripts/Sel_group_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 　　　　　4. [I  ] - string pstrAddParameter         - 追加パラメータ
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。
 　　　　　また、会員名の返り値は、グループ親名　＞　グループ名　となります。

 変更日______担当者________変更内容_________________________________________________________________
 2005/07/01　S.Kataoka     新規
***************************************************************************************************/
function gfOpenSelectGroupMemberCodeEtc(pstrForm
										, pstrChildMemberNameField
										, pstrChildMemberCodeField
										, pstrAddParameter
										) {

	var wstrUrl = '';

	wstrUrl	= '/scripts/Sel_group_member.asp'
			+ '?fnm=' + pstrForm
			+ '&inm_1=' + pstrChildMemberNameField
			+ '&icd_1=' + pstrChildMemberCodeField
			+ pstrAddParameter
	;

	gfOpenWindow(wstrUrl
				, 'select_child_member'
				, 700
				, 350
	);
	return;

}



/***************************************************************************************************
 機　能　：グループ会員を選択するウィンドウ（=/scripts/Sel_group_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。

 変更日______担当者________変更内容_________________________________________________________________
 2003/12/19　Y.Nakai      新規
***************************************************************************************************/
function gfOpenSelectChildMemberCode(pstrForm
                               , pstrChildMemberNameField
							   , pstrChildMemberCodeField	
                                ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_member.asp'
            + '?fnm=' + pstrForm
            + '&inm_1=' + pstrChildMemberNameField
            + '&inm_2=' + pstrChildMemberCodeField
    ;

    gfOpenWindow(wstrUrl
               , 'select_child_member'
               , 450
               , 350
                );
    return;

}


/***************************************************************************************************
 機　能　：グループ会員を選択するウィンドウ（=/scripts/Sel_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 　　　　　4. [I  ] - string pstrKbnMember - 処理選択(0:本部のみ 1:グループ会員のみ 2:グループ全体 空:なし)
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。

 変更日______担当者________変更内容_________________________________________________________________
 2003/12/19　Y.Nakai      新規
***************************************************************************************************/
function gfOpenSelectChildMemberCodeSel(pstrForm
								,	 pstrChildMemberNameField
								,	 pstrChildMemberCodeField
								,	 pstrKbnMember
									) {

	var wstrUrl = '';

	wstrUrl = '/scripts/Sel_member.asp'
			+ '?fnm=' + pstrForm
			+ '&inm_1=' + pstrChildMemberNameField
			+ '&inm_2=' + pstrChildMemberCodeField
			+ '&membersel=' + pstrKbnMember
	;

	gfOpenWindow(wstrUrl
				, 'select_child_member'
				, 450
				, 350
				);
	return;

}


/***************************************************************************************************
 機　能　：グループ会員を選択するウィンドウ（=/scripts/Sel_group_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。

 変更日______担当者________変更内容_________________________________________________________________
 2003/12/19　Y.Nakai      新規
***************************************************************************************************/
function gfOpenSelectChildMemberCodeProd(pstrForm
                                       , pstrChildMemberNameField
									   , pstrChildMemberCodeField
									   , pstrSubmit
                                ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_member.asp'
            + '?fnm=' + pstrForm
            + '&inm_1=' + pstrChildMemberNameField
            + '&inm_2=' + pstrChildMemberCodeField
            + '&Submit=' + pstrSubmit;
    ;

    gfOpenWindow(wstrUrl
               , 'select_child_member'
               , 450
               , 350
                );
    return;

}


/***************************************************************************************************
 機　能　：グループ会員を選択するウィンドウ（=/scripts/Sel_member.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrChildMemberNameField - 選択したグループ会員名を設定する <input> Name 属性値
 　　　　　3. [I  ] - string pstrChildMemberCodeField - 選択したグループ会員コードを設定する <input> Name 属性値
 　　　　　4. [I  ] - string pstrAddParameter         - 追加パラメータ
 返り値　：none
 備　考　：この関数では、呼び出し元にmember_codeもセットします。
 　　　　：上記[gfOpenSelectChildMemberCodeProd][gfOpenSelectChildMemberCodeSel]もこの関数に置き換えられる？

 変更日______担当者________変更内容_________________________________________________________________
 2005/07/01　S.Kataoka     新規
***************************************************************************************************/
function gfOpenSelectChildMemberCodeEtc(pstrForm
										, pstrChildMemberNameField
										, pstrChildMemberCodeField
										, pstrAddParameter
										) {

	var wstrUrl = '';

	wstrUrl	= '/scripts/Sel_member.asp'
			+ '?fnm=' + pstrForm
			+ '&inm_1=' + pstrChildMemberNameField
			+ '&inm_2=' + pstrChildMemberCodeField
			+ pstrAddParameter
	;

	gfOpenWindow(wstrUrl
				, 'select_child_member'
				, 450
				, 350
	);
	return;

}



/***************************************************************************************************
 機　能　：日付を選択するウィンドウ（=/scripts/Sel_Calendar.asp）をオープンします．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrDateField - 選択した日付を設定する <input> Name 属性値
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfOpenSelectCalendar(pstrForm
                            , pstrDateField
                             ) {

    var wstrUrl = '';

    wstrUrl = '/scripts/Sel_Calendar.asp'
            + '?i_date=' + eval(pstrForm + '.' + pstrDateField).value
            + '&fnm=' + pstrForm
            + '&inm=' + pstrDateField
    ;

    gfOpenWindow(wstrUrl
               , 'DaySelect'
               , 300
               , 384
                );
    return;

}



/***************************************************************************************************
 機　能　：引数値を変数へ保持する．
 引　数　：1. [I  ] - object pobjObject - オブジェクト参照値
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfSaveFieldValue(pobjObject) {

    mstrSaveFieldValue = pobjObject.value;

}



/***************************************************************************************************
 機　能　：指定フィールドの日付項目値を編集する
 引　数　：1. [I  ] - object pobjObject - オブジェクト参照値
 　　　　　2. [I  ] - int pintMode - 編集モード（1=文字列長チェック／2=yyyy/mm/dd 編集）
 　　　　　3. [I  ] - int pintLength - 文字列長数
 返り値　：none（指定オブジェクトへ直接返します）
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfFormatDate(pobjObject
                    , pintMode
                    , pintLength
                     ) {

    var wstrWork = '';
    var wobjWork = null;

    wobjWork = eval(pobjObject);
    wstrWork = gfTrim(wobjWork.value);


    wobjWork.value = wstrWork;
    if (wstrWork == "") return;

    switch (pintMode){
    case 1:
        if (gfStrLen(wstrWork) > pintLength){
            wobjWork.value = mstrSaveFieldValue;
        }
        break;

    case 2:
        var wstrYear, wstrMonth, wstrDay;
        var wstrNewYear, wstrNewMonth, wstrNewDay;
        var wblnCheck = false;

        if (wstrWork.match(/^(([0-9]{4})\/|)([0-9]{1,2})\/([0-9]{1,2})$/)){
            wstrYear = RegExp.$2;
            wstrMonth = RegExp.$3;
            wstrDay = RegExp.$4;
            if (wstrYear.length == 0){
                wstrYear = (new Date()).getYear();
            }
            if (gfIsDate(wstrYear, RegExp.$3, RegExp.$4)){
                wstrNewYear = ('0000' + wstrYear);
                wstrNewYear = wstrNewYear.substring(wstrNewYear.length - 4);

                wstrNewMonth = ('00' + wstrMonth);
                wstrNewMonth = wstrNewMonth.substring(wstrNewMonth.length - 2);

                wstrNewDay = ('00' + wstrDay);
                wstrNewDay = wstrNewDay.substring(wstrNewDay.length - 2);

                wobjWork.value = wstrNewYear + '/' + wstrNewMonth + '/' + wstrNewDay;
                return;

            }else{
                wblnCheck = true;
            }
        }else{
            wblnCheck = true;
        }

        if (wblnCheck){
            wobjWork.value = mstrSaveFieldValue;
        }
        break;
    }

    wobjWork = null;
    wstrWork = null;

}



/***************************************************************************************************
 機　能　：日付として評価できるかブール型で返します．
 引　数　：1. [I  ] - string pstrYear - 年
 　　　　　2. [I  ] - string pstrMonth - 月
 　　　　　3. [I  ] - string pstrDay - 日
 返り値　：true  = 評価
 　　　　　false = 非評価
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfIsDate(pstrYear,pstrMonth,pstrDay) {

    var waryLastDays = new Array (31,28,31,30,31,30,31,31,30,31,30,31);
	var wblnTemp = false;

	if ((pstrYear % 100 == 0) && (pstrYear % 400 != 0)) {
		wblnTemp = false;
	} else if (pstrYear % 4 == 0){
		wblnTemp = true;
	}
	if (wblnTemp) waryLastDays[1] = 29;

    if ((pstrYear < 1) || (pstrYear > 9999)) return false;
    if ((pstrMonth < 1) || (pstrMonth > 12)) return false;
    if ((pstrDay < 1) || (pstrDay > waryLastDays[pstrMonth - 1])) return false;


    waryLastDays = null
    return true;

}



/***************************************************************************************************
 機　能　：文字列長のチェック？
 引　数　：1. [I  ] - string pstrExpression - 式
 　　　　　2. [I  ] - int pintLength - 文字列長数？
 　　　　　3. [I  ] - int I - ？
 返り値　：
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfStrLen(pstrExpression
                , pintLength
                , I
                 ) {

    pintLength = 0;
    wstrWork = escape(pstrExpression);
    for (I = 0; I < pstrExpression.length; I++, pintLength++) {
        if (pstrExpression.charAt(I) == '%') {
            if (pstrExpression.charAt(++I) == 'u') {
                I += 3;
                pintLength++;
            }
            I++;
        }
    }
    return pintLength;

}



/***************************************************************************************************
 機　能　：JavaScript 版 Trim 関数
 引　数　：1. [I  ] - string pstrExpression - 式
 返り値　：string 編集文字列
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfTrim(pstrExpression) {

    var wstrRtn = '';

    wstrRtn = pstrExpression;
    wstrRtn = wstrRtn.replace(/^[ 　]+/, '');
    wstrRtn = wstrRtn.replace(/[ 　]+$/, '');

    return(wstrRtn);

}



/***************************************************************************************************
 機　能　：ページ移動を提供します．
 引　数　：1. [I  ] - string pstrForm - <form> Name 属性値
 　　　　　2. [I  ] - string pstrPageNoField - ページ番号を設定する <input> Name 属性値
 　　　　　3. [I  ] - int pintPageNoValue - ページ番号
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2003/10/--　H,Fukuda      新規
***************************************************************************************************/
function gfPaging(pstrForm
                , pstrPageNoField
                , pintPageNoValue
                 ) {

    // eval 関数にて実態を作成
    var wobjControl = eval(pstrForm + '.' + pstrPageNoField);

    wobjControl.value = pintPageNoValue;
    document[pstrForm].submit();


    // インスタンスを破棄
    wobjControl = null;

}

/***************************************************************************************************
 機　能　：オブジェクトを有効／無効にします。
 引　数　：1. [I  ] - object pobjObject - 	オブジェクト参照値
 　　　　　2. [I  ] - int pintSetFlg - 		有効:1   無効:0
 　　　　　3. [I  ] - int pintMode - 		背景色を変更するか否か
 返り値　：none
 備　考　：

 変更日______担当者________変更内容_________________________________________________________________
 2004/09/10　S,Kumagai      新規
***************************************************************************************************/
function gfDisabledTarget(pobjObject
						, pintSetFlg
						, pintMode
						) {

	pobjObject.disabled = pintSetFlg;
	if (pintMode) {
		if (pintSetFlg) {
			pobjObject.style.backgroundColor ="#dddddd";
		}else{
			pobjObject.style.backgroundColor ="#FFFFFF";
		}
	}

}

/***************************************************************************************************
 機　能　：期間の入力値が正しいかチェックします。
 引　数　：1. [I  ] - pobjFrom		As Object		- 開始期間入力用テキストボックス
 　　　　　2. [I  ] - pobjTo		As Object		- 終了期間入力用テキストボックス
 　　　　　3. [I  ] - pintTarget	As Integer		- 正しくない場合に元のデータを設定するテキストボックス
 　　　　　4. [I  ] - pstrValue		As String		- 正しくない場合に設定する元データ
 返り値　：none
 備　考　：

 変更日______担当者_________変更内容_________________________________________________________________
 2004/10/05　Y.Nakai		新規
***************************************************************************************************/
function gfCheckPeriod( pobjFrom, pobjTo, pintTarget, pstrValue ) {

	var wstrFrom	= pobjFrom.value;
	var wstrTo		= pobjTo.value;

	if (wstrFrom > wstrTo ) {
		if (pintTarget == 1) {
			pobjFrom.value = pstrValue;
		}
		else {
			pobjTo.value = pstrValue;
		}
	}
	return;
}

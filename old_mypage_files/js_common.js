//var win_handle = new Array(10) ;
var win_handle1 ;
var win_open1 = false;
var win_handle2 ;
var win_open2 = false;
var win_handle3 ;
var win_open3 = false;
var win_handle4 ;
var win_open4 = false;
var win_handle5 ;
var win_open5 = false;
var saved_val;
var win_handle_count = 0;


function OpenWin(url, nm,  w, h)
{
	if ( nm == 'ItemSelect')
	{

		win_handle1 = window.open(
			url,
			nm,
			'width=' + w + ',height=' + h + ',scrollbars=yes, resizable=yes'
		);
		win_open1 = true;
		return 0;
	}

	if ( nm == 'CustomerSelect')
	{
		win_handle2 = window.open(
			url,
			nm,
			'width=' + w + ',height=' + h + ',scrollbars=yes, resizable=yes'
		);
		win_open2 = true;

		return 0;
	}

	if ( nm == 'DaySelect')
	{
		win_handle3 = window.open(
			url,
			nm,
			'width=' + w + ',height=' + h + ',scrollbars=yes, resizable=yes'
		);
		win_open3 = true;

		return 0;
	}
	
	if ( nm == 'ItemSysSelect')
	{
		win_handle4 = window.open(
			url,
			nm,
			'width=' + w + ',height=' + h + ',scrollbars=yes, resizable=yes'
		);
		win_open4 = true;

		return 0;
	}
	
	if ( nm == 'OpenGuide')
	{
		win_handle5 = window.open(
			url,
			nm,
			'width=' + w + ',height=' + h + ',scrollbars=yes, resizable=yes'
		);
		win_open5 = true;

		return 0;
	}
}

function CloseWin(){
	if (win_open1 == true )
	{
		if ( win_handle1.closed == false ){
			win_handle1.close();
		}
	}
	win_open1 = false;

	if (win_open2 == true)
	{
		if ( win_handle2.closed == false ){
			win_handle2.close();
		}
	}
	win_open2 = false;

	if (win_open3 == true)
	{
		if ( win_handle3.closed == false ){
			win_handle3.close();
		}
	}
	win_open3 = false;

	if (win_open4 == true)
	{
		if ( win_handle4.closed == false ){
			win_handle4.close();
		}
	}
	win_open4 = false;

	if (win_open5 == true)
	{
		if ( win_handle5.closed == false ){
			win_handle5.close();
		}
	}
	win_open5 = false;

}


/***************************************************************************************
****************************************************************************************/
/* ふりがなチェック */
function gfFuriganaCheck(data) {
   var str = data;
   if( str.match( /[^ぁ-んァ-ン　\s]+/ ) ) {
      alert("ふりがなは、「ひらがな」・「カタカナ」のみで入力して下さい。");
      return 1;
   }
   return 0;
}

/* 半角英文字チェック */
function gfAlphabetCheck(data) {
   var str = data;
   if( str.match( /[^A-Za-z\s.-]+/ ) ) {
//     alert("英語名は、半角英文字のみで入力して下さい。");
      return 1;
   }
   return 0;
}

/* 半角数字チェック */
function gfNumberCheck(data) {
   var str = data;
   if( str.match( /[^0-9]+/ ) ) {
 //     alert("半角数字のみで入力して下さい。");
      return 1;
   }
   return 0;
}

/* 半角英数字チェック */
function gfHankakuCheck(data) {
   var str = data;
   if( str.match( /[^0-9A-Za-z\s.-]+/ ) )
   {
      return 1;
   }
   return 0;
}
/* 半角数字とハイフンのチェック */
function gfNumberCheck2(data) {
   var str = data;
   if( str.match( /[^0-9-]+/ ) ) {
 //     alert("半角数字のみで入力して下さい。");
      return 1;
   }
   return 0;
}
/* 半角英数字(半角カナ含む)チェック */
function gfHankakuCheck3(data) {
   var str = data;
   if( str.match( /[^0-9A-Za-zｱ-ﾝｧｨｩｪｫｬｭｮｰﾞﾟ\s.-]+/ ) )
   {
      return 1;
   }
   return 0;
}

function gfDateCheck(data) {

	var str = data;
	if(str == "")	return 0;

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
		return 1;		//error
	}
    if( str.substring(0,10) < "2000/01/01" || str.substring(0,10) > "2100/12/31" )
	{
		return 1;		//error
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

function gfOpenItem(frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname) {
//frm:値を返すform名
//s_user_cd:売り手会社コード
//b_user_cd:買い手会社コード
//retino:リターン（ITEM_NUMBER)。
//retspeccd:リターン（spec_code仕様書コード)。
//retiname:リターン（ITEM_NAME)。
//alert(itemsyscd);
	var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname;
//alert(url );
//	win_handle = window.open(url, 'BizCatSelect', 'width=650,height=600,scrollbars=yes,resizable=yes');
//	win_open = true;

	OpenWin(url, 'ItemSelect', 650,600);

}

//スルーフラグ対応仕様書一覧呼び出し(user_status_edit.aspで使用)
function gfOpenItemThrough(fname,frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key,trflg,auid,maker_make_item_number) {

	//連携指定時にクリック
	if( fname.buysell_flg.value == "2" && fname.js_chk_oroshi_cd.value == "2" && (fname.through_flg.checked == true || fname.aite_customer_cd.value != "" )){
		//alert("規格書を選択する場合は、卸連携のメーカー名と転送設定を解除して下さい。");
		alert("規格書を連携する場合は、「依頼先メーカー名」と「転送設定」のチェックを解除してください。");
///		return false;
	}else{

//frm:値を返すform名
//s_user_cd:売り手会社コード
//b_user_cd:買い手会社コード
//retino:リターン（ITEM_NUMBER)。
//retspeccd:リターン（spec_code仕様書コード)。
//retiname:リターン（ITEM_NAME)。
//alert(itemsyscd);
//alert(trflg);
//alert(auid);
//20091005		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&speccd=" + retspeccd + "&iname=" + retiname + "&susercd=" + s_user_cd + "&busercd=" + b_user_cd + "&syscddata=" + itemsyscd + "&ritemsyscd=" + retspec2 + "&ritemsysname=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number;
//↓↓↓↓↓20091005
		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number;
//↑↑↑↑↑20091005

		OpenWin(url, 'ItemSelect', 650,600);
	}
}


//スルーフラグ対応仕様書一覧呼び出し(user_status_edit.aspで使用)
function gfOpenItemThroughMultchOroshi(fname,frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key,trflg,auid,maker_make_item_number,buyer) {

	//連携指定時にクリック
	if( fname.buysell_flg.value == "2" && fname.js_chk_oroshi_cd.value == "2" && (fname.through_flg.checked == true || fname.aite_customer_cd.value != "" )){
		//alert("規格書を選択する場合は、卸連携のメーカー名と転送設定を解除して下さい。");
		alert("規格書を連携する場合は、「依頼先メーカー名」と「転送設定」のチェックを解除してください。");
	}else{

//frm:値を返すform名
//s_user_cd:売り手会社コード
//b_user_cd:買い手会社コード
//retino:リターン（ITEM_NUMBER)。
//retspeccd:リターン（spec_code仕様書コード)。
//retiname:リターン（ITEM_NAME)。
		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number + "&buyer=" + buyer + "&eitnm=" + fname.item_number.value + "&sveitnm=" + fname.save_item_number.value + "&p_item_kbn=" + fname.item_kbn.value;

		OpenWin(url, 'ItemSelect', 650,600);
	}
}

function gfOpenItem2(frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key) {
//frm:値を返すform名
//s_user_cd:売り手会社コード
//b_user_cd:買い手会社コード
//retino:リターン（ITEM_NUMBER)。
//retspeccd:リターン（spec_code仕様書コード)。
//retiname:リターン（ITEM_NAME)。
//alert(itemsyscd);
	var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname ;

	OpenWin(url, 'ItemSelect', 650,600);
}

function gfOpenItemSysCd(frm,s_mem_cd,retino,retiname,s_compcd) {
//frm:値を返すform名
//s_mem_cd:売り手会社メンバーコード
//retino:リターン（ITEM_SYS_CD)。
//retiname:リターン（ITEM_SYS_NAME)。
//compcd:登録企業コード
	var url = "../scripts/sel_item_sys_list.asp?frm=" + frm + "&ino=" + retino + "&iname=" + retiname + "&smemcd=" + s_mem_cd + "&compcd=" + s_compcd ;
//alert(url );
//	win_handle = window.open(url, 'BizCatSelect', 'width=650,height=600,scrollbars=yes,resizable=yes');
//	win_open = true;

	OpenWin(url, 'ItemSysSelect', 650,600);

};

function gfOpenItemSysCd2(frm,s_mem_cd,retino,retiname,nowcd,se_key) {
//frm:値を返すform名
//s_mem_cd:売り手会社メンバーコード
//retino:リターン（ITEM_SYS_CD)。
//retiname:リターン（ITEM_SYS_NAME)。

	var url = "../common/sel_item_sys_list.asp?frm=" + frm + "&ino=" + retino + "&iname=" + retiname + "&smemcd=" + s_mem_cd + "&nowcd=" + nowcd ;

	OpenWin(url, 'ItemSysSelect', 650,600);

}


function allOpenCustomer(frm,p_kaisya_cd,p_kaisya_name) {

	var url = "../common/all_customer_list.asp?frm=" + frm + "&kbn=1" + "&cd=" + p_kaisya_cd + "&name=" + p_kaisya_name ;
//alert(url );
	OpenWin(url, 'CustomerSelect', 650,600);
}

function allOpenCustomer2(frm,p_kaisya_cd,p_kaisya_name,se_key) {

	var url = "../common/all_customer_list.asp?frm=" + frm + "&kbn=1" + "&cd=" + p_kaisya_cd + "&name=" + p_kaisya_name ;
//alert(url );
	OpenWin(url, 'CustomerSelect', 650,600);
}

function mfOpenCustomer(retfrm,retcd,retname,p_user_cd,Kbn,callkbn) {
//frm     :値を返すform名
//cd      :選択した取引先コード
//name    :選択した取引先名
//usercd  :自社コード
//kbn     :売買区分(1=買い手 2=売り手 )
//callkbn :呼び出し区分(0=管理画面 1=新規作成 2=その他 )
	var url = "../scripts/sel_customer_list.asp?frm=" + retfrm + "&cd=" + retcd + "&name=" + retname + "&usercd=" + p_user_cd + "&kbn=" + Kbn + "&callkbn=" + callkbn ;
	//alert(url );
	OpenWin(url, 'CustomerSelect', 650,600);
};

//function mfOpenCustomer(p_user_cd,p_buysell_flg,retfrm,retcd,retname) {
//
//	var url = "../common/sel_customer_list.asp?frm=" + retfrm + "&cd=" + retcd + "&name=" + retname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg ;
//
//	OpenWin(url, 'CustomerSelect', 650,600);
//}

//function mfOpenCustomer2(p_user_cd,p_buysell_flg,retfrm,retcd,retname,se_key) {
//	var url = "../common/sel_customer_list.asp?frm=" + retfrm + "&cd=" + retcd + "&name=" + retname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg;
////
//	OpenWin(url, 'CustomerSelect', 650,600);
//}


//function gfOpenCustomer(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename) {
//frm:値を返すform名
//p_user_cd:自会社コード
//p_buysell_flg:自分が売り手か買い手か。
//     1（売り手）の時、買い手会社を取得。
//     2（買い手）の時、売り手会社を取得。
//     3 自分が買い手である時の取引先と、自分が売り手であるときの買い手会社名称を全て表示
//retcd:会社コードを入れる項目名称。
//retiname:会社名を入れる項目名称。
//retchargecd:リターン担当者コード(売り会社の主担当コード）
//retchargename:リターン担当者名(売り会社の主担当者）
//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
//	OpenWin(url, 'CustomerSelect', 650,600);
//}


//function gfOpenCustomer2(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {

//frm:値を返すform名
//p_user_cd:自会社コード
//p_buysell_flg:自分が売り手か買い手か。
//     1（売り手）の時、買い手会社を取得。
//     2（買い手）の時、売り手会社を取得。
//     3 自分が買い手である時の取引先と、自分が売り手であるときの買い手会社名称を全て表示
//retcd:会社コードを入れる項目名称。
//retiname:会社名を入れる項目名称。
//retchargecd:リターン担当者コード(売り会社の主担当コード）
//retchargename:リターン担当者名(売り会社の主担当者）

//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
//	OpenWin(url, 'CustomerSelect', 650,600);
//}

function gfOpenCustomer_oroshi(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {

//frm:値を返すform名
//p_user_cd:自会社コード
//p_buysell_flg:自分が売り手か買い手か。
//     1（売り手）の時、買い手会社を取得。
//     2（買い手）の時、売り手会社を取得。
//     3 自分が買い手である時の取引先と、自分が売り手であるときの買い手会社名称を全て表示
//retcd:会社コードを入れる項目名称。
//retiname:会社名を入れる項目名称。
//retchargecd:リターン担当者コード(売り会社の主担当コード）
//retchargename:リターン担当者名(売り会社の主担当者）
;
	var url = "../scripts/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&kbn=" + p_buysell_flg + "&callkbn=1&oroshi=1";

//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename + "&oroshi=1";
	OpenWin(url, 'CustomerSelect', 650,600);
}


function kanri_gfOpenCustomer(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename) {
//frm:値を返すform名
//p_user_cd:自会社コード
//p_buysell_flg:自分が売り手か買い手か。
//     1（売り手）の時、買い手会社を取得。
//     2（買い手）の時、売り手会社を取得。
//     3 自分が買い手である時の取引先と、自分が売り手であるときの買い手会社名称を全て表示
//retcd:会社コードを入れる項目名称。
//retiname:会社名を入れる項目名称。
//retchargecd:リターン担当者コード(売り会社の主担当コード）
//retchargename:リターン担当者名(売り会社の主担当者）
	var url = "../common/kanri_sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
	OpenWin(url, 'CustomerSelect', 650,600);
}

function kanri_gfOpenCustomer2(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {
//frm:値を返すform名
//p_user_cd:自会社コード
//p_buysell_flg:自分が売り手か買い手か。
//     1（売り手）の時、買い手会社を取得。
//     2（買い手）の時、売り手会社を取得。
//     3 自分が買い手である時の取引先と、自分が売り手であるときの買い手会社名称を全て表示
//retcd:会社コードを入れる項目名称。
//retiname:会社名を入れる項目名称。
//retchargecd:リターン担当者コード(売り会社の主担当コード）
//retchargename:リターン担当者名(売り会社の主担当者）
	var url = "../common/kanri_sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
	OpenWin(url, 'CustomerSelect', 650,600);
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

    wstrUrl = '../common/Calendar.asp'
            + '?i_date=' + eval(pstrForm + '.' + pstrDateField).value
            + '&fnm=' + pstrForm
            + '&inm=' + pstrDateField
    ;

 //   gfOpenWindow(wstrUrl
      OpenWin(wstrUrl
               , 'DaySelect'
               , 300
               , 384
                );
    return;

}


function Status_submitClick(frm,knd,msg,datachk){
	const_status_Jyunbi = 0	;	
	const_status_K_W = 10;		//期限確認中'	,'期限延期依頼'
	const_status_K_NG = 21	;	//期限確認NG'	,'期限日再提出'
	const_status_M_W = 40;		//作成中①'	,'作成中'
	const_status_M_K_W = 45;		//記入待ち
	const_status_M_K_OK = 50;		//記入OK','作成中② '規格書内容チェックOK(入力チェックバッチでステータス挿入）
	const_status_M_K_NG = 61;	//作成中（記入チェックNG）','記入NG''規格書内容チェックNG(入力チェックバッチでステータス挿入）
	const_status_M_S_W = 70;		//作成中②'	,'社内承認待ち'
	const_status_M_S_OK = 80;		//作成中③'	,'社内承認OK'
	const_status_M_S_NG = 91;		//作成中④'	,'社内承認NG'
	const_status_T_W = 100;		//確認中'	,'提出中①'
	const_status_T_I_OK = 105;		//確認中'	,'提出中①'
	const_status_T_S_NG = 141;		//再提出依頼中②'	,'承認NG'
	const_status_T_S_W = 120;	//買い側社内承認待ち'	,'提出中③'
	const_status_T_S_OK = 130;	//買い側社内承認OK'	,'提出中④'
	const_status_open = 200;		//承認'	,'承認済み'

	const_memo200_size	=	200;
	const_memo1000_size	=	1000;
	const_buy_own_cd_size	=	20;
	const_sell_own_cd_size	=	20;
	const_patron_cd_size	=	20;

	var err_flg = 0;
	var chg_item_kbn = 0;

	var alert_msg = "";

	if( knd != 3 && datachk == 1)		//一覧(user_status_list)からの場合、データチェックは行わない
	{
		//必須チェック
		if (frm.user_name != undefined) {
			if ((frm.user_cd.value.length <= 0 ) || (frm.user_name.value.length <= 0 )) {
				err_flg = 1;
				//alert( "買側会社名（必須）を指定して下さい");
				alert_msg = "●買い手企業を指定して下さい";
				frm.user_name.focus();
			}
		}else{
			if( frm.user_cd.value.length <= 0 ) {
				err_flg = 1;
				//alert( "買側会社名（必須）を指定して下さい");
				alert_msg = "●買い手企業を指定して下さい";
				frm.user_name.focus();
			}
		}

		if( frm.dmy_item_name.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.dmy_item_name.focus();

			err_flg = 1;
//			alert( "商品名を入力して下さい");
			alert_msg = alert_msg + "●商品名を入力して下さい";

		}
		if( frm.deadline_day.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.deadline_day.focus();

			err_flg = 1;
//			alert( "提出期限日を入力して下さい");
			alert_msg = alert_msg + "●提出期限日を入力して下さい";
		}
//		else if(((teisyutu == 1 && frm.sell_skip_flg.value == 1 ) ||			 //提出を強制で、社内承認スキップか？
//				 frm.status_cd.value == <%=const_status_M_S_OK%>  ||		//社内承認OKか?
//				(frm.status_cd.value == <%=const_status_M_W%> && frm.sell_skip_flg.value == 1 )) &&	//仕様書作成完了で社内承認スキップか？
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
		if((frm.status_cd.value == const_status_M_W || frm.status_cd.value == const_status_K_W ) &&	//仕様書作成完了か？
				 (frm.item_number.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
		{
			if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
			{
				//提出期限日が変更されたときは、規格書入力をスルーする。
			}
			else
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.item_name.focus();

				err_flg = 1;
//				alert( "規格書を指定して下さい");
				alert_msg = alert_msg + "●規格書を指定して下さい";

			}
			
		}

		if( frm.item_sys_cd.value.length > 0 && frm.item_number.value.length <= 0)
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.item_name.focus();

			err_flg = 1;
			alert_msg = alert_msg + "●商品システムコードを設定している場合は、規格書を選択して下さい";
		}

		if( err_flg == 0 )
		{
			if( gfDateCheck(frm.deadline_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.deadline_day.focus();

				err_flg = 4;
//				alert( "提出期限日の入力が不正です。（例:2006/10/10）");

				alert_msg = alert_msg + "●提出期限日の入力が不正です。（例:2006/10/10）";

			}
			if( gfDateCheck(frm.start_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.start_day.focus();

				err_flg = 5;
//				alert( "取引開始日の入力が不正です。（例:2006/10/10）");

				alert_msg = alert_msg + "●取引開始日の入力が不正です。（例:2006/10/10）";

			}
			if( gfDateCheck(frm.end_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.end_day.focus();

				err_flg = 6;
//				alert( "取引終了日の入力が不正です。（例:2006/10/10");
				alert_msg = alert_msg + "●取引終了日の入力が不正です。（例:2006/10/10）";

			}
			//入力長チェック

			//const_buy_own_cd_size
			//if( gfHankakuCheck(frm.buy_own_cd.value) == 1 )
			//{
			//	if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			//	else	frm.buy_own_cd.focus();

			//	err_flg = 7;
//				alert_msg = alert_msg + "●買い手商品コードは半角" + const_buy_own_cd_size + "文字までです。";
			//	alert_msg = alert_msg + "●買い手商品コードは半角英数字のみです。";
			//}
			//const_sell_own_cd_size
			if( gfHankakuCheck3(frm.sell_own_cd.value) == 1  )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_own_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "●自社商品コードは半角" + const_sell_own_cd_size + "文字までです。";
				alert_msg = alert_msg + "●自社商品コードは半角英数字のみです。";
			}
			//const_patron_cd_size
			if( gfHankakuCheck(frm.patron_cd.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.patron_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "●納品先コードは半角" + const_patron_cd_size + "文字までです。";
				alert_msg = alert_msg + "●納品先コードは半角英数字のみです。";
			}



			if( frm.buy_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.buy_memo.focus();

				err_flg = 7;
//				alert( alert_msg );


				alert_msg = alert_msg + "●社内への伝達事項は" + const_memo200_size + "文字までです。現在、" + frm.buy_memo.value.length + "文字です。";

			}
			//入力長チェック
			if( frm.sell_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_memo.focus();

				err_flg = 8;
//				alert( alert_msg );
				alert_msg = alert_msg + "●社内への伝達事項は" + const_memo200_size + "文字までです。現在、" + frm.sell_memo.value.length + "文字です。";

			}
			//入力長チェック
			if( frm.memo.value.length > const_memo1000_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.memo.focus();

				err_flg = 9;
//				alert( alert_msg );

				alert_msg = alert_msg + "●取引先への伝達事項は" + const_memo1000_size + "文字までです。現在、" + frm.memo.value.length + "文字です。";
			}
		}
	}


	if( err_flg == 0 )
	{
		if( knd == 1 )		//新規登録
		{
			if( msg == "記入チェック待ち" )
			{
				if( confirm("作成した規格書を連携しますか？"))
 				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "しますか？"))
				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 2 )		//更新
		{
			if( datachk == 1)
			{
				if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
				{
					if( confirm("提出期限日が変更されています。提出期限変更依頼を行いますが本当によろしいですか？"))
					{
						frm.p_proc_flg.value = "2";
//						frm.submit();
						return 0;
					}
					else
					{
						frm.deadline_day.focus();
					    return 1;
					}
				}
			}
			
			if( datachk == 1 && frm.del_flg.value == "1" )
			{
				if( confirm(msg + "を行って宜しいですか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}

			if( msg == '記入チェック待ち' )
			{
				if( confirm("作成した規格書を連携しますか？"))
 				{
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "しますか？")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 4 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm(msg + "を行って宜しいですか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "しますか？")) {
				flg = 1;
//				if( frm.status_cd.value == const_status_T_I_OK  ||  frm.status_cd.value == const_status_T_S_OK ){
//					if( confirm("本当に承認しますか？規格書は取り扱い製品として掲載されます。")) {
//						flg = 1;
//					}
//					else
//					{
//						flg = 0;
//					}
//				}
				if(flg == 1) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
				else
				{
					return 1;
				}
			}
		}
		else if( knd == 5 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm("承認を否認しますか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "しますか？")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 8 )
		{
			if( confirm("提出を行って宜しいですか？")) {
				frm.yes_no.value = "3";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 11 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm("承認を否認しますか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}

			if (document.getElementById("item_kbn").type == 'radio'){
				if (frm.item_kbn[0].checked == true && frm.save_item_kbn.value == '1' ||
					frm.item_kbn[1].checked == true && frm.save_item_kbn.value == '0'){
					if( confirm("規格書区分が変更されています。\n規格書区分を変更し再提出依頼を行って宜しいですか？") == false) {
				    	return 1;
				    }
				}
			}
			if( confirm("再提出依頼の依頼事項は記入されましたか？")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				if (chg_item_kbn == 1){
					frm.certify_user_name.value = "";
				}
				return 0;
			}
		}
		else if( knd == 3 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				alert("既に削除されています。");
			    return 1;
			}
			if( confirm("削除を行って宜しいですか？")) {
				frm.p_proc_flg.value = "3";
				frm.del_flg.value = "1";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 6 )		//仕様変更のため、他の規格提出状態を作成
		{
			if( confirm("仕様変更を行って宜しいですか？")) {
				frm.p_proc_flg.value = "6";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 7 )		//商品終了を設定
		{

			if( datachk == 1 &&  frm.end_day.value.length <= 0 )
			{
				err_flg = 1;
				alert( "取引終了日を入力して下さい");
				frm.end_day.focus();
			}
			if( datachk == 1 &&  err_flg == 0 && gfDateCheck(frm.end_day.value) == 1 )
			{
				err_flg = 1;
				alert( "取引終了日の入力が不正です。（例:2006/10/10)");
				frm.end_day.focus();
			}
			if( err_flg == 1 ) 
			{
			    return 1;
			}

			if( confirm("取引終了設定を行って宜しいですか？"))
			{
				frm.p_proc_flg.value = "7";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
	}
	else
	{
		alert( alert_msg );
	}
	
    return 1;
}


/******************************************************************************
 * 指定文字列のサイズを返す
 *****************************************************************************/
function checkStrLen_edit(chkstr){
	var count = 0;
	for (var i=0;i<chkstr.length;i++){
		(chkstr.charAt(i).match(/[ｱ-ﾝｦｧｨｩｪｫｬｭｮｯ]/) || escape(chkstr.charAt(i)).length< 4)?count++:count+=2;
	}

	return count;
}


function Status_edit_submitClick(frm,knd,msg,datachk){
	const_status_Jyunbi = 0	;	
	const_status_K_W = 10;		//期限確認中'	,'期限延期依頼'
	const_status_K_NG = 21	;	//期限確認NG'	,'期限日再提出'
	const_status_M_W = 40;		//作成中①'	,'作成中'
	const_status_M_K_W = 45;		//記入待ち
	const_status_M_K_OK = 50;		//記入OK','作成中② '規格書内容チェックOK(入力チェックバッチでステータス挿入）
	const_status_M_K_NG = 61;	//作成中（記入チェックNG）','記入NG''規格書内容チェックNG(入力チェックバッチでステータス挿入）
	const_status_M_S_W = 70;		//作成中②'	,'社内承認待ち'
	const_status_M_S_OK = 80;		//作成中③'	,'社内承認OK'
	const_status_M_S_NG = 91;		//作成中④'	,'社内承認NG'
	const_status_T_W = 100;		//確認中'	,'提出中①'
	const_status_T_I_OK = 105;		//確認中'	,'提出中①'
	const_status_T_S_NG = 141;		//再提出依頼中②'	,'承認NG'
	const_status_T_S_W = 120;	//買い側社内承認待ち'	,'提出中③'
	const_status_T_S_OK = 130;	//買い側社内承認OK'	,'提出中④'
	const_status_open = 200;		//承認'	,'承認済み'

	const_memo200_size	=	200;
	const_memo1000_size	=	1000;
	const_buy_own_cd_size	=	20;
	const_sell_own_cd_size	=	20;
	const_patron_cd_size	=	20;

	var err_flg = 0;

	var alert_msg = "";

	if( knd != 3 && datachk == 1)		//一覧(user_status_list)からの場合、データチェックは行わない
	{

	
		//必須チェック
		if (frm.user_name != undefined) {
			if ((frm.user_cd.value.length <= 0 ) || (frm.user_name.value.length <= 0 )) {
				err_flg = 1;
				//alert( "買側会社名（必須）を指定して下さい");
				alert_msg = "●買い手企業を指定して下さい";
				frm.user_name.focus();
			}
		}else{
			if( frm.user_cd.value.length <= 0 ) {
				err_flg = 1;
				//alert( "買側会社名（必須）を指定して下さい");
				alert_msg = "●買い手企業を指定して下さい";
				frm.user_name.focus();
			}
		}



		//必須チェック
		if( frm.customer_cd.value.length <= 0 )
		{
			err_flg = 1;
			alert_msg = "●売り手企業を指定して下さい";
			frm.customer_name.focus();
		}


		if( frm.dmy_item_name.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.dmy_item_name.focus();

			err_flg = 1;
//			alert( "商品名を入力して下さい");
			alert_msg = alert_msg + "●商品名を入力して下さい";

		}
		if( frm.deadline_day.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.deadline_day.focus();

			err_flg = 1;
//			alert( "提出期限日を入力して下さい");
			alert_msg = alert_msg + "●提出期限日を入力して下さい";
		}
//		else if(((teisyutu == 1 && frm.sell_skip_flg.value == 1 ) ||			 //提出を強制で、社内承認スキップか？
//				 frm.status_cd.value == <%=const_status_M_S_OK%>  ||		//社内承認OKか?
//				(frm.status_cd.value == <%=const_status_M_W%> && frm.sell_skip_flg.value == 1 )) &&	//仕様書作成完了で社内承認スキップか？
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
		if((frm.status_cd.value == const_status_M_W || frm.status_cd.value == const_status_K_W ) &&	//仕様書作成完了か？
				 (frm.item_number.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//上記３つのいづれかで、規格書が設定されていない時、エラー
		{
			if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
			{
				//提出期限日が変更されたときは、規格書入力をスルーする。
			}
			else
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.item_name.focus();

				err_flg = 1;
//				alert( "規格書を指定して下さい");
				alert_msg = alert_msg + "●規格書を指定して下さい";

			}
			
		}

		if( frm.item_sys_cd.value.length > 0 && frm.item_number.value.length <= 0)
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.item_name.focus();

			err_flg = 1;
			alert_msg = alert_msg + "●商品システムコードを設定している場合は、規格書を選択して下さい";
		}

		if( err_flg == 0 )
		{
			if( gfDateCheck(frm.deadline_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.deadline_day.focus();

				err_flg = 4;
//				alert( "提出期限日の入力が不正です。（例:2006/10/10）");

				alert_msg = alert_msg + "●提出期限日の入力が不正です。（例:2006/10/10）";

			}
			if( gfDateCheck(frm.start_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.start_day.focus();

				err_flg = 5;
//				alert( "取引開始日の入力が不正です。（例:2006/10/10）");

				alert_msg = alert_msg + "●取引開始日の入力が不正です。（例:2006/10/10）";

			}
			if( gfDateCheck(frm.end_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.end_day.focus();

				err_flg = 6;
//				alert( "取引終了日の入力が不正です。（例:2006/10/10");
				alert_msg = alert_msg + "●取引終了日の入力が不正です。（例:2006/10/10）";

			}
			//入力長チェック

			//const_buy_own_cd_size
			//if( gfHankakuCheck(frm.buy_own_cd.value) == 1 )
			//{
			//	if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			//	else	frm.buy_own_cd.focus();

			//	err_flg = 7;
//				alert_msg = alert_msg + "●買い手商品コードは半角" + const_buy_own_cd_size + "文字までです。";
			//	alert_msg = alert_msg + "●買い手商品コードは半角英数字のみです。";
			//}
			//const_sell_own_cd_size
			if( gfHankakuCheck3(frm.sell_own_cd.value) == 1  )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_own_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "●自社商品コードは半角" + const_sell_own_cd_size + "文字までです。";
				alert_msg = alert_msg + "●自社商品コードは半角英数字のみです。";
			}
			//const_patron_cd_size
			if( gfHankakuCheck(frm.patron_cd.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.patron_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "●納品先コードは半角" + const_patron_cd_size + "文字までです。";
				alert_msg = alert_msg + "●納品先コードは半角英数字のみです。";
			}



			if( frm.buy_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.buy_memo.focus();

				err_flg = 7;
//				alert( alert_msg );


				alert_msg = alert_msg + "●社内への伝達事項は" + const_memo200_size + "文字までです。現在、" + frm.buy_memo.value.length + "文字です。";

			}
			//入力長チェック
			if( frm.sell_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_memo.focus();

				err_flg = 8;
//				alert( alert_msg );
				alert_msg = alert_msg + "●社内への伝達事項は" + const_memo200_size + "文字までです。現在、" + frm.sell_memo.value.length + "文字です。";

			}
			//入力長チェック
			if( frm.memo.value.length > const_memo1000_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.memo.focus();

				err_flg = 9;
//				alert( alert_msg );

				alert_msg = alert_msg + "●取引先への伝達事項は" + const_memo1000_size + "文字までです。現在、" + frm.memo.value.length + "文字です。";
			}
		}


//販売者関連入力チェック
if( frm.p_proc_flg.value == "1" ){
	if( frm.opt_oroshi.value == "1" && frm.oroshi_cd.value == "2" ) {		//卸で、まだスルー設定はされていないか
			//販売者関連入力チェック

		if( frm.through_flg.checked == true){		//スルーフラグにチェックありか？

		// 販売者全角チェック(最大20文字）チェック
		var ext = frm.h_company_name.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 40 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_company_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者が全角２０文字を超えています";
			}
		}else{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_company_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者名は必須入力です";
		}
		// 販売者名担当者名(最大20文字）チェック
		var ext = frm.h_tantou_name.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 40 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_tantou_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者担当者名が全角２０文字を超えています";
			}
		}
		// 販売者住所(最大40文字）チェック
		var ext = frm.h_addr.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 80 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_addr.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者住所が全角４０文字を超えています";
			}
		}
		// 販売者tel（半角数字とハイフン：最大１７文字）チェック
		var ext = frm.h_tel.value;
		if (ext) {
			if( gfNumberCheck2(ext) != 0){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_tel.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者TELは半角数字とハイフンで入力してください";
			}else if( checkStrLen_edit(ext) > 17 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_tel.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者TELが半角１７文字を超えています";
			}

		}
		// 販売者fax（半角数字とハイフン：最大１７文字）チェック
		var ext = frm.h_fax.value;
		if (ext) {
			if( gfNumberCheck2(ext) != 0){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_fax.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者FAXは半角数字とハイフンで入力してください";
			}else if( checkStrLen_edit(ext) > 17 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_fax.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者FAXが半角１７文字を超えています\n";
			}
		}
		// 販売者備考全角チェック(最大５０文字）チェック
		var ext = frm.h_memo.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 100 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//販売者が表示されているかチェック
					frm.h_memo.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "●販売者備考が全角５０文字を超えています";
			}
		}

		}
	}
}


		if( err_flg == 0 )
		{
			var aite_flg = 0;
			//卸連携時のチェック
			if( frm.buysell_flg.value == "1" ){		//卸買いの時、
	
				if( frm.aite_user_cd.value != "" ){	//相手の取引先（外食）コード設定されている
					aite_flg = 1;		//取引先コード設定あり
					if( frm.moto_aite_user_cd.value != "" && frm.moto_aite_user_cd.value != frm.aite_user_cd.value ){	//相手の取引先（外食）コードが変更された
						alert("取引先は変更できません");
						frm.aite_user_cd.focus();
						    return 1;
					}
	
					if( frm.moto_aite_user_cd.value == "" ){	//新規連携か？
						if( confirm("転送設定を行って宜しいですか？変更は出来ません")) {
							frm.aite_record_ins_flg.value = "1";		//相手レコード新規登録する
						}else{
						    return 1;
						}
					}
				}
				if( frm.aite_user_cd.value == "" ){	//相手の取引先（外食）コード未設定
					aite_flg = 0;		//取引先コード設定なし
					if( frm.moto_aite_user_cd.value != frm.aite_user_cd.value ){	//相手の取引先（外食）コードが変更された
						alert("変更できません");
						frm.aite_user_cd.focus();
						    return 1;
					}
				}
			}else if( frm.buysell_flg.value == "2" ){		//卸売りの時、
	
	
				if( frm.aite_customer_cd.value != "" ){	//相手の取引先（メーカー）コード設定されている
					aite_flg = 1;		//取引先コード設定あり
					if( frm.moto_aite_customer_cd.value != "" && frm.moto_aite_customer_cd.value != frm.aite_customer_cd.value ){	//相手の取引先（メーカー）コードが変更された
						alert("取引先は変更できません");
						frm.aite_customer_cd.focus();
						    return 1;
					}
					if( frm.moto_aite_customer_cd.value == "" ){	//新規連携か？
						if( confirm("転送設定を行って宜しいですか？変更は出来ません")) {
							frm.aite_record_ins_flg.value = "1";		//相手レコード新規登録する
						}else{
						    return 1;
						}
					}
				}
				if( frm.aite_customer_cd.value == "" ){	//相手の取引先（メーカー）コード未設定
					aite_flg = 0;		//取引先コード設定なし
					if( frm.moto_aite_customer_cd.value != frm.aite_customer_cd.value ){	//相手の取引先（メーカー）コードが変更された
						alert("変更できません");
						frm.aite_customer_cd.focus();
						    return 1;
					}
				}
				
	
				//卸売りで規格書が指定され、連携なしから連携された時
				if( frm.js_chk_oroshi_cd.value  == "2" && frm.item_number.value != "" &&  frm.moto_aite_customer_cd.value == "" && frm.aite_customer_cd.value != "" ){
						alert("卸提出状況を転送設定にする場合は、規格書を解除して下さい。");
					    return 1;
				}
			}


			//スルー設定ON時に連携先が設定されているかチェック
			if( frm.through_flg.checked == true ){
				if( frm.buysell_flg.value == "1" ){		//卸買いの時
					if( frm.aite_user_cd.value == "" ){
						alert("提出先外食名を設定するか、転送設定を解除して下さい。")
						return 1;
					}
				}else{		//売り手時
					if( frm.aite_customer_cd.value == "" ){
						alert("依頼先メーカー名を設定するか、転送設定を解除して下さい。")
						return 1;
					}
				}
			}

		}
	}
	
	
	if( err_flg == 0 )
	{
		if( knd == 1 )		//新規登録
		{
			if( msg == "記入チェック待ち" )
			{
				if( confirm("作成した規格書を連携しますか？"))
 				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "しますか？"))
				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 2 )		//更新
		{
			if( datachk == 1)
			{
				if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
				{
					if( confirm("提出期限日が変更されています。提出期限変更依頼を行いますが本当によろしいですか？"))
					{
						frm.p_proc_flg.value = "2";
//						frm.submit();
						return 0;
					}
					else
					{
						frm.deadline_day.focus();
					    return 1;
					}
				}
			}
			
			if( datachk == 1 && frm.del_flg.value == "1" )
			{
				if( confirm(msg + "を行って宜しいですか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}

			if( msg == '記入チェック待ち' )
			{
				if( confirm("作成した規格書を連携しますか？"))
 				{
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "しますか？")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 4 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm(msg + "を行って宜しいですか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "しますか？")) {
				flg = 1;
//				if( frm.status_cd.value == const_status_T_I_OK  ||  frm.status_cd.value == const_status_T_S_OK ){
//					if( confirm("本当に承認しますか？規格書は取り扱い製品として掲載されます。")) {
//						flg = 1;
//					}
//					else
//					{
//						flg = 0;
//					}
//				}
				if(flg == 1) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
				else
				{
					return 1;
				}
			}
		}
		else if( knd == 5 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm("承認を否認しますか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "しますか？")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 8 )
		{
			if( confirm("提出を行って宜しいですか？")) {
				frm.yes_no.value = "3";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 11 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				if( confirm("承認を否認しますか？削除されていますが更新するとＩＤは有効になります。")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm("再提出依頼の依頼事項は記入されましたか？")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 3 )
		{
			if( datachk == 1 &&  frm.del_flg.value == "1" )
			{
				alert("既に削除されています。");
			    return 1;
			}
			if( confirm("削除を行って宜しいですか？")) {
				frm.p_proc_flg.value = "3";
				frm.del_flg.value = "1";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 6 )		//仕様変更のため、他の規格提出状態を作成
		{
			if( confirm("仕様変更を行って宜しいですか？")) {
				frm.p_proc_flg.value = "6";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 7 )		//商品終了を設定
		{

			if( datachk == 1 &&  frm.end_day.value.length <= 0 )
			{
				err_flg = 1;
				alert( "取引終了日を入力して下さい");
				frm.end_day.focus();
			}
			if( datachk == 1 &&  err_flg == 0 && gfDateCheck(frm.end_day.value) == 1 )
			{
				err_flg = 1;
				alert( "取引終了日の入力が不正です。（例:2006/10/10)");
				frm.end_day.focus();
			}
			if( err_flg == 1 ) 
			{
			    return 1;
			}

			if( confirm("取引終了設定を行って宜しいですか？"))
			{
				frm.p_proc_flg.value = "7";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
	}
	else
	{
		alert( alert_msg );
	}
	
    return 1;
}


function jumpMypage(frm) {

	frm.submit();
}

/***************************************************************************************************
 機　能　：規格書詳細ウィンドウ（=/search/DispDetail.asp）をオープンします．
 引　数　：1. [I  ] - string p_com_cd - 登録企業コード
 　　　　　2. [I  ] - string p_item_cd - 品番
 　　　　　3. [I  ] - string p_com_cd2 - 企業コード２
 　　　　　4. [I  ] - string p_knd - 規格書表示区分
 2008/8/--yamazaki
***************************************************************************************************/
function DispWindow(frm,p_com_cd,p_item_num ,p_com_cd2 ,p_knd , p_item_cd , p_add_kbn , p_item_num2, p_seqnum) {

//↓↓↓↓↓20091101精査機関対応
	var certify_kikaku_disp_flg;
	certify_kikaku_disp_flg = "0";
	if (frm.certify_kikaku_disp_flg != undefined) {
		//フラグが"1"の時、精査機関側用テーブル（certify_item_m)の規格書を表示する
		certify_kikaku_disp_flg = frm.certify_kikaku_disp_flg.value;
	}

	var url = "../search/DispDetail.asp?companyCd=" + p_com_cd + "&itemNum=" + p_item_num + "&companyCd2=" + p_com_cd2 + "&procKbn=" + p_knd + "&itemCd=" + p_item_cd + "&AddKbn=" + p_add_kbn + "&itemNum2=" + p_item_num2 + "&ckdflg=" + certify_kikaku_disp_flg + "&seqnum=" + p_seqnum;
	var kbn = ""
	if (p_knd != undefined) {
		kbn = p_knd;
	}
	var win_name = p_item_num.replace(/-/g, "") + kbn;

	win_handle = window.open(url,win_name, 'scrollbars=yes,resizable=yes,left=20,top=20,width=900,height=800');
	win_open = true;
}

/***************************************************************************************************
 機　能　：ライト版規格書詳細ウィンドウ（=/search/DispDetailList.asp）をオープンします．
 引　数　：1. [I  ] - string p_com_cd - 登録企業コード
 　　　　　3. [I  ] - string p_com_cd2 - 企業コード２
 　　　　　4. [I  ] - string p_knd - 規格書表示区分
 2010/10/--sac
***************************************************************************************************/
function DispWindowLite(p_com_cd,p_item_num ,p_com_cd2, p_item_num2, p_knd, public_flg, p_customer_cd, p_item_cd, p_seqnum) {

	var url = "../search/DispDetailLite.asp?companyCd=" + p_com_cd + "&itemNum=" + p_item_num + "&companyCd2=" + p_com_cd2 + "&procKbn=" + p_knd + "&itemNum2=" + p_item_num2 + "&pblcflg=" + public_flg + "&customerCd=" + p_customer_cd + "&itemCd=" + p_item_cd + "&seqnum=" + p_seqnum;
	var kbn = ""
	if (p_knd != undefined) {
		kbn = p_knd;
	}
	var win_name = p_item_num.replace(/-/g, "") + kbn;
	win_handle = window.open(url, win_name, 'scrollbars=yes,resizable=yes,left=20,top=20,width=900,height=800');
	win_open = true;
}


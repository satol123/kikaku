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
/* �ӂ肪�ȃ`�F�b�N */
function gfFuriganaCheck(data) {
   var str = data;
   if( str.match( /[^��-��@-���@\s]+/ ) ) {
      alert("�ӂ肪�Ȃ́A�u�Ђ炪�ȁv�E�u�J�^�J�i�v�݂̂œ��͂��ĉ������B");
      return 1;
   }
   return 0;
}

/* ���p�p�����`�F�b�N */
function gfAlphabetCheck(data) {
   var str = data;
   if( str.match( /[^A-Za-z\s.-]+/ ) ) {
//     alert("�p�ꖼ�́A���p�p�����݂̂œ��͂��ĉ������B");
      return 1;
   }
   return 0;
}

/* ���p�����`�F�b�N */
function gfNumberCheck(data) {
   var str = data;
   if( str.match( /[^0-9]+/ ) ) {
 //     alert("���p�����݂̂œ��͂��ĉ������B");
      return 1;
   }
   return 0;
}

/* ���p�p�����`�F�b�N */
function gfHankakuCheck(data) {
   var str = data;
   if( str.match( /[^0-9A-Za-z\s.-]+/ ) )
   {
      return 1;
   }
   return 0;
}
/* ���p�����ƃn�C�t���̃`�F�b�N */
function gfNumberCheck2(data) {
   var str = data;
   if( str.match( /[^0-9-]+/ ) ) {
 //     alert("���p�����݂̂œ��͂��ĉ������B");
      return 1;
   }
   return 0;
}
/* ���p�p����(���p�J�i�܂�)�`�F�b�N */
function gfHankakuCheck3(data) {
   var str = data;
   if( str.match( /[^0-9A-Za-z�-ݧ����������\s.-]+/ ) )
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

    // ���K�\���ɂ�鏑���`�F�b�N 
    if(!str.match(/^\d{4}\/\d{2}\/\d{2}$/)){ 
        return false; 
    } 
    var vYear = str.substr(0, 4) - 0; 
    var vMonth = str.substr(5, 2) - 1; // Javascript�́A0-11�ŕ\�� 
    var vDay = str.substr(8, 2) - 0; 
    // ��,���̑Ó����`�F�b�N 
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
//frm:�l��Ԃ�form��
//s_user_cd:������ЃR�[�h
//b_user_cd:�������ЃR�[�h
//retino:���^�[���iITEM_NUMBER)�B
//retspeccd:���^�[���ispec_code�d�l���R�[�h)�B
//retiname:���^�[���iITEM_NAME)�B
//alert(itemsyscd);
	var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname;
//alert(url );
//	win_handle = window.open(url, 'BizCatSelect', 'width=650,height=600,scrollbars=yes,resizable=yes');
//	win_open = true;

	OpenWin(url, 'ItemSelect', 650,600);

}

//�X���[�t���O�Ή��d�l���ꗗ�Ăяo��(user_status_edit.asp�Ŏg�p)
function gfOpenItemThrough(fname,frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key,trflg,auid,maker_make_item_number) {

	//�A�g�w�莞�ɃN���b�N
	if( fname.buysell_flg.value == "2" && fname.js_chk_oroshi_cd.value == "2" && (fname.through_flg.checked == true || fname.aite_customer_cd.value != "" )){
		//alert("�K�i����I������ꍇ�́A���A�g�̃��[�J�[���Ɠ]���ݒ���������ĉ������B");
		alert("�K�i����A�g����ꍇ�́A�u�˗��惁�[�J�[���v�Ɓu�]���ݒ�v�̃`�F�b�N���������Ă��������B");
///		return false;
	}else{

//frm:�l��Ԃ�form��
//s_user_cd:������ЃR�[�h
//b_user_cd:�������ЃR�[�h
//retino:���^�[���iITEM_NUMBER)�B
//retspeccd:���^�[���ispec_code�d�l���R�[�h)�B
//retiname:���^�[���iITEM_NAME)�B
//alert(itemsyscd);
//alert(trflg);
//alert(auid);
//20091005		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&speccd=" + retspeccd + "&iname=" + retiname + "&susercd=" + s_user_cd + "&busercd=" + b_user_cd + "&syscddata=" + itemsyscd + "&ritemsyscd=" + retspec2 + "&ritemsysname=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number;
//����������20091005
		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number;
//����������20091005

		OpenWin(url, 'ItemSelect', 650,600);
	}
}


//�X���[�t���O�Ή��d�l���ꗗ�Ăяo��(user_status_edit.asp�Ŏg�p)
function gfOpenItemThroughMultchOroshi(fname,frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key,trflg,auid,maker_make_item_number,buyer) {

	//�A�g�w�莞�ɃN���b�N
	if( fname.buysell_flg.value == "2" && fname.js_chk_oroshi_cd.value == "2" && (fname.through_flg.checked == true || fname.aite_customer_cd.value != "" )){
		//alert("�K�i����I������ꍇ�́A���A�g�̃��[�J�[���Ɠ]���ݒ���������ĉ������B");
		alert("�K�i����A�g����ꍇ�́A�u�˗��惁�[�J�[���v�Ɓu�]���ݒ�v�̃`�F�b�N���������Ă��������B");
	}else{

//frm:�l��Ԃ�form��
//s_user_cd:������ЃR�[�h
//b_user_cd:�������ЃR�[�h
//retino:���^�[���iITEM_NUMBER)�B
//retspeccd:���^�[���ispec_code�d�l���R�[�h)�B
//retiname:���^�[���iITEM_NAME)�B
		var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname + "&trflg=" + trflg + "&auid=" + auid + "&mmitn=" + maker_make_item_number + "&buyer=" + buyer + "&eitnm=" + fname.item_number.value + "&sveitnm=" + fname.save_item_number.value + "&p_item_kbn=" + fname.item_kbn.value;

		OpenWin(url, 'ItemSelect', 650,600);
	}
}

function gfOpenItem2(frm,s_user_cd,b_user_cd,retino,retspeccd,retiname,itemsyscd,retspec2,retspacname,se_key) {
//frm:�l��Ԃ�form��
//s_user_cd:������ЃR�[�h
//b_user_cd:�������ЃR�[�h
//retino:���^�[���iITEM_NUMBER)�B
//retspeccd:���^�[���ispec_code�d�l���R�[�h)�B
//retiname:���^�[���iITEM_NAME)�B
//alert(itemsyscd);
	var url = "../common/sel_item_list.asp?frm=" + frm + "&ino=" + retino + "&sp1=" + retspeccd + "&inm=" + retiname + "&suc=" + s_user_cd + "&buc=" + b_user_cd + "&sycd=" + itemsyscd + "&risc=" + retspec2 + "&risn=" + retspacname ;

	OpenWin(url, 'ItemSelect', 650,600);
}

function gfOpenItemSysCd(frm,s_mem_cd,retino,retiname,s_compcd) {
//frm:�l��Ԃ�form��
//s_mem_cd:������Ѓ����o�[�R�[�h
//retino:���^�[���iITEM_SYS_CD)�B
//retiname:���^�[���iITEM_SYS_NAME)�B
//compcd:�o�^��ƃR�[�h
	var url = "../scripts/sel_item_sys_list.asp?frm=" + frm + "&ino=" + retino + "&iname=" + retiname + "&smemcd=" + s_mem_cd + "&compcd=" + s_compcd ;
//alert(url );
//	win_handle = window.open(url, 'BizCatSelect', 'width=650,height=600,scrollbars=yes,resizable=yes');
//	win_open = true;

	OpenWin(url, 'ItemSysSelect', 650,600);

};

function gfOpenItemSysCd2(frm,s_mem_cd,retino,retiname,nowcd,se_key) {
//frm:�l��Ԃ�form��
//s_mem_cd:������Ѓ����o�[�R�[�h
//retino:���^�[���iITEM_SYS_CD)�B
//retiname:���^�[���iITEM_SYS_NAME)�B

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
//frm     :�l��Ԃ�form��
//cd      :�I�����������R�[�h
//name    :�I����������於
//usercd  :���ЃR�[�h
//kbn     :�����敪(1=������ 2=����� )
//callkbn :�Ăяo���敪(0=�Ǘ���� 1=�V�K�쐬 2=���̑� )
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
//frm:�l��Ԃ�form��
//p_user_cd:����ЃR�[�h
//p_buysell_flg:����������肩�����肩�B
//     1�i�����j�̎��A�������Ђ��擾�B
//     2�i������j�̎��A������Ђ��擾�B
//     3 ������������ł��鎞�̎����ƁA�����������ł���Ƃ��̔������Ж��̂�S�ĕ\��
//retcd:��ЃR�[�h�����鍀�ږ��́B
//retiname:��Ж������鍀�ږ��́B
//retchargecd:���^�[���S���҃R�[�h(�����Ђ̎�S���R�[�h�j
//retchargename:���^�[���S���Җ�(�����Ђ̎�S���ҁj
//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
//	OpenWin(url, 'CustomerSelect', 650,600);
//}


//function gfOpenCustomer2(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {

//frm:�l��Ԃ�form��
//p_user_cd:����ЃR�[�h
//p_buysell_flg:����������肩�����肩�B
//     1�i�����j�̎��A�������Ђ��擾�B
//     2�i������j�̎��A������Ђ��擾�B
//     3 ������������ł��鎞�̎����ƁA�����������ł���Ƃ��̔������Ж��̂�S�ĕ\��
//retcd:��ЃR�[�h�����鍀�ږ��́B
//retiname:��Ж������鍀�ږ��́B
//retchargecd:���^�[���S���҃R�[�h(�����Ђ̎�S���R�[�h�j
//retchargename:���^�[���S���Җ�(�����Ђ̎�S���ҁj

//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
//	OpenWin(url, 'CustomerSelect', 650,600);
//}

function gfOpenCustomer_oroshi(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {

//frm:�l��Ԃ�form��
//p_user_cd:����ЃR�[�h
//p_buysell_flg:����������肩�����肩�B
//     1�i�����j�̎��A�������Ђ��擾�B
//     2�i������j�̎��A������Ђ��擾�B
//     3 ������������ł��鎞�̎����ƁA�����������ł���Ƃ��̔������Ж��̂�S�ĕ\��
//retcd:��ЃR�[�h�����鍀�ږ��́B
//retiname:��Ж������鍀�ږ��́B
//retchargecd:���^�[���S���҃R�[�h(�����Ђ̎�S���R�[�h�j
//retchargename:���^�[���S���Җ�(�����Ђ̎�S���ҁj
;
	var url = "../scripts/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&kbn=" + p_buysell_flg + "&callkbn=1&oroshi=1";

//	var url = "../common/sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename + "&oroshi=1";
	OpenWin(url, 'CustomerSelect', 650,600);
}


function kanri_gfOpenCustomer(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename) {
//frm:�l��Ԃ�form��
//p_user_cd:����ЃR�[�h
//p_buysell_flg:����������肩�����肩�B
//     1�i�����j�̎��A�������Ђ��擾�B
//     2�i������j�̎��A������Ђ��擾�B
//     3 ������������ł��鎞�̎����ƁA�����������ł���Ƃ��̔������Ж��̂�S�ĕ\��
//retcd:��ЃR�[�h�����鍀�ږ��́B
//retiname:��Ж������鍀�ږ��́B
//retchargecd:���^�[���S���҃R�[�h(�����Ђ̎�S���R�[�h�j
//retchargename:���^�[���S���Җ�(�����Ђ̎�S���ҁj
	var url = "../common/kanri_sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
	OpenWin(url, 'CustomerSelect', 650,600);
}

function kanri_gfOpenCustomer2(frm,p_user_cd,p_buysell_flg,retcd,retiname,retchargeid,retchargename,se_key) {
//frm:�l��Ԃ�form��
//p_user_cd:����ЃR�[�h
//p_buysell_flg:����������肩�����肩�B
//     1�i�����j�̎��A�������Ђ��擾�B
//     2�i������j�̎��A������Ђ��擾�B
//     3 ������������ł��鎞�̎����ƁA�����������ł���Ƃ��̔������Ж��̂�S�ĕ\��
//retcd:��ЃR�[�h�����鍀�ږ��́B
//retiname:��Ж������鍀�ږ��́B
//retchargecd:���^�[���S���҃R�[�h(�����Ђ̎�S���R�[�h�j
//retchargename:���^�[���S���Җ�(�����Ђ̎�S���ҁj
	var url = "../common/kanri_sel_customer_list.asp?frm=" + frm + "&cd=" + retcd + "&name=" + retiname + "&usercd=" + p_user_cd + "&buysellflg=" + p_buysell_flg + "&chargeid=" + retchargeid + "&chargename=" + retchargename ;
	OpenWin(url, 'CustomerSelect', 650,600);
}
/***************************************************************************************************
 �@�@�\�@�F���t��I������E�B���h�E�i=/scripts/Sel_Calendar.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrDateField - �I���������t��ݒ肷�� <input> Name �����l
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
	const_status_K_W = 10;		//�����m�F��'	,'���������˗�'
	const_status_K_NG = 21	;	//�����m�FNG'	,'�������Ē�o'
	const_status_M_W = 40;		//�쐬���@'	,'�쐬��'
	const_status_M_K_W = 45;		//�L���҂�
	const_status_M_K_OK = 50;		//�L��OK','�쐬���A '�K�i�����e�`�F�b�NOK(���̓`�F�b�N�o�b�`�ŃX�e�[�^�X�}���j
	const_status_M_K_NG = 61;	//�쐬���i�L���`�F�b�NNG�j','�L��NG''�K�i�����e�`�F�b�NNG(���̓`�F�b�N�o�b�`�ŃX�e�[�^�X�}���j
	const_status_M_S_W = 70;		//�쐬���A'	,'�Г����F�҂�'
	const_status_M_S_OK = 80;		//�쐬���B'	,'�Г����FOK'
	const_status_M_S_NG = 91;		//�쐬���C'	,'�Г����FNG'
	const_status_T_W = 100;		//�m�F��'	,'��o���@'
	const_status_T_I_OK = 105;		//�m�F��'	,'��o���@'
	const_status_T_S_NG = 141;		//�Ē�o�˗����A'	,'���FNG'
	const_status_T_S_W = 120;	//�������Г����F�҂�'	,'��o���B'
	const_status_T_S_OK = 130;	//�������Г����FOK'	,'��o���C'
	const_status_open = 200;		//���F'	,'���F�ς�'

	const_memo200_size	=	200;
	const_memo1000_size	=	1000;
	const_buy_own_cd_size	=	20;
	const_sell_own_cd_size	=	20;
	const_patron_cd_size	=	20;

	var err_flg = 0;
	var chg_item_kbn = 0;

	var alert_msg = "";

	if( knd != 3 && datachk == 1)		//�ꗗ(user_status_list)����̏ꍇ�A�f�[�^�`�F�b�N�͍s��Ȃ�
	{
		//�K�{�`�F�b�N
		if (frm.user_name != undefined) {
			if ((frm.user_cd.value.length <= 0 ) || (frm.user_name.value.length <= 0 )) {
				err_flg = 1;
				//alert( "������Ж��i�K�{�j���w�肵�ĉ�����");
				alert_msg = "���������Ƃ��w�肵�ĉ�����";
				frm.user_name.focus();
			}
		}else{
			if( frm.user_cd.value.length <= 0 ) {
				err_flg = 1;
				//alert( "������Ж��i�K�{�j���w�肵�ĉ�����");
				alert_msg = "���������Ƃ��w�肵�ĉ�����";
				frm.user_name.focus();
			}
		}

		if( frm.dmy_item_name.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.dmy_item_name.focus();

			err_flg = 1;
//			alert( "���i������͂��ĉ�����");
			alert_msg = alert_msg + "�����i������͂��ĉ�����";

		}
		if( frm.deadline_day.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.deadline_day.focus();

			err_flg = 1;
//			alert( "��o����������͂��ĉ�����");
			alert_msg = alert_msg + "����o����������͂��ĉ�����";
		}
//		else if(((teisyutu == 1 && frm.sell_skip_flg.value == 1 ) ||			 //��o�������ŁA�Г����F�X�L�b�v���H
//				 frm.status_cd.value == <%=const_status_M_S_OK%>  ||		//�Г����FOK��?
//				(frm.status_cd.value == <%=const_status_M_W%> && frm.sell_skip_flg.value == 1 )) &&	//�d�l���쐬�����ŎГ����F�X�L�b�v���H
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
		if((frm.status_cd.value == const_status_M_W || frm.status_cd.value == const_status_K_W ) &&	//�d�l���쐬�������H
				 (frm.item_number.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
		{
			if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
			{
				//��o���������ύX���ꂽ�Ƃ��́A�K�i�����͂��X���[����B
			}
			else
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.item_name.focus();

				err_flg = 1;
//				alert( "�K�i�����w�肵�ĉ�����");
				alert_msg = alert_msg + "���K�i�����w�肵�ĉ�����";

			}
			
		}

		if( frm.item_sys_cd.value.length > 0 && frm.item_number.value.length <= 0)
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.item_name.focus();

			err_flg = 1;
			alert_msg = alert_msg + "�����i�V�X�e���R�[�h��ݒ肵�Ă���ꍇ�́A�K�i����I�����ĉ�����";
		}

		if( err_flg == 0 )
		{
			if( gfDateCheck(frm.deadline_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.deadline_day.focus();

				err_flg = 4;
//				alert( "��o�������̓��͂��s���ł��B�i��:2006/10/10�j");

				alert_msg = alert_msg + "����o�������̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			if( gfDateCheck(frm.start_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.start_day.focus();

				err_flg = 5;
//				alert( "����J�n���̓��͂��s���ł��B�i��:2006/10/10�j");

				alert_msg = alert_msg + "������J�n���̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			if( gfDateCheck(frm.end_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.end_day.focus();

				err_flg = 6;
//				alert( "����I�����̓��͂��s���ł��B�i��:2006/10/10");
				alert_msg = alert_msg + "������I�����̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			//���͒��`�F�b�N

			//const_buy_own_cd_size
			//if( gfHankakuCheck(frm.buy_own_cd.value) == 1 )
			//{
			//	if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			//	else	frm.buy_own_cd.focus();

			//	err_flg = 7;
//				alert_msg = alert_msg + "�������菤�i�R�[�h�͔��p" + const_buy_own_cd_size + "�����܂łł��B";
			//	alert_msg = alert_msg + "�������菤�i�R�[�h�͔��p�p�����݂̂ł��B";
			//}
			//const_sell_own_cd_size
			if( gfHankakuCheck3(frm.sell_own_cd.value) == 1  )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_own_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "�����Џ��i�R�[�h�͔��p" + const_sell_own_cd_size + "�����܂łł��B";
				alert_msg = alert_msg + "�����Џ��i�R�[�h�͔��p�p�����݂̂ł��B";
			}
			//const_patron_cd_size
			if( gfHankakuCheck(frm.patron_cd.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.patron_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "���[�i��R�[�h�͔��p" + const_patron_cd_size + "�����܂łł��B";
				alert_msg = alert_msg + "���[�i��R�[�h�͔��p�p�����݂̂ł��B";
			}



			if( frm.buy_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.buy_memo.focus();

				err_flg = 7;
//				alert( alert_msg );


				alert_msg = alert_msg + "���Г��ւ̓`�B������" + const_memo200_size + "�����܂łł��B���݁A" + frm.buy_memo.value.length + "�����ł��B";

			}
			//���͒��`�F�b�N
			if( frm.sell_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_memo.focus();

				err_flg = 8;
//				alert( alert_msg );
				alert_msg = alert_msg + "���Г��ւ̓`�B������" + const_memo200_size + "�����܂łł��B���݁A" + frm.sell_memo.value.length + "�����ł��B";

			}
			//���͒��`�F�b�N
			if( frm.memo.value.length > const_memo1000_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.memo.focus();

				err_flg = 9;
//				alert( alert_msg );

				alert_msg = alert_msg + "�������ւ̓`�B������" + const_memo1000_size + "�����܂łł��B���݁A" + frm.memo.value.length + "�����ł��B";
			}
		}
	}


	if( err_flg == 0 )
	{
		if( knd == 1 )		//�V�K�o�^
		{
			if( msg == "�L���`�F�b�N�҂�" )
			{
				if( confirm("�쐬�����K�i����A�g���܂����H"))
 				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "���܂����H"))
				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 2 )		//�X�V
		{
			if( datachk == 1)
			{
				if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
				{
					if( confirm("��o���������ύX����Ă��܂��B��o�����ύX�˗����s���܂����{���ɂ�낵���ł����H"))
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
				if( confirm(msg + "���s���ċX�����ł����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}

			if( msg == '�L���`�F�b�N�҂�' )
			{
				if( confirm("�쐬�����K�i����A�g���܂����H"))
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
				if( confirm(msg + "���܂����H")) {
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
				if( confirm(msg + "���s���ċX�����ł����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "���܂����H")) {
				flg = 1;
//				if( frm.status_cd.value == const_status_T_I_OK  ||  frm.status_cd.value == const_status_T_S_OK ){
//					if( confirm("�{���ɏ��F���܂����H�K�i���͎�舵�����i�Ƃ��Čf�ڂ���܂��B")) {
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
				if( confirm("���F��۔F���܂����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "���܂����H")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 8 )
		{
			if( confirm("��o���s���ċX�����ł����H")) {
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
				if( confirm("���F��۔F���܂����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
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
					if( confirm("�K�i���敪���ύX����Ă��܂��B\n�K�i���敪��ύX���Ē�o�˗����s���ċX�����ł����H") == false) {
				    	return 1;
				    }
				}
			}
			if( confirm("�Ē�o�˗��̈˗������͋L������܂������H")) {
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
				alert("���ɍ폜����Ă��܂��B");
			    return 1;
			}
			if( confirm("�폜���s���ċX�����ł����H")) {
				frm.p_proc_flg.value = "3";
				frm.del_flg.value = "1";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 6 )		//�d�l�ύX�̂��߁A���̋K�i��o��Ԃ��쐬
		{
			if( confirm("�d�l�ύX���s���ċX�����ł����H")) {
				frm.p_proc_flg.value = "6";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 7 )		//���i�I����ݒ�
		{

			if( datachk == 1 &&  frm.end_day.value.length <= 0 )
			{
				err_flg = 1;
				alert( "����I��������͂��ĉ�����");
				frm.end_day.focus();
			}
			if( datachk == 1 &&  err_flg == 0 && gfDateCheck(frm.end_day.value) == 1 )
			{
				err_flg = 1;
				alert( "����I�����̓��͂��s���ł��B�i��:2006/10/10)");
				frm.end_day.focus();
			}
			if( err_flg == 1 ) 
			{
			    return 1;
			}

			if( confirm("����I���ݒ���s���ċX�����ł����H"))
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
 * �w�蕶����̃T�C�Y��Ԃ�
 *****************************************************************************/
function checkStrLen_edit(chkstr){
	var count = 0;
	for (var i=0;i<chkstr.length;i++){
		(chkstr.charAt(i).match(/[�-ݦ���������]/) || escape(chkstr.charAt(i)).length< 4)?count++:count+=2;
	}

	return count;
}


function Status_edit_submitClick(frm,knd,msg,datachk){
	const_status_Jyunbi = 0	;	
	const_status_K_W = 10;		//�����m�F��'	,'���������˗�'
	const_status_K_NG = 21	;	//�����m�FNG'	,'�������Ē�o'
	const_status_M_W = 40;		//�쐬���@'	,'�쐬��'
	const_status_M_K_W = 45;		//�L���҂�
	const_status_M_K_OK = 50;		//�L��OK','�쐬���A '�K�i�����e�`�F�b�NOK(���̓`�F�b�N�o�b�`�ŃX�e�[�^�X�}���j
	const_status_M_K_NG = 61;	//�쐬���i�L���`�F�b�NNG�j','�L��NG''�K�i�����e�`�F�b�NNG(���̓`�F�b�N�o�b�`�ŃX�e�[�^�X�}���j
	const_status_M_S_W = 70;		//�쐬���A'	,'�Г����F�҂�'
	const_status_M_S_OK = 80;		//�쐬���B'	,'�Г����FOK'
	const_status_M_S_NG = 91;		//�쐬���C'	,'�Г����FNG'
	const_status_T_W = 100;		//�m�F��'	,'��o���@'
	const_status_T_I_OK = 105;		//�m�F��'	,'��o���@'
	const_status_T_S_NG = 141;		//�Ē�o�˗����A'	,'���FNG'
	const_status_T_S_W = 120;	//�������Г����F�҂�'	,'��o���B'
	const_status_T_S_OK = 130;	//�������Г����FOK'	,'��o���C'
	const_status_open = 200;		//���F'	,'���F�ς�'

	const_memo200_size	=	200;
	const_memo1000_size	=	1000;
	const_buy_own_cd_size	=	20;
	const_sell_own_cd_size	=	20;
	const_patron_cd_size	=	20;

	var err_flg = 0;

	var alert_msg = "";

	if( knd != 3 && datachk == 1)		//�ꗗ(user_status_list)����̏ꍇ�A�f�[�^�`�F�b�N�͍s��Ȃ�
	{

	
		//�K�{�`�F�b�N
		if (frm.user_name != undefined) {
			if ((frm.user_cd.value.length <= 0 ) || (frm.user_name.value.length <= 0 )) {
				err_flg = 1;
				//alert( "������Ж��i�K�{�j���w�肵�ĉ�����");
				alert_msg = "���������Ƃ��w�肵�ĉ�����";
				frm.user_name.focus();
			}
		}else{
			if( frm.user_cd.value.length <= 0 ) {
				err_flg = 1;
				//alert( "������Ж��i�K�{�j���w�肵�ĉ�����");
				alert_msg = "���������Ƃ��w�肵�ĉ�����";
				frm.user_name.focus();
			}
		}



		//�K�{�`�F�b�N
		if( frm.customer_cd.value.length <= 0 )
		{
			err_flg = 1;
			alert_msg = "��������Ƃ��w�肵�ĉ�����";
			frm.customer_name.focus();
		}


		if( frm.dmy_item_name.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.dmy_item_name.focus();

			err_flg = 1;
//			alert( "���i������͂��ĉ�����");
			alert_msg = alert_msg + "�����i������͂��ĉ�����";

		}
		if( frm.deadline_day.value.length <= 0 )
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.deadline_day.focus();

			err_flg = 1;
//			alert( "��o����������͂��ĉ�����");
			alert_msg = alert_msg + "����o����������͂��ĉ�����";
		}
//		else if(((teisyutu == 1 && frm.sell_skip_flg.value == 1 ) ||			 //��o�������ŁA�Г����F�X�L�b�v���H
//				 frm.status_cd.value == <%=const_status_M_S_OK%>  ||		//�Г����FOK��?
//				(frm.status_cd.value == <%=const_status_M_W%> && frm.sell_skip_flg.value == 1 )) &&	//�d�l���쐬�����ŎГ����F�X�L�b�v���H
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
		if((frm.status_cd.value == const_status_M_W || frm.status_cd.value == const_status_K_W ) &&	//�d�l���쐬�������H
				 (frm.item_number.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
//				 (frm.item_number.value.length <= 0 || frm.specification_cd.value.length <= 0 ||  frm.item_name.value.length <= 0))	//��L�R�̂��Âꂩ�ŁA�K�i�����ݒ肳��Ă��Ȃ����A�G���[
		{
			if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
			{
				//��o���������ύX���ꂽ�Ƃ��́A�K�i�����͂��X���[����B
			}
			else
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.item_name.focus();

				err_flg = 1;
//				alert( "�K�i�����w�肵�ĉ�����");
				alert_msg = alert_msg + "���K�i�����w�肵�ĉ�����";

			}
			
		}

		if( frm.item_sys_cd.value.length > 0 && frm.item_number.value.length <= 0)
		{
			if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			else	frm.item_name.focus();

			err_flg = 1;
			alert_msg = alert_msg + "�����i�V�X�e���R�[�h��ݒ肵�Ă���ꍇ�́A�K�i����I�����ĉ�����";
		}

		if( err_flg == 0 )
		{
			if( gfDateCheck(frm.deadline_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.deadline_day.focus();

				err_flg = 4;
//				alert( "��o�������̓��͂��s���ł��B�i��:2006/10/10�j");

				alert_msg = alert_msg + "����o�������̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			if( gfDateCheck(frm.start_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.start_day.focus();

				err_flg = 5;
//				alert( "����J�n���̓��͂��s���ł��B�i��:2006/10/10�j");

				alert_msg = alert_msg + "������J�n���̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			if( gfDateCheck(frm.end_day.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.end_day.focus();

				err_flg = 6;
//				alert( "����I�����̓��͂��s���ł��B�i��:2006/10/10");
				alert_msg = alert_msg + "������I�����̓��͂��s���ł��B�i��:2006/10/10�j";

			}
			//���͒��`�F�b�N

			//const_buy_own_cd_size
			//if( gfHankakuCheck(frm.buy_own_cd.value) == 1 )
			//{
			//	if( err_flg != 0 )	alert_msg = alert_msg + "\n";
			//	else	frm.buy_own_cd.focus();

			//	err_flg = 7;
//				alert_msg = alert_msg + "�������菤�i�R�[�h�͔��p" + const_buy_own_cd_size + "�����܂łł��B";
			//	alert_msg = alert_msg + "�������菤�i�R�[�h�͔��p�p�����݂̂ł��B";
			//}
			//const_sell_own_cd_size
			if( gfHankakuCheck3(frm.sell_own_cd.value) == 1  )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_own_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "�����Џ��i�R�[�h�͔��p" + const_sell_own_cd_size + "�����܂łł��B";
				alert_msg = alert_msg + "�����Џ��i�R�[�h�͔��p�p�����݂̂ł��B";
			}
			//const_patron_cd_size
			if( gfHankakuCheck(frm.patron_cd.value) == 1 )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.patron_cd.focus();

				err_flg = 7;
//				alert_msg = alert_msg + "���[�i��R�[�h�͔��p" + const_patron_cd_size + "�����܂łł��B";
				alert_msg = alert_msg + "���[�i��R�[�h�͔��p�p�����݂̂ł��B";
			}



			if( frm.buy_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.buy_memo.focus();

				err_flg = 7;
//				alert( alert_msg );


				alert_msg = alert_msg + "���Г��ւ̓`�B������" + const_memo200_size + "�����܂łł��B���݁A" + frm.buy_memo.value.length + "�����ł��B";

			}
			//���͒��`�F�b�N
			if( frm.sell_memo.value.length > const_memo200_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.sell_memo.focus();

				err_flg = 8;
//				alert( alert_msg );
				alert_msg = alert_msg + "���Г��ւ̓`�B������" + const_memo200_size + "�����܂łł��B���݁A" + frm.sell_memo.value.length + "�����ł��B";

			}
			//���͒��`�F�b�N
			if( frm.memo.value.length > const_memo1000_size )
			{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else	frm.memo.focus();

				err_flg = 9;
//				alert( alert_msg );

				alert_msg = alert_msg + "�������ւ̓`�B������" + const_memo1000_size + "�����܂łł��B���݁A" + frm.memo.value.length + "�����ł��B";
			}
		}


//�̔��Ҋ֘A���̓`�F�b�N
if( frm.p_proc_flg.value == "1" ){
	if( frm.opt_oroshi.value == "1" && frm.oroshi_cd.value == "2" ) {		//���ŁA�܂��X���[�ݒ�͂���Ă��Ȃ���
			//�̔��Ҋ֘A���̓`�F�b�N

		if( frm.through_flg.checked == true){		//�X���[�t���O�Ƀ`�F�b�N���肩�H

		// �̔��ґS�p�`�F�b�N(�ő�20�����j�`�F�b�N
		var ext = frm.h_company_name.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 40 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_company_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔��҂��S�p�Q�O�����𒴂��Ă��܂�";
			}
		}else{
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_company_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔��Җ��͕K�{���͂ł�";
		}
		// �̔��Җ��S���Җ�(�ő�20�����j�`�F�b�N
		var ext = frm.h_tantou_name.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 40 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_tantou_name.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔��ҒS���Җ����S�p�Q�O�����𒴂��Ă��܂�";
			}
		}
		// �̔��ҏZ��(�ő�40�����j�`�F�b�N
		var ext = frm.h_addr.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 80 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_addr.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔��ҏZ�����S�p�S�O�����𒴂��Ă��܂�";
			}
		}
		// �̔���tel�i���p�����ƃn�C�t���F�ő�P�V�����j�`�F�b�N
		var ext = frm.h_tel.value;
		if (ext) {
			if( gfNumberCheck2(ext) != 0){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_tel.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔���TEL�͔��p�����ƃn�C�t���œ��͂��Ă�������";
			}else if( checkStrLen_edit(ext) > 17 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_tel.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔���TEL�����p�P�V�����𒴂��Ă��܂�";
			}

		}
		// �̔���fax�i���p�����ƃn�C�t���F�ő�P�V�����j�`�F�b�N
		var ext = frm.h_fax.value;
		if (ext) {
			if( gfNumberCheck2(ext) != 0){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_fax.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔���FAX�͔��p�����ƃn�C�t���œ��͂��Ă�������";
			}else if( checkStrLen_edit(ext) > 17 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_fax.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔���FAX�����p�P�V�����𒴂��Ă��܂�\n";
			}
		}
		// �̔��Ҕ��l�S�p�`�F�b�N(�ő�T�O�����j�`�F�b�N
		var ext = frm.h_memo.value;
		if (ext) {
			if( checkStrLen_edit(ext) > 100 ){
				if( err_flg != 0 )	alert_msg = alert_msg + "\n";
				else if(document.frm_dispchange.setumei_flg.value == "1"){		//�̔��҂��\������Ă��邩�`�F�b�N
					frm.h_memo.focus();
				}
				err_flg = 10;
				alert_msg = alert_msg + "���̔��Ҕ��l���S�p�T�O�����𒴂��Ă��܂�";
			}
		}

		}
	}
}


		if( err_flg == 0 )
		{
			var aite_flg = 0;
			//���A�g���̃`�F�b�N
			if( frm.buysell_flg.value == "1" ){		//�������̎��A
	
				if( frm.aite_user_cd.value != "" ){	//����̎����i�O�H�j�R�[�h�ݒ肳��Ă���
					aite_flg = 1;		//�����R�[�h�ݒ肠��
					if( frm.moto_aite_user_cd.value != "" && frm.moto_aite_user_cd.value != frm.aite_user_cd.value ){	//����̎����i�O�H�j�R�[�h���ύX���ꂽ
						alert("�����͕ύX�ł��܂���");
						frm.aite_user_cd.focus();
						    return 1;
					}
	
					if( frm.moto_aite_user_cd.value == "" ){	//�V�K�A�g���H
						if( confirm("�]���ݒ���s���ċX�����ł����H�ύX�͏o���܂���")) {
							frm.aite_record_ins_flg.value = "1";		//���背�R�[�h�V�K�o�^����
						}else{
						    return 1;
						}
					}
				}
				if( frm.aite_user_cd.value == "" ){	//����̎����i�O�H�j�R�[�h���ݒ�
					aite_flg = 0;		//�����R�[�h�ݒ�Ȃ�
					if( frm.moto_aite_user_cd.value != frm.aite_user_cd.value ){	//����̎����i�O�H�j�R�[�h���ύX���ꂽ
						alert("�ύX�ł��܂���");
						frm.aite_user_cd.focus();
						    return 1;
					}
				}
			}else if( frm.buysell_flg.value == "2" ){		//������̎��A
	
	
				if( frm.aite_customer_cd.value != "" ){	//����̎����i���[�J�[�j�R�[�h�ݒ肳��Ă���
					aite_flg = 1;		//�����R�[�h�ݒ肠��
					if( frm.moto_aite_customer_cd.value != "" && frm.moto_aite_customer_cd.value != frm.aite_customer_cd.value ){	//����̎����i���[�J�[�j�R�[�h���ύX���ꂽ
						alert("�����͕ύX�ł��܂���");
						frm.aite_customer_cd.focus();
						    return 1;
					}
					if( frm.moto_aite_customer_cd.value == "" ){	//�V�K�A�g���H
						if( confirm("�]���ݒ���s���ċX�����ł����H�ύX�͏o���܂���")) {
							frm.aite_record_ins_flg.value = "1";		//���背�R�[�h�V�K�o�^����
						}else{
						    return 1;
						}
					}
				}
				if( frm.aite_customer_cd.value == "" ){	//����̎����i���[�J�[�j�R�[�h���ݒ�
					aite_flg = 0;		//�����R�[�h�ݒ�Ȃ�
					if( frm.moto_aite_customer_cd.value != frm.aite_customer_cd.value ){	//����̎����i���[�J�[�j�R�[�h���ύX���ꂽ
						alert("�ύX�ł��܂���");
						frm.aite_customer_cd.focus();
						    return 1;
					}
				}
				
	
				//������ŋK�i�����w�肳��A�A�g�Ȃ�����A�g���ꂽ��
				if( frm.js_chk_oroshi_cd.value  == "2" && frm.item_number.value != "" &&  frm.moto_aite_customer_cd.value == "" && frm.aite_customer_cd.value != "" ){
						alert("����o�󋵂�]���ݒ�ɂ���ꍇ�́A�K�i�����������ĉ������B");
					    return 1;
				}
			}


			//�X���[�ݒ�ON���ɘA�g�悪�ݒ肳��Ă��邩�`�F�b�N
			if( frm.through_flg.checked == true ){
				if( frm.buysell_flg.value == "1" ){		//�������̎�
					if( frm.aite_user_cd.value == "" ){
						alert("��o��O�H����ݒ肷�邩�A�]���ݒ���������ĉ������B")
						return 1;
					}
				}else{		//����莞
					if( frm.aite_customer_cd.value == "" ){
						alert("�˗��惁�[�J�[����ݒ肷�邩�A�]���ݒ���������ĉ������B")
						return 1;
					}
				}
			}

		}
	}
	
	
	if( err_flg == 0 )
	{
		if( knd == 1 )		//�V�K�o�^
		{
			if( msg == "�L���`�F�b�N�҂�" )
			{
				if( confirm("�쐬�����K�i����A�g���܂����H"))
 				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
			else
			{
				if( confirm(msg + "���܂����H"))
				{
					frm.p_proc_flg.value = "1";
//					frm.submit();
					return 0;
				}
			}
		}
		else if( knd == 2 )		//�X�V
		{
			if( datachk == 1)
			{
				if( frm.save_deadline_day.value.length != 0 && frm.deadline_day.value != frm.save_deadline_day.value )
				{
					if( confirm("��o���������ύX����Ă��܂��B��o�����ύX�˗����s���܂����{���ɂ�낵���ł����H"))
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
				if( confirm(msg + "���s���ċX�����ł����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}

			if( msg == '�L���`�F�b�N�҂�' )
			{
				if( confirm("�쐬�����K�i����A�g���܂����H"))
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
				if( confirm(msg + "���܂����H")) {
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
				if( confirm(msg + "���s���ċX�����ł����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "1";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "���܂����H")) {
				flg = 1;
//				if( frm.status_cd.value == const_status_T_I_OK  ||  frm.status_cd.value == const_status_T_S_OK ){
//					if( confirm("�{���ɏ��F���܂����H�K�i���͎�舵�����i�Ƃ��Čf�ڂ���܂��B")) {
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
				if( confirm("���F��۔F���܂����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm(msg + "���܂����H")) {
				frm.yes_no.value = "2";
				frm.p_proc_flg.value = "2";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 8 )
		{
			if( confirm("��o���s���ċX�����ł����H")) {
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
				if( confirm("���F��۔F���܂����H�폜����Ă��܂����X�V����Ƃh�c�͗L���ɂȂ�܂��B")) {
					frm.yes_no.value = "2";
					frm.p_proc_flg.value = "2";
					frm.del_flg.value = "0";
//					frm.submit();
					return 0;
				}
			}
			if( confirm("�Ē�o�˗��̈˗������͋L������܂������H")) {
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
				alert("���ɍ폜����Ă��܂��B");
			    return 1;
			}
			if( confirm("�폜���s���ċX�����ł����H")) {
				frm.p_proc_flg.value = "3";
				frm.del_flg.value = "1";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 6 )		//�d�l�ύX�̂��߁A���̋K�i��o��Ԃ��쐬
		{
			if( confirm("�d�l�ύX���s���ċX�����ł����H")) {
				frm.p_proc_flg.value = "6";
				frm.del_flg.value = "0";
//				frm.submit();
				return 0;
			}
		}
		else if( knd == 7 )		//���i�I����ݒ�
		{

			if( datachk == 1 &&  frm.end_day.value.length <= 0 )
			{
				err_flg = 1;
				alert( "����I��������͂��ĉ�����");
				frm.end_day.focus();
			}
			if( datachk == 1 &&  err_flg == 0 && gfDateCheck(frm.end_day.value) == 1 )
			{
				err_flg = 1;
				alert( "����I�����̓��͂��s���ł��B�i��:2006/10/10)");
				frm.end_day.focus();
			}
			if( err_flg == 1 ) 
			{
			    return 1;
			}

			if( confirm("����I���ݒ���s���ċX�����ł����H"))
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
 �@�@�\�@�F�K�i���ڍ׃E�B���h�E�i=/search/DispDetail.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string p_com_cd - �o�^��ƃR�[�h
 �@�@�@�@�@2. [I  ] - string p_item_cd - �i��
 �@�@�@�@�@3. [I  ] - string p_com_cd2 - ��ƃR�[�h�Q
 �@�@�@�@�@4. [I  ] - string p_knd - �K�i���\���敪
 2008/8/--yamazaki
***************************************************************************************************/
function DispWindow(frm,p_com_cd,p_item_num ,p_com_cd2 ,p_knd , p_item_cd , p_add_kbn , p_item_num2, p_seqnum) {

//����������20091101�����@�֑Ή�
	var certify_kikaku_disp_flg;
	certify_kikaku_disp_flg = "0";
	if (frm.certify_kikaku_disp_flg != undefined) {
		//�t���O��"1"�̎��A�����@�֑��p�e�[�u���icertify_item_m)�̋K�i����\������
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
 �@�@�\�@�F���C�g�ŋK�i���ڍ׃E�B���h�E�i=/search/DispDetailList.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string p_com_cd - �o�^��ƃR�[�h
 �@�@�@�@�@3. [I  ] - string p_com_cd2 - ��ƃR�[�h�Q
 �@�@�@�@�@4. [I  ] - string p_knd - �K�i���\���敪
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


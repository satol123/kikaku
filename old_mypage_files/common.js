var mobjWindowHandle;
var mblnWiondowOpen = false;
var mstrSaveFieldValue;

/***************************************************************************************************
 �@�@�\�@�F�u���E�U���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrUrl - �I�[�v������ URL
 �@�@�@�@�@2. [I  ] - string pstrWindowName - �I�[�v������E�B���h�E��
 �@�@�@�@�@3. [I  ] - string pstrWindowWidth - �I�[�v������E�B���h�E�̕��T�C�Y
 �@�@�@�@�@4. [I  ] - string pstrWindowHeight - �I�[�v������E�B���h�E�̏c�T�C�Y
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
 �@�@�\�@�F�u���E�U���N���[�Y���܂��D
 ���@���@�Fnone
 �Ԃ�l�@�Fnone
 ���@�l�@�FgfOpenWindow �ŃI�[�v�������E�B���h�E���Ώۂł��D

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
***************************************************************************************************/
function gfCloseWindow() {

    if (!mblnWiondowOpen) return;

    if (mobjWindowHandle.closed == false){
        mobjWindowHandle.close();
    }

}



/***************************************************************************************************
 �@�@�\�@�F����於��I������E�B���h�E�i=/scripts/Sel_Customer.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrSelBuy - Request("selbuy") �l
 �@�@�@�@�@2. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrCustomerNameField - �I����������於��ݒ肷�� <input> Name �����l
 �@�@�@�@�@4. [I  ] - string pstrWindowWidth - �I�[�v������E�B���h�E�̕��T�C�Y
 �@�@�@�@�@5. [I  ] - string pstrWindowHeight - �I�[�v������E�B���h�E�̏c�T�C�Y
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
 �@�@�\�@�F���L����ݒ肷��E�B���h�E�i=/trade/change_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrMode        - ���[�h
 �@�@�@�@�@2. [I  ] - string pstrCid         - Catalog_Id
 �@�@�@�@�@3. [I  ] - string pstrTid         - Trade_Id
 �@�@�@�@�@4. [I  ] - string pstrWindowName  - Window Name
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2004/11/08�@Y.Chiba       �V�K
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
 �@�@�\�@�F�O���[�v�������I������E�B���h�E�i=/scripts/Sel_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
 2004/07/14�@H.Ohmura      ����pstrMode�ǉ�
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
 �@�@�\�@�F�O���[�v�������I������E�B���h�E�i=/scripts/Sel_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B
 �@�@�@�@�@�܂��A������̕Ԃ�l�́A�O���[�v�e���@���@�O���[�v���@�ƂȂ�܂��B

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2004/02/23�@K.Yamato      �V�K
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
 �@�@�\�@�F�O���[�v�������I������E�B���h�E�i=/scripts/Sel_group_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �@�@�@�@�@4. [I  ] - string pstrAddParameter         - �ǉ��p�����[�^
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B
 �@�@�@�@�@�܂��A������̕Ԃ�l�́A�O���[�v�e���@���@�O���[�v���@�ƂȂ�܂��B

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2005/07/01�@S.Kataoka     �V�K
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
 �@�@�\�@�F�O���[�v�����I������E�B���h�E�i=/scripts/Sel_group_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/12/19�@Y.Nakai      �V�K
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
 �@�@�\�@�F�O���[�v�����I������E�B���h�E�i=/scripts/Sel_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �@�@�@�@�@4. [I  ] - string pstrKbnMember - �����I��(0:�{���̂� 1:�O���[�v����̂� 2:�O���[�v�S�� ��:�Ȃ�)
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/12/19�@Y.Nakai      �V�K
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
 �@�@�\�@�F�O���[�v�����I������E�B���h�E�i=/scripts/Sel_group_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/12/19�@Y.Nakai      �V�K
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
 �@�@�\�@�F�O���[�v�����I������E�B���h�E�i=/scripts/Sel_member.asp�j���I�[�v�����܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrChildMemberNameField - �I�������O���[�v�������ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - string pstrChildMemberCodeField - �I�������O���[�v����R�[�h��ݒ肷�� <input> Name �����l
 �@�@�@�@�@4. [I  ] - string pstrAddParameter         - �ǉ��p�����[�^
 �Ԃ�l�@�Fnone
 ���@�l�@�F���̊֐��ł́A�Ăяo������member_code���Z�b�g���܂��B
 �@�@�@�@�F��L[gfOpenSelectChildMemberCodeProd][gfOpenSelectChildMemberCodeSel]�����̊֐��ɒu����������H

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2005/07/01�@S.Kataoka     �V�K
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
 �@�@�\�@�F�����l��ϐ��֕ێ�����D
 ���@���@�F1. [I  ] - object pobjObject - �I�u�W�F�N�g�Q�ƒl
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
***************************************************************************************************/
function gfSaveFieldValue(pobjObject) {

    mstrSaveFieldValue = pobjObject.value;

}



/***************************************************************************************************
 �@�@�\�@�F�w��t�B�[���h�̓��t���ڒl��ҏW����
 ���@���@�F1. [I  ] - object pobjObject - �I�u�W�F�N�g�Q�ƒl
 �@�@�@�@�@2. [I  ] - int pintMode - �ҏW���[�h�i1=�����񒷃`�F�b�N�^2=yyyy/mm/dd �ҏW�j
 �@�@�@�@�@3. [I  ] - int pintLength - �����񒷐�
 �Ԃ�l�@�Fnone�i�w��I�u�W�F�N�g�֒��ڕԂ��܂��j
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
 �@�@�\�@�F���t�Ƃ��ĕ]���ł��邩�u�[���^�ŕԂ��܂��D
 ���@���@�F1. [I  ] - string pstrYear - �N
 �@�@�@�@�@2. [I  ] - string pstrMonth - ��
 �@�@�@�@�@3. [I  ] - string pstrDay - ��
 �Ԃ�l�@�Ftrue  = �]��
 �@�@�@�@�@false = ��]��
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
 �@�@�\�@�F�����񒷂̃`�F�b�N�H
 ���@���@�F1. [I  ] - string pstrExpression - ��
 �@�@�@�@�@2. [I  ] - int pintLength - �����񒷐��H
 �@�@�@�@�@3. [I  ] - int I - �H
 �Ԃ�l�@�F
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
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
 �@�@�\�@�FJavaScript �� Trim �֐�
 ���@���@�F1. [I  ] - string pstrExpression - ��
 �Ԃ�l�@�Fstring �ҏW������
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
***************************************************************************************************/
function gfTrim(pstrExpression) {

    var wstrRtn = '';

    wstrRtn = pstrExpression;
    wstrRtn = wstrRtn.replace(/^[ �@]+/, '');
    wstrRtn = wstrRtn.replace(/[ �@]+$/, '');

    return(wstrRtn);

}



/***************************************************************************************************
 �@�@�\�@�F�y�[�W�ړ���񋟂��܂��D
 ���@���@�F1. [I  ] - string pstrForm - <form> Name �����l
 �@�@�@�@�@2. [I  ] - string pstrPageNoField - �y�[�W�ԍ���ݒ肷�� <input> Name �����l
 �@�@�@�@�@3. [I  ] - int pintPageNoValue - �y�[�W�ԍ�
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2003/10/--�@H,Fukuda      �V�K
***************************************************************************************************/
function gfPaging(pstrForm
                , pstrPageNoField
                , pintPageNoValue
                 ) {

    // eval �֐��ɂĎ��Ԃ��쐬
    var wobjControl = eval(pstrForm + '.' + pstrPageNoField);

    wobjControl.value = pintPageNoValue;
    document[pstrForm].submit();


    // �C���X�^���X��j��
    wobjControl = null;

}

/***************************************************************************************************
 �@�@�\�@�F�I�u�W�F�N�g��L���^�����ɂ��܂��B
 ���@���@�F1. [I  ] - object pobjObject - 	�I�u�W�F�N�g�Q�ƒl
 �@�@�@�@�@2. [I  ] - int pintSetFlg - 		�L��:1   ����:0
 �@�@�@�@�@3. [I  ] - int pintMode - 		�w�i�F��ύX���邩�ۂ�
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����________�ύX���e_________________________________________________________________
 2004/09/10�@S,Kumagai      �V�K
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
 �@�@�\�@�F���Ԃ̓��͒l�����������`�F�b�N���܂��B
 ���@���@�F1. [I  ] - pobjFrom		As Object		- �J�n���ԓ��͗p�e�L�X�g�{�b�N�X
 �@�@�@�@�@2. [I  ] - pobjTo		As Object		- �I�����ԓ��͗p�e�L�X�g�{�b�N�X
 �@�@�@�@�@3. [I  ] - pintTarget	As Integer		- �������Ȃ��ꍇ�Ɍ��̃f�[�^��ݒ肷��e�L�X�g�{�b�N�X
 �@�@�@�@�@4. [I  ] - pstrValue		As String		- �������Ȃ��ꍇ�ɐݒ肷�錳�f�[�^
 �Ԃ�l�@�Fnone
 ���@�l�@�F

 �ύX��______�S����_________�ύX���e_________________________________________________________________
 2004/10/05�@Y.Nakai		�V�K
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

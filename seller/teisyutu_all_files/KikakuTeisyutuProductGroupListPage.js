
function frm1OnLoad() {


	$("#txtEndDay_s1_8_top").focus(function () {
		document.getElementById('txtEndDay_s1_8_down').value=document.getElementById('txtEndDay_s1_8_top').value;
		$("#txtEndDay_s1_8_down").getWeekName();

	});
	$("#txtEndDay_s1_8_down").focus(function () {
		document.getElementById('txtEndDay_s1_8_top').value=document.getElementById('txtEndDay_s1_8_down').value;
		$("#txtEndDay_s1_8_top").getWeekName();
	});

	$("#txtEndDay_s1_8_top").change(function () {
		document.getElementById('txtEndDay_s1_8_down').value=document.getElementById('txtEndDay_s1_8_top').value;
		if ($(this).val() == "") {
			$("#week-txtEndDay_s1_8_down").html("");
		}
	});
	$("#txtEndDay_s1_8_down").change(function () {
		document.getElementById('txtEndDay_s1_8_top').value=document.getElementById('txtEndDay_s1_8_down').value;
		if ($(this).val() == "") {
			$("#week-txtEndDay_s1_8_top").html("");
		}
	});


	if (document.getElementById('displayFlag').value == "1") {
        	try{
        		document.getElementById('kennsakuAll').style.display = 'none';
            	document.getElementById('singleKeyWord').style.display = '';
        	}catch(e){

        	}
	} else {
			try{
				document.getElementById('kennsakuAll').style.display = '';
		    	document.getElementById('singleKeyWord').style.display = 'none';
			}catch(e){

			}
	}

	//guosx:tab 切换时，保持颜色不变
	if(document.getElementById("panelRadioDateOther-1")){
		if(document.getElementById("panelRadioDateOther-1").checked){
			$("#bakcgroundColor").addClass("checked");
			$("#elem_disable").removeClass("elem-disable");
		}else{
			$("#bakcgroundColor").removeClass("checked");
			$("#elem_disable").addClass("elem-disable");
		}
	}


	//規格書B票 #15543
	if($("#panelRadioDateOther-1").attr("checked") == "checked"){
		$("#txtDateOtherBegin").attr("disabled",null);
		$("#txtDateOtherEnd").attr("disabled",null);
	}


}



//6120 商品マスタを検索
function KikakuItemMatchingListPage_submit(seq,seqEda){

    var objtxtsellProductCd = document.getElementById("txtsellProductCdid_"+seq+"_"+seqEda);

    var txtsellProductCdid ="";
    if(objtxtsellProductCd!=null){
    	txtsellProductCdid = objtxtsellProductCd.value;
    }

    txtsellProductCdid=encodeURI(txtsellProductCdid);


    var objtxtjanCode = document.getElementById("txtjanCode_"+seq+"_"+seqEda);

    var txtjanCode = "";
    if(objtxtjanCode!=null){
    	txtjanCode =   objtxtjanCode.value;
    }

    txtjanCode=encodeURI(txtjanCode);

    var objtxtsellProductName= document.getElementById("txtsellProductName_"+seq+"_"+seqEda);

    var txtsellProductName="";

    if(objtxtsellProductName!=null){
    	txtsellProductName = objtxtsellProductName.value;
    }

    txtsellProductName = encodeURI(txtsellProductName);
    wQueryStr = '?seq=' + seq
        + '&seq_eda=' + seqEda
        + '&sell_product_cd=' + txtsellProductCdid
        + '&jan_code=' + txtjanCode
        + '&sell_product_name=' + txtsellProductName;
wTransFile = '/kikaku/kikakuitemmatchinglist.page';
wTransPath =wTransFile + wQueryStr;
document.getElementById("KikakuItemMatchingListPage_"+seq+"_"+seqEda).href=wTransPath;
return false;
}


function radioOnChenga(e){
	if(e.value==1){
		document.getElementById("txtDateOtherBegin").disabled=false;
		document.getElementById("txtDateOtherEnd").disabled=false;

		//guosx:
		$("#elem_disable").removeClass("elem-disable");
		$("#bakcgroundColor").addClass("checked");

	}else{
		document.getElementById("txtDateOtherBegin").disabled=true;
		document.getElementById("txtDateOtherEnd").disabled=true;
		document.getElementById("txtDateOtherBegin").value="";
		document.getElementById("txtDateOtherEnd").value="";

		document.getElementById("hidDateBegin").value="";
		document.getElementById("hidDateEnd").value="";

		//guosx:
		$("#elem_disable").addClass("elem-disable");
		$("#bakcgroundColor").removeClass("checked");

	}

}

	//guosx:2012/09/29
	function confirmSubmit(type){

		var flag = false;
		var value = $("#hidAllCheckedType").val();

		/*
		 * //guosx:2012/09/29
			1=表示中の一覧を全て選択
			2=検索結果の全てを選択
			3=選択した全てを解除
			4=表示中の選択を全て解除
			简单判断，没有人会无聊到，全部选中，然后再每页都不选中的。
		 */
		if(value == "3" || value == ""){
			var values = $("[id^=chkDetail_]");
			for(var i = 0; i < values.length; i++){
				if(values[i].checked==true){
					flag = true;
				}
			}
		}else{
			flag = true;
		}

		if(!flag){
			if(type == 1){
				alert(arrMsg[3]);
				return false;
			}else if(type == 2){
				alert(arrMsg[2]);
				return false;
			}else{
				alert(arrMsg[1]);
				return false;
			}
		}

		if(window.confirm(arrMsg[0])){
			return true;
		}
		return false;
	}

	/*
	 * //guosx:2012/09/29
		1=表示中の一覧を全て選択
		2=検索結果の全てを選択
		3=選択した全てを解除
		4=表示中の選択を全て解除
		2/3 jsでなくて、javaで判断する
	 */
	function allChecked(type){
		if(type == 1){
			$("[id^=chkDetail_]").attr("checked", "checked");
			$("#hidAllCheckedType").val(type);
		}else if(type == 2){
			$("[id^=chkDetail_]").attr("checked", "checked");
			$("#hidAllCheckedType").val(type);
		}else if(type == 3){
			$("[id^=chkDetail_]").attr("checked", null);
			$("#hidAllCheckedType").val(type);
		}else if(type == 4){
			$("[id^=chkDetail_]").attr("checked", null);
			$("#hidAllCheckedType").val(type);
		}

		checkCheckBoxAllColor();
	}

	function clearKeyWord(){
		$("#txtScwd").val('');
	}


